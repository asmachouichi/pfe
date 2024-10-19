import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model/event';
import { EventService } from '../service/event.service';
import { ClasseService } from '../service/classe.service';
import { EmploiService } from '../service/emploi.service';
import { MatiereService } from '../service/matiere.service';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

import { Message } from '../model/message';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrl: './presence.component.css'
})
export class PresenceComponent {
  matList: any[] = [];
  claList: any[] = [];
  empList: any[] = [];
  eveDetail!: FormGroup;
  eveObj: Event = new Event();
  eveList: Event[] = [];
  selectedMatiere: any;
  selectedClasse: any;
  selectedEmploi: any;
  selectedheureFin: any;
  now: Date;
 
  tempsEcoule: boolean = false;
  heureDebut: boolean = false;
  emploiClasse: Event[] = [];
  classeId: number = 1; 
  seanceCommencee: boolean = false;
  message: string = '';
  mesDetail !: FormGroup;
  mesObj : Message = new Message();
  mesList : Message[] = [];
  constructor(private formBuilder: FormBuilder, private notService: NotificationService, private eveService: EventService,private claService: ClasseService,private empService: EmploiService,private matService: MatiereService,private router: Router) {
    
     this.selectedClasse = null;
     this.selectedMatiere = null; this.selectedheureFin = null;
     this.now = new Date();}
    
  ngOnInit(): void {
    
   


   
    

    this.mesDetail = this.formBuilder.group({
      id : [''],
    message: [''],
     
      
    }); 
    this.loadEmploiheureFin();
   
    this.loadClasseName();
    this.getAllEvent();
    this.loadMatiereName();
    this.eveDetail = this.formBuilder.group({
      id: [''],
      jour: ['',Validators.required],
      
      classe: ['',Validators.required],
      name: [''],
      presence: [''],
      matiere: [''],
      heureDebut: [''],
      heureFin: [''],

    });
  
  }



  loadClasseName(): void {
    this.claService.getAllClasse().subscribe(name => {
      this.claList = name;
    });
  }

  setSelectedClasse(classeId: number) {
    const selectedClasse = this.claList.find(classe=> classe.name === classeId);
    if (selectedClasse) {
      this.eveObj.classe = selectedClasse.name;
    }
  }
  loadMatiereName(): void {
    this.matService.getAllMatiere().subscribe(name => {
      this.matList = name;
    });
  }

  setSelectedMatiere(matiereId: number) {
    const selectedMatiere = this.matList.find(matiere => matiere.id === matiereId);
    if (selectedMatiere) {
      this.eveObj.matiere = selectedMatiere.name;
      this.eveObj.heureDebut = selectedMatiere.heureDebut; // Supposons que l'heure de début est une propriété de selectedMatiere
      this.eveObj.heureFin = selectedMatiere.heureFin; // Supposons que l'heure de fin est une propriété de selectedMatiere
    }
  }


  loadEmploiheureFin(): void {
    this.empService.getAllEmploi().subscribe(heureFin => {
      this.empList = heureFin;
    });
  }

  setSelectedEmploi(emploiId: number) {
    const selectedEmploi = this.empList.find(emploi=> emploi.heureFin === emploiId);
    if (selectedEmploi) {
      this.eveObj.classe = selectedEmploi.name;
    }
  }

  addEvent() {
    if (window.confirm('Êtes-vous sûr de vouloir ajouter cet Présence ?')) {
    this.eveObj.id = this.eveDetail.value.id;
    this.eveObj.jour = this.eveDetail.value.jour;

    this.eveObj.heureDebut = this.eveDetail.value.heureDebut;
    this.eveObj.heureFin = this.eveDetail.value.heureFin;
    this.eveObj.name = this.eveDetail.value.name;
    this.eveObj.matiere = this.eveDetail.value.matiere;
    this.eveObj.presence = this.eveDetail.value.presence;
    this.eveObj.classe = this.eveDetail.value.classe;
    if (this.eveDetail.value.presence) {
      this.eveObj.presence = this.eveDetail.value.presence;
  } else {
      this.eveObj.presence = ''; // Affecter une valeur vide si la case n'est pas cochée
  }
  
    this.eveService.addEvent(this.eveObj).subscribe(res => {
      console.log(res);
      this.getAllEvent();
    }, err => {
      console.log(err);
    });
  } else {
    console.log('Ajout annulé');
  }
  }
 



  getAllEvent() {
    this.eveService.getAllEvent().subscribe(res => {
      this.eveList = res;
    }, err => {
      console.log("error while fetching data.")
    });
    
  }
  
 
  editEvent(eve : Event) {
    this.eveDetail.controls['id'].setValue(eve.id);
    this.eveDetail.controls['name'].setValue(eve.name);
    this.eveDetail.controls['heureDebut'].setValue(eve.heureDebut);
    this.eveDetail.controls['heureFin'].setValue(eve.heureFin);
    this.eveDetail.controls['matiere'].setValue(eve.matiere);
    this.eveDetail.controls['presence'].setValue(eve.presence);
    this.eveDetail.controls['classe'].setValue(eve.classe);
    this.eveDetail.controls['jour'].setValue(eve.jour);
   

  }

  updateEvent() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet presence ?')) {
    this.eveObj.id = this.eveDetail.value.id;
    this.eveObj.name = this.eveDetail.value.name;
    this.eveObj.heureDebut = this.eveDetail.value.heureDebut;
    this.eveObj.heureFin = this.eveDetail.value.heureFin;
    this.eveObj.jour= this.eveDetail.value.jour;
    this.eveObj.matiere = this.eveDetail.value.Matiere;
    this.eveObj.classe = this.eveDetail.value.classe;
    this.eveObj.presence = this.eveDetail.value.presence;
  


    this.eveService.updateEvent(this.eveObj).subscribe(res=>{
      console.log(res);
      this.getAllEvent();
    },err=>{
      console.log(err);
    })
  } else {
    console.log('Mise à jour annulée');
  }
  }
 
 



 
  
  

  deleteEvent(eve: Event) {
    if (confirm('Are you sure you want to delete this presence?')) {
      this.eveService.deleteEvent(eve).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllEvent();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  classe(){
    this.router.navigate(['classe']);
  }
 
  
}
