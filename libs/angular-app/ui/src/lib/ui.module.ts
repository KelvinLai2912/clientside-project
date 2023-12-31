import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
})
export class UiModule {}
