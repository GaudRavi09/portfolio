import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [Sidebar, RouterLink, RouterOutlet, TitleCasePipe, RouterLinkActive],
})
export class App {}
