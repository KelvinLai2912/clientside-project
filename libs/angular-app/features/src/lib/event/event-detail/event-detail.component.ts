import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kelvin-nx-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: [],
})
export class EventDetailComponent implements OnInit, OnDestroy {
  eventId: string | null = null;
  event: IEvent | null = null;
  private eventSubscription: Subscription | null = null;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id');
      if (this.eventId) {
        this.eventSubscription = this.eventService.getEventById(this.eventId)
          .subscribe(
            eventData => this.event = eventData,
            error => console.error('Error fetching event', error)
          );
      }
    });
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
