import { Component } from '@angular/core';
import { PROJECTS } from './projects.constants';

export interface Project {
  title: string;
  description: string;
  details: string;
  url: string;
  urlText: string;
  openState: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects = PROJECTS;

  toggleOpenState(project: Project, index: number): void {
    const openState: string = project.openState;
    const title: string = project.title;
    this.projects.forEach((project: Project) => {
      if (project.title != title) return (project.openState = 'closed');
      return openState === 'open'
        ? (project.openState = 'closed')
        : (project.openState = 'open');
    });
  }
}
