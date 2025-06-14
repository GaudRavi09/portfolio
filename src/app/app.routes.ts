import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'resume', component: Resume },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
];
