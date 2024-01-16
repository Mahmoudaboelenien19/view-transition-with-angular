import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav>
      <h3>logo</h3>
      <ul>
        @for(link of links;track link;let i=$index) {
        <li [ngClass]="activeLinkInd === i ? 'active' : ''">
          <a [routerLink]="['/', link.toLowerCase()]" (click)="setActive(i)">
            {{ link }}
          </a>
        </li>

        }
      </ul>
    </nav>
  `,
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  activeLinkInd = 0;
  links = ['Home', 'About', 'Contact', 'Images'];
  setActive(ind: number) {
    this.activeLinkInd = ind;
  }
}
