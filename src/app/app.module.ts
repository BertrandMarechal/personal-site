import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MeComponent } from './components/me/me.component';
import { WorkComponent } from './components/work/work.component';
import { routing } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { WhereAmIComponent } from './components/me/where-am-i/where-am-i.component';
import { LikeComponent } from './components/me/like/like.component';
import { WhoAmIComponent } from './components/me/who-am-i/who-am-i.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScholarshipComponent } from './components/scholarship/scholarship.component';
import { LocaleTextService } from './services/locale-text.service';
import { ContactsService } from './services/contacts.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MeComponent,
    WorkComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WhereAmIComponent,
    LikeComponent,
    WhoAmIComponent,
    ContactComponent,
    ScholarshipComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule,
  ],
  providers: [
    LocaleTextService,
    ContactsService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
