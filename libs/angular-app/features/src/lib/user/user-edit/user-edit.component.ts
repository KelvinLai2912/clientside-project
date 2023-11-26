import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser, Gender } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kelvin-nx-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: IUser = {
    _id: '',
    FirstName: '',
    LastName: '',
    Password: '',
    Email: '',
    birthDate: new Date(),
    Gender: Gender.Male,
    events: [],
  };
  subscription: Subscription | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userService.read(id).subscribe(
          (user: IUser) => { this.user = user; },
          error => { console.error('Error fetching user:', error); }
        );
      }
    });
  }

  submitForm() {
    if (this.user._id) {
      // Call the update method if there's an ID
      this.userService.updateUser(this.user).subscribe({
        next: updatedUser => {
          console.log('User updated successfully', updatedUser);
          // Redirect to the user details page or elsewhere
          this.router.navigate(['/user', updatedUser._id]);
        },
        error: error => {
          console.error('Failed to update user', error);
          // Handle the error (show user feedback)
        }
      });
    } else {
      // Call the create method if there's no ID
      this.userService.createUser(this.user).subscribe({
        next: newUser => {
          console.log('User created successfully', newUser);
          // Redirect to the new user details page or elsewhere
          this.router.navigate(['/user', newUser._id]);
        },
        error: error => {
          console.error('Failed to create user', error);
          // Handle the error (show user feedback)
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
