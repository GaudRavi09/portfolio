import { profile } from '../../data';
import { NgClass, DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'sidebar',
  styleUrl: './sidebar.scss',
  imports: [NgClass, DatePipe],
  templateUrl: './sidebar.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Sidebar {
  profile = profile;
  showContacts = signal(false);

  showContactsToggle() {
    this.showContacts.update((value) => !value);
  }
}
