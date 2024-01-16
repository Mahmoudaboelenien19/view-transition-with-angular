import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  showV = false;
  show() {
    this.showV = !this.showV;
  }
  onAnimationStrat(event: any) {}
  onAnimationDone(event: any) {}
}
