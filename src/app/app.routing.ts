  import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
  import { ModuleWithProviders } from '@angular/core';
  import { HomeComponent } from './components/home/home.component';
  import { MeComponent } from './components/me/me.component';
  import { WorkComponent } from './components/work/work.component';
  import { ProjectsComponent } from './components/projects/projects.component';
  import { ContactComponent } from './components/contact/contact.component';
  import { ScholarshipComponent } from './components/scholarship/scholarship.component';

  const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'me',
      component: MeComponent
    },
    {
      path: 'work',
      component: WorkComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'scholarship',
      component: ScholarshipComponent
    },
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules});
