import { Component, HostListener, OnInit } from '@angular/core';
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
export class ProjectsPageComponent implements OnInit {
  projects = PROJECTS;
  innerWidth: number | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  toggleOpenState(project: Project, index: number): void {
    if (this.innerWidth && this.innerWidth >= 1440) {
      this.projects[index].openState =
        this.projects[index].openState === 'open' ? 'closed' : 'open';
      return;
    }
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
