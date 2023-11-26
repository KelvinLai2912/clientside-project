import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvent, Catagory } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kelvin-nx-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
})
export class EventEditComponent implements OnInit, OnDestroy {
  event: IEvent = {
    _id: '',
    eventName: '',
    eventDate: new Date(),
    time: '',
    discription: '',
    catagory: Catagory.Park,
    amount: 0,
  };
  subscription: Subscription | undefined;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.eventService.read(id).subscribe(
          (event: IEvent) => { this.event = event; },
          error => { console.error('Error fetching event:', error); }
        );
      }
    });
  }

  submitEventForm() {
    if (this.event._id) {
      // Call the update method if there's an ID
      this.eventService.updateEvent(this.event._id, this.event).subscribe({
        next: updatedEvent => {
          console.log('Event updated successfully', updatedEvent);
          // Redirect to the event details page or elsewhere
          this.router.navigate(['/event', updatedEvent._id]);
        },
        error: error => {
          console.error('Failed to update event', error);
          // Handle the error (show event feedback)
        }
      });
    } else {
      // Call the create method if there's no ID
      this.eventService.createEvent(this.event).subscribe({
        next: newEvent => {
          console.log('Event created successfully', newEvent);
          // Redirect to the new event details page or elsewhere
          this.router.navigate(['/event', newEvent._id]);
        },
        error: error => {
          console.error('Failed to create event', error);
          // Handle the error (show event feedback)
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
