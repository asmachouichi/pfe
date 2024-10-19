import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model/event';
import { EventService } from '../service/event.service';
import { ClasseService } from '../service/classe.service';
import { MatiereService } from '../service/matiere.service';
import { Router } from '@angular/router';
import { EmploiService } from '../service/emploi.service';
import { EtudiantService } from '../etudiant.service';
import { Message } from '../model/message';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  message: string = '';
  mesDetail !: FormGroup;
  mesObj : Message = new Message();
  mesList : Message[] = [];
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
  selectedEtudiant!: string; // ou le type approprié
    etuList!: any[]; 
  tempsEcoule: boolean = false;
  heureDebut: boolean = false;
  emploiClasse: Event[] = [];
  classeId: number = 1; 
  seanceCommencee: boolean = false;
  etudiantName: string[] = [];
  etudiantNames: string[] = [];



  constructor(private formBuilder: FormBuilder, private etuService: EtudiantService,private eveService: EventService,private claService: ClasseService,private empService: EmploiService,private matService: MatiereService,private router: Router) {
    
     this.selectedClasse = null;
     this.selectedMatiere = null; this.selectedheureFin = null;
     this.now = new Date();}

  ngOnInit(): void {
    
    this.etuService.getAllEtudiant().subscribe(name => {
      this.etuList = name;
    });
    
   

    this.loadEtudiantName();
    this.loadEmploiheureFin();

    this.loadClasseName();
    this.getAllEvent();
    this.loadMatiereName();
    this.eveDetail = this.formBuilder.group({
      id: [''],
      jour: ['', Validators.required],
      classe: ['', Validators.required],
      name: [''],
      presence: [''],
      matiere: ['', Validators.required],
      heureDebut: ['', Validators.required],
      heureFin: ['', Validators.required]
    });
    
  
  }
 
  loadEtudiantName() {
    this.etuService.getAllEtudiant().subscribe(name => {
      this.etuList = name;
    });
  }
  selectEtudiant(value: string) {
    this.etudiantNames.push(value);
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
    if (this.eveDetail.valid) {
        if (window.confirm('Êtes-vous sûr de vouloir ajouter cette présence ?')) {
            const heureDebut = this.eveDetail.value.heureDebut;
            const heureFin = this.eveDetail.value.heureFin;
            const jour = this.eveDetail.value.jour;
            const now = new Date();

            // Vérifier si l'heure de début est après l'heure actuelle
            if (heureDebut && this.isAfter(heureDebut, now)) {
                alert('L\'heure de début est ultérieure à l\'heure actuelle. Impossible de marquer la présence.');
                return;
            }

            // Vérifier si l'heure actuelle est supérieure à l'heure de fin
           

            // Créer un nouvel événement avec les valeurs du formulaire
            const newEvent: Event = {
                id: this.eveDetail.value.id,
                jour: jour,
                classe: this.eveDetail.value.classe,
                name: this.eveDetail.value.name,
                presence: 'present', // Marquer la présence comme "présent"
                matiere: this.eveDetail.value.matiere,
                heureDebut: heureDebut,
                heureFin: heureFin,
                deadline: null // Assurez-vous de définir la valeur de la propriété 'deadline' correctement
            };

            // Appeler le service pour ajouter l'événement
            this.eveService.addEvent(newEvent).subscribe(
                res => {
                    // Gérer la réponse du service en cas de succès
                    console.log(res);
                    this.getAllEvent(); // Actualiser la liste des événements
                },
                err => {
                    // Gérer les erreurs du service
                    console.error(err);
                    // Afficher un message d'erreur à l'utilisateur
                    alert('Une erreur est survenue lors de l\'ajout de l\'événement. Veuillez réessayer plus tard.');
                }
            );
        } else {
            console.log('Ajout annulé');
        }
    } else {
        // Si le formulaire n'est pas valide, afficher un message d'alerte à l'utilisateur
        alert('Veuillez remplir tous les champs du formulaire.');
    }
}

isAfter(heure: string, heureActuelle: Date): boolean {
    const parts = heure.split(':');
    const heureDate = new Date();

    heureDate.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10));

    return heureActuelle > heureDate;
}

isBefore(heure: string, heureActuelle: Date): boolean {
    const parts = heure.split(':');
    const heureDate = new Date();

    heureDate.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10));

    return heureActuelle < heureDate;
}

isBetween(startTime: string, endTime: string, currentTime: Date): boolean {
    const startParts = startTime.split(':');
    const endParts = endTime.split(':');
    const startDate = new Date();
    const endDate = new Date();

    startDate.setHours(parseInt(startParts[0], 10), parseInt(startParts[1], 10));
    endDate.setHours(parseInt(endParts[0], 10), parseInt(endParts[1], 10));

    return currentTime >= startDate && currentTime <= endDate;
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

  eventDetail(id: number){
    this.router.navigate(['detail', id]);
  }
 

 
  }