import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { EagerComponent as HomeComponent } from './app/home/home.component';
import { AnotherComponent } from './app/another/another.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'another', component: AnotherComponent },
  {
    path: 'lazy',
    loadComponent: () => import('./app/lazy/lazy.component').then(c => c.LazyComponent)
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
