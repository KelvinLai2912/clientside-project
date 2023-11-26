import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kelvin-event-list', 
    templateUrl: './event-list.component.html', 
    styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy {
    events: IEvent[] | null = null; 
    subscription: Subscription | undefined;

    constructor(private eventService: EventService) {} 

    ngOnInit(): void {
        this.loadEvents();
    }

    loadEvents(): void {
        this.subscription = this.eventService.list().subscribe((results) => { 
            console.log(`results: ${results}`);
            this.events = results; 
        });
    }

    deleteEvent(eventId: string): void {
        if (confirm('Are you sure you want to delete this event?')) {
            this.eventService.delete(eventId).subscribe({
                next: () => {
                    console.log('Event deleted successfully');
                    // Update the local events array to reflect the deletion
                    if (this.events) {
                        this.events = this.events.filter(event => event._id !== eventId);
                    }
                },
                error: (error) => console.error('Error deleting event:', error)
            });
        }
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
