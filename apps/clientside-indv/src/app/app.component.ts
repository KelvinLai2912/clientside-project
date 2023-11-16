import { Component, OnInit } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule } from '@kelvin/angular-app/features';
import { initFlowbite } from 'flowbite';
import { UiModule } from '@kelvin/angular-app/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeaturesModule, UiModule],
  selector: 'kelvin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  title = 'clientside-indv-app';

  ngOnInit(): void {
    initFlowbite(); 
  }
}
