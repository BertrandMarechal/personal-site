  import { Routes, RouterModule } from '@angular/router';
  import { ModuleWithProviders } from '@angular/core';
  import { ProjectsComponent } from './projects.component';

  import { ProjectDetailsComponent } from './project-details/project-details.component';

  import { HeadtrackerComponent } from './headtracker/headtracker.component';

  import { PrimeUlamComponent } from './prime-ulam/prime-ulam.component';

  const routes: Routes = [
    {
      path: '',
      component: ProjectsComponent
    },
    {
      path: 'headtracker',
      component: ProjectDetailsComponent
    },
    {
      path: 'headtracker/demo',
      component: HeadtrackerComponent
    },
    {
      path: 'prime',
      component: ProjectDetailsComponent
    },
    {
      path: 'prime/demo',
      component: PrimeUlamComponent
    }
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forChild(routes);
