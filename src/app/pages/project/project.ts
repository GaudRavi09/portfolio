import { projects } from '../../data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  styleUrl: './project.scss',
  templateUrl: './project.html',
})
export class Project {
  projects = projects;
}
