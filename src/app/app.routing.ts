  import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
  import { ModuleWithProviders } from '@angular/core';
  import { HomeComponent } from './components/home/home.component';
  import { MeComponent } from './components/me/me.component';
  import { WorkComponent } from './components/work/work.component';
  import { ProjectsComponent } from './components/projects/projects.component';
  import { ContactComponent } from './components/contact/contact.component';
  import { ScholarshipComponent } from './components/scholarship/scholarship.component';
  import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
  import { HeadtrackerComponent } from './components/projects/headtracker/headtracker.component';

  const routes: Routes = [
    {
      path: '',
      component: MeComponent
    },
    {
      path: 'work',
      component: WorkComponent
    },
    {
      path: 'projects',
      loadChildren: 'app/components/projects/projects.module#ProjectsModule'
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'scholarship',
      component: ScholarshipComponent
    },
   {
      component: PageNotFoundComponent,
      path: "**",
   },
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
