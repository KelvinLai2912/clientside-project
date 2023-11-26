import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@kelvin/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kelvin-user-list', 
    templateUrl: './user-list.component.html', 
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
    users: IUser[] | null = null; 
    subscription: Subscription | undefined;

    constructor(private userService: UserService) {} 

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.subscription = this.userService.list().subscribe((results) => { 
            console.log(`results: ${results}`);
            this.users = results; 
        });
    }

    deleteUser(userId: string): void {
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.delete(userId).subscribe({
                next: () => {
                    console.log('User deleted successfully');
                    // Update the local users array to reflect the deletion
                    if (this.users) {
                        this.users = this.users.filter(user => user._id !== userId);
                    }
                },
                error: (error) => console.error('Error deleting user:', error)
            });
        }
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
