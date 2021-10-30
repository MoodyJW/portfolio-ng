import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: { animation: 'homePage', pathName: 'home' },
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    data: { animation: 'projectsPage', pathName: 'projects' },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: { animation: 'aboutPage', pathName: 'about' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
