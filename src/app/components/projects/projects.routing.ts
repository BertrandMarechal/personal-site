  import { Routes, RouterModule } from '@angular/router';
  import { ModuleWithProviders } from '@angular/core';
  import { ProjectsComponent } from './projects.component';
  import { HeadtrackerComponent } from './headtracker/headtracker-demo/headtracker.component';
  import { HeadtrackerPresentationComponent } from './headtracker/headtracker-presentation.component';

  const routes: Routes = [
    {
      path: '',
      component: ProjectsComponent
    },
    {
      path: 'headtracker',
      component: HeadtrackerPresentationComponent
    },
    {
      path: 'headtracker/test',
      component: HeadtrackerComponent
    }
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forChild(routes);
