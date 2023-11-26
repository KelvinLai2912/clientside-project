import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { EventService } from '../../event/event.service';
import { IEvent, IUser } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kelvin-add-event-to-user',
  templateUrl: './add-event-to-user.component.html',
  styleUrls: ['./add-event-to-user.component.css'],
})

export class AddEventToUserComponent implements OnInit {
  users: IUser[] | null = null;
  events: IEvent[] | null = null;
  userId: string | null = null;
  selectedEventId: string = '';
  subscription: Subscription | undefined;
  
  constructor(private route: ActivatedRoute,private userService: UserService, private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.loadEvents();
  }

  loadEvents(): void {
      // Assuming EventService has a method to list all events
      this.subscription = this.eventService.list().subscribe({
          next: (results) => {
              this.events = results;
          },
          error: (error) => console.error('Error loading events:', error)
      });
  }

  addUserEvent(eventId: string) {
    if (this.userId) {
      this.userService.addEventToUser(this.userId, eventId).subscribe({
        next: (updatedUser) => {
          console.log('Event added to user:', updatedUser);
          // Handle successful event addition
        },
        error: (error) => {
          console.error('Failed to add event to user:', error);
          // Handle error
        }
      });
    } else {
      console.error('No user ID provided');
      // Handle the case when userId is null
    }
  }

  deleteUserEvent(eventId: string) {
    if (this.userId) {
        this.userService.removeEventFromUser(this.userId, eventId).subscribe({
            next: (updatedUser) => {
                console.log('Event removed from user:', updatedUser);
                // Update UI accordingly
            },
            error: (error) => {
                console.error('Failed to remove event from user:', error);
            }
        });
    } else {
        console.error('No user ID provided');
    }
  }



  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}