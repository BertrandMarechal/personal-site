import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './projects.routing';
import { SharedModule } from '../../shared/shared.module';

import { HeadtrackerService } from '../../services/headtracker.service';
import { HeadtrackerComponent } from './headtracker/headtracker.component';
import { ProjectsComponent } from './projects.component';
import { PrimeUlamComponent } from './prime-ulam/prime-ulam.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
  ],
  declarations: [
    HeadtrackerComponent,
    ProjectsComponent,
    PrimeUlamComponent,
    ProjectDetailsComponent,
  ],
  providers: [
    HeadtrackerService,
  ]
})
export class ProjectsModule { }
