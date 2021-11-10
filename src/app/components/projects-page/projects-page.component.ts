import { Component, OnInit } from '@angular/core';
import { Project } from '../card/card.component';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Max™ MT',
      description: 'Industrial Maintenance Platform',
      details:
        'A maintenance application that integrates with an IoT data platform. I work as part of a small team to maintain and expand the application.',
      url: 'https://www.nov.com/products/max-mt-industrial-maintenance-platform',
      openState: 'closed',
    },
    {
      title: 'Max Maintenance',
      description:
        'lolololololol lolololololol lolololololol lolololololol lolololololol lolololololol ',
      details: 'some details',
      url: '',
      openState: 'closed',
    },
    {
      title: 'Max Maintenance',
      description:
        'lolololololol lolololololol lolololololol lolololololol lolololololol lolololololol ',
      details: 'some details',
      url: '',
      openState: 'closed',
    },
    {
      title: 'Max Maintenance',
      description:
        'lolololololol lolololololol lolololololol lolololololol lolololololol lolololololol ',
      details: 'some details',
      url: '',
      openState: 'closed',
    },
    {
      title: 'Max Maintenance',
      description:
        'lolololololol lolololololol lolololololol lolololololol lolololololol lolololololol ',
      details: 'some details',
      url: '',
      openState: 'closed',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleOpenState(index: number) {
    this.projects.forEach((project, i) => {
      if (i === index) {
        this.projects[i].openState =
          this.projects[i].openState === 'closed' ? 'open' : 'closed';
      } else this.projects[i].openState = 'closed';
    });
  }
}
