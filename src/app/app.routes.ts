import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
];
