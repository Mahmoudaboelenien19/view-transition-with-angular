import { ImageComponent } from './components/image/image.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';
import { ImagesComponent } from './components/images/images.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'images',
    component: ImagesComponent,
  },
  {
    path: 'images/:id',
    component: ImageComponent,
  },
];
