import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



import { EtudiantComponent } from './etudiant/etudiant.component';

import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { RouterModule } from '@angular/router';
import { EnsiegnantComponent } from './ensiegnant/ensiegnant.component';


import { CoursComponent } from './cours/cours.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { CeiffetionComponent } from './ceiffetion/ceiffetion.component';
import { NiveauComponent } from './niveau/niveau.component';
import { InscreptionComponent } from './inscreption/inscreption.component';
import { CommunicationComponent } from './communication/communication.component';
import { NationnaliteComponent } from './nationnalite/nationnalite.component';
import { ActiviteComponent } from './activite/activite.component';
import { DomaineComponent } from './domaine/domaine.component';
import { SpecieliteComponent } from './specielite/specielite.component';
import { LessonComponent } from './lesson/lesson.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { CertificatComponent } from './certificat/certificat.component';
import { DiplomeComponent } from './diplome/diplome.component';

import { EmploiComponent } from './emploi/emploi.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './model/search.pipe';
import { SalleComponent } from './salle/salle.component';
import {  FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnseignantDashboardComponent } from './component/enseignant-dashboard/enseignant-dashboard.component';
import { TempComponent } from './temp/temp.component';
import { EventComponent } from './event/event.component';
import { ViewComponent } from './view/view.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PresenceComponent } from './presence/presence.component';
import { ProfileComponent } from './profile/profile.component';
import { EmploiDetailsComponent } from './emploi-details/emploi-details.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ListEnsiegnantComponent } from './list-ensiegnant/list-ensiegnant.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { ListEmploiComponent } from './list-emploi/list-emploi.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './service/notification.service';
import { ListEventComponent } from './list-event/list-event.component';
import { EmploiListComponent } from './emploi-list/emploi-list.component';

import { InscreptionListComponent } from './inscreption-list/inscreption-list.component';

import { MainComponent } from './main/main.component';






















@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
   
   
    EtudiantComponent,
    
    AdminDashboardComponent,
    UserDashboardComponent,
    UserDashboardComponent,
    LoginComponent,
    SignupComponent,
    EnsiegnantComponent,
  
   
    CoursComponent,
    ClasseComponent,
    MatiereComponent,
    CeiffetionComponent,
    NiveauComponent,
    InscreptionComponent,
    CommunicationComponent,
    NationnaliteComponent,
    ActiviteComponent,
    DomaineComponent,
    SpecieliteComponent,
    LessonComponent,
    ChapitreComponent,
    CertificatComponent,
    DiplomeComponent,
   
    EmploiComponent,
    SearchComponent,
    SearchPipe,
    SalleComponent,
    EnseignantDashboardComponent,
    TempComponent,
    EventComponent,
    ViewComponent,
    EventDetailComponent,
    CalendrierComponent,
    PresenceComponent,
    ProfileComponent,
    EmploiDetailsComponent,
    ListEtudiantComponent,
    ListEnsiegnantComponent,
    ListMatiereComponent,
    ListClasseComponent,
    ListEmploiComponent,
    ListEventComponent,
    EmploiListComponent,
   
    
    InscreptionListComponent,
       
          MainComponent,
        
 
   
   
    
    
   
   
     
   
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
 HttpClientModule
 
 

  ],
  providers: [ NotificationService ],
  bootstrap: [AppComponent],
})
export class AppModule {}