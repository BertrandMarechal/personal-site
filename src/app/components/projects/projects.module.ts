import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './projects.routing';

import { HeadtrackerService } from '../../services/headtracker.service';
import { HeadtrackerComponent } from './headtracker/headtracker.component';
import { ProjectsComponent } from './projects.component';
import { HeadtrackerPresentationComponent } from './headtracker/headtracker-presentation/headtracker-presentation.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    HeadtrackerComponent,
    ProjectsComponent,
    HeadtrackerPresentationComponent,
  ],
  providers: [
    HeadtrackerService,
  ]
})
export class ProjectsModule { }
