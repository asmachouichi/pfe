import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';


import { CommonModule } from '@angular/common';
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

import { SearchComponent } from './search/search.component';
import { EmploiComponent } from './emploi/emploi.component';
import { SalleComponent } from './salle/salle.component';
import { EnseignantDashboardComponent } from './component/enseignant-dashboard/enseignant-dashboard.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PresenceComponent } from './presence/presence.component';
import { EmploiDetailsComponent } from './emploi-details/emploi-details.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ListEnsiegnantComponent } from './list-ensiegnant/list-ensiegnant.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { ListEmploiComponent } from './list-emploi/list-emploi.component';
import { EmploiListComponent } from './emploi-list/emploi-list.component';
import { ListEventComponent } from './list-event/list-event.component';

import { InscreptionListComponent } from './inscreption-list/inscreption-list.component';











const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  
 {path:'etudiant',component:EtudiantComponent},
 {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path: 'ensiegnant', component:EnsiegnantComponent},
  { path: 'cours', component: CoursComponent},

  { path: 'classe', component: ClasseComponent},
  { path: 'matiere', component: MatiereComponent},
  { path: 'ceiffetion', component: CeiffetionComponent},
  { path: 'niveau', component: NiveauComponent},
  { path: 'inscreption', component: InscreptionComponent},
  { path: 'communication', component: CommunicationComponent},
  { path: 'nationnalite', component: NationnaliteComponent},
  { path: 'activite', component:ActiviteComponent},
  { path: 'domaine', component:DomaineComponent},
  { path: 'specielite', component:SpecieliteComponent},
  { path: 'lesson', component:LessonComponent},
  { path: 'chapitre', component:ChapitreComponent},
  { path: 'certificat', component:CertificatComponent},
  { path: 'diplome', component:DiplomeComponent},
 
  { path: 'emploi', component:EmploiComponent},
  { path: 'search', component:SearchComponent},
  { path: 'salle', component:SalleComponent},
  { path: 'enseignant', component:EnseignantDashboardComponent},
  { path: 'event', component:EventComponent},
  { path: 'detail/:id', component: EventDetailComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'details/:id', component: EmploiDetailsComponent },
  { path: 'list-etudiant', component:ListEtudiantComponent },
  { path: 'list-ensiegnant', component:ListEnsiegnantComponent },
  { path: 'list-matiere', component:ListMatiereComponent },
  { path: 'list-classe', component:ListClasseComponent },
  { path: 'list-emploi', component:ListEmploiComponent },
  { path: 'emploi-list', component:EmploiListComponent },
  { path: 'list-event', component:ListEventComponent },
  
  { path: 'inscreption-list', component:InscreptionListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}