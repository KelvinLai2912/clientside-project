import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '@kelvin/shared/util-env';
import { ApiResponse, IEvent, ICreateEvent, IUpdateEvent } from '@kelvin/shared/api'; // Ensure that IEvent and related types are defined in your shared API


export const httpOptions = {
    observe: 'body',
    responseType: 'json',
};

@Injectable()
export class EventService {

    public getEventById(eventId: string): Observable<IEvent> {
        // Use the `read` method to fetch the user by ID
        return this.read(eventId);
    }
    endpoint = environment.dataApiUrl +`/api/event`;

    constructor(private readonly http: HttpClient) {}
        /**
     * Get all items.
     *
     * @options options - optional URL queryparam options
     */
    public list(options?: any): Observable<IEvent[] | null> {
        console.log(`list ${this.endpoint}`);

        return this.http
        .get<ApiResponse<IEvent[]>>(this.endpoint, {
            ...options,
            ...httpOptions,
        })
        .pipe(
            map((response: any) => response.results as IEvent[]),
            tap(console.log),
            catchError(this.handleError)
        );
    }
        
    /**
     * Create a new user.
     *
     * @param user - The user data to create.
     */
    public createEvent(event: ICreateEvent): Observable<IEvent> {
        console.log(`createEvent at ${this.endpoint}`);

        return this.http
        .post<ApiResponse<IEvent>>(this.endpoint, event, {
            ...httpOptions,
            observe: 'body',
            responseType: 'json' as const,
        })
        .pipe(
            tap(console.log),
            map((response: any) => response.results as IEvent),
            catchError(this.handleError)
        );
    }

    /**
     * Get a single item from the service.
     *
     */
    public read(id: string | null, options?: any): Observable<IEvent> {
        console.log(`read ${this.endpoint}/${id}`);
        return this.http
        .get<ApiResponse<IEvent>>(`${this.endpoint}/${id}`, {
            ...options,
            ...httpOptions,
        })
        .pipe(
            tap(console.log),
            map((response: any) => response.results as IEvent),
            catchError(this.handleError)
        );
    }

        /**
     * Update an item.
     *
     * @param user - The user data to update.
     */

    public updateEvent(id: string, event: IUpdateEvent): Observable<IEvent> {
        console.log(`updateEvent at ${this.endpoint}/${id}`);

        return this.http
        .put<ApiResponse<IEvent>>(`${this.endpoint}/${id}`, event, {
            ...httpOptions,
            observe: 'body',
            responseType: 'json' as const,
        })
        .pipe(
            tap(console.log),
            map((response: any) => response.results as IEvent),
            catchError(this.handleError)
        );
    }

    public delete(id: string): Observable<any> {
        console.log(`delete ${this.endpoint}/${id}`);

        return this.http
        .delete<ApiResponse<any>>(`${this.endpoint}/${id}`)
        .pipe(
            tap(console.log),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
        console.error('handleError in EventService', error);
        return throwError(() => new Error(error.message));
    }
}