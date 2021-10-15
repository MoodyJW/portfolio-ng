import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: { animation: 'homePage' },
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    data: { animation: 'projectsPage' },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: { animation: 'aboutPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
