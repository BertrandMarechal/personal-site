  import { Routes, RouterModule } from '@angular/router';
  import { ModuleWithProviders } from '@angular/core';
  import { ProjectsComponent } from './projects.component';
  import { HeadtrackerComponent } from './headtracker/headtracker.component';

  const routes: Routes = [
    {
      path: '',
      component: ProjectsComponent,
      children: [
        {
          path: 'headtracker',
          component: HeadtrackerComponent,
        }
      ]
    },
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forChild(routes);
