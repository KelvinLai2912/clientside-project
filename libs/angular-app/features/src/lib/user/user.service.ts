import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IUser } from '@kelvin/shared/api'; // Ensure that IUser is defined in your shared API
import { Injectable } from '@angular/core';
import { environment } from '@kelvin/shared/util-env'

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
    observe: 'body',
    responseType: 'json',
};

@Injectable()
export class UserService {
    public getUserById(userId: string): Observable<IUser> {
        // Use the `read` method to fetch the user by ID
        return this.read(userId);
    }
    endpoint = environment.dataApiUrl + `/api/user`;

    constructor(private readonly http: HttpClient) {}
        /**
     * Get all items.
     *
     * @options options - optional URL queryparam options
     */
    public list(options?: any): Observable<IUser[] | null> {
        console.log(`list ${this.endpoint}`);

        return this.http
            .get<ApiResponse<IUser[]>>(this.endpoint, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                map((response: any) => response.results as IUser[]),
                tap(console.log),
                catchError(this.handleError)
            );
    }


       /**
     * Create a new user.
     *
     * @param user - The user data to create.
     */
    public createUser(user: IUser): Observable<IUser> {
        console.log(`createUser at ${this.endpoint}`);

        return this.http
            .post<ApiResponse<IUser>>(this.endpoint, user, {
                ...httpOptions,
                observe: 'body',
                responseType: 'json' as const,
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IUser),
                catchError(this.handleError)
            );
    }


    /**
     * Get a single item from the service.
     *
     */
    public read(id: string | null, options?: any): Observable<IUser> {
        console.log(`read ${this.endpoint}`);
        return this.http
            .get<ApiResponse<IUser>>(this.endpoint + '/' + id, { 
                ...options,
                ...httpOptions,
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IUser),
                catchError(this.handleError)
            );
    }

    /**
     * Update an item.
     *
     * @param user - The user data to update.
     */
    public updateUser(user: IUser): Observable<IUser> {
        console.log(`updateUser at ${this.endpoint}`);

        return this.http
            .put<ApiResponse<IUser>>(`${this.endpoint}/${user._id}`, user, {
                ...httpOptions,
                observe: 'body',
                responseType: 'json',
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IUser),
                catchError(this.handleError)
            );
    }

    public delete(userId: string): Observable<any> {
        console.log(`delete ${this.endpoint}/${userId}`);
    
        return this.http
            .delete<ApiResponse<any>>(`${this.endpoint}/${userId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );
    }
    

    /**
     * Handle errors.
     */
    public handleError(error: HttpErrorResponse): Observable<any> {
        console.log('handleError in UserService', error);

        return throwError(() => new Error(error.message));
    }
}
