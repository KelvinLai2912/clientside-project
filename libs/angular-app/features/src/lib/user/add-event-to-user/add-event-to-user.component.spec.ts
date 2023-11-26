import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEventToUserComponent } from './add-event-to-user.component';

describe('AddEventToUserComponent', () => {
  let component: AddEventToUserComponent;
  let fixture: ComponentFixture<AddEventToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventToUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEventToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
