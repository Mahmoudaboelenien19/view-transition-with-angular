import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  template: `
    <div class="img-container">
      @for (image of images; track image) {
      <img
        [src]="image.image"
        alt=""
        (click)="router.navigate(['/images', image.id])"
        style="view-transition-name: img-{{ image.id }}"
      />
      }
    </div>
  `,
  styles: `
  .img-container{
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 20px;
    flex-wrap:wrap;
  }
  img{    
    width: 200px;
    height: 200px;

  }  
  `,
})
export class ImagesComponent {
  constructor(public router: Router) {}
  images = [
    {
      image: 'assets/images/1.jpg',
      id: 1,
    },
    {
      image: 'assets/images/2.jpg',
      id: 2,
    },
    {
      image: 'assets/images/3.jpg',
      id: 3,
    },
  ];
}
