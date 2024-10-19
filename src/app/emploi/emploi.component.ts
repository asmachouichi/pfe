import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Emploi } from '../model/emploi';
import { EmploiService } from '../service/emploi.service';
import { EnsiegnantService } from '../service/ensiegnant.service';
import { MatiereService } from '../service/matiere.service';
import { SalleService } from '../service/salle.service';
import { ClasseService } from '../service/classe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  matList: any[] = [];
  salList: any[] = [];
  ensList: any[] = [];
  claList: any[] = [];
  searchText = '';
  empDetail!: FormGroup;
  empObj: Emploi = new Emploi();
  empList: Emploi[] = [];
  selectedEnsiegnant: any;
  selectedMatiere: any;
  selectedSalle: any;
  selectedClasse: any;
  selectedLundi: string = '';
  selectedMardi: string = '';
  selectedMercredi: string = '';
  selectedJeudi: string = '';
  selectedVendredi: string = '';
  selectedSamedi: string = '';
 
id!:number;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private fb: FormBuilder, private ensService: EnsiegnantService, private empService: EmploiService,private matService: MatiereService,private salService: SalleService,private claService: ClasseService,private router:Router) {
   
     this.selectedClasse = null;
    }

  ngOnInit(): void {
    this.loadEnsiegnantName();
    this.loadMatiereName();
    this.loadSalleType();
    this.loadClasseName();
    this.getAllEmploi();
    this.form = this.fb.group({
      matiere: ['', Validators.required] // Define 'matiere' form control here
      // Other form controls or form groups can be added here as well
    });
  

   
  
      this.empDetail = this.formBuilder.group({
        heureDebut : [''],
        heureFin : [''],
        lundi : [''],
        mardi: [''],
        mercredi: [''],
        jeudi: [''],
        vendredi: [''],
        samedi: [''],
        classe: [''],
        semestre: [''],
        annee: [''],
        matiere:[''],
        id:[''],

      
      });    
  
    
   
  }

  loadEnsiegnantName(): void {
    this.ensService.getAllEnsiegnant().subscribe(name => {
      this.ensList = name;
    });
  }

  
  loadMatiereName(): void {
    this.matService.getAllMatiere().subscribe(name => {
      this.matList = name;
    });
  }

  loadSalleType(): void {
    this.salService.getAllSalle().subscribe(type => {
      this.salList = type;
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
      this.empObj.classe = selectedClasse.name;
    }
  }
  addEmploi() {
    if (window.confirm('Êtes-vous sûr de vouloir ajouter cet emploi ?')) {
      this.empObj.id = this.empDetail.value.id;
      this.empObj.lundi = this.empDetail.value.lundi;

      this.empObj.heureDebut = this.empDetail.value.heureDebut;
      this.empObj.heureFin = this.empDetail.value.heureFin;
      this.empObj.mardi = this.empDetail.value.mardi;
      this.empObj.mercredi = this.empDetail.value.mercredi;
      this.empObj.jeudi = this.empDetail.value.jeudi;
      this.empObj.vendredi = this.empDetail.value.vendredi;
      this.empObj.samedi= this.empDetail.value.samedi;
      this.empObj.semestre= this.empDetail.value.semestre;
      this.empObj.classe= this.empDetail.value.classe;
      this.empObj.annee= this.empDetail.value.annee;
      this.empObj.matiere= this.empDetail.value.matiere;
    
      this.empService.addEmploi(this.empObj).subscribe(res => {
        console.log(res);
        this.getAllEmploi();
      }, err => {
        console.log(err);
      });
    } else {
      console.log('Ajout annulé');
    } 
  }

  getAllEmploi() {
    this.empService.getAllEmploi().subscribe(res => {
      this.empList = res;
    }, err => {
      console.log("error while fetching data.")
    });
    
  }
  editEmploi(emp : Emploi) {
    this.empDetail.controls['id'].setValue(emp.id);
  
    this.empDetail.controls['lundi'].setValue(emp.lundi);
    this.empDetail.controls['mercredi'].setValue(emp.mercredi);
    this.empDetail.controls['mardi'].setValue(emp.mardi);
    this.empDetail.controls['jeudi'].setValue(emp.jeudi);
    this.empDetail.controls['vendredi'].setValue(emp.vendredi);
    this.empDetail.controls['samedi'].setValue(emp.samedi);
    this.empDetail.controls['annee'].setValue(emp.annee);
    this.empDetail.controls['classe'].setValue(emp.classe);
    this.empDetail.controls['matiere'].setValue(emp.matiere);
    this.empDetail.controls['heureDebut'].setValue(emp.heureDebut);
    this.empDetail.controls['heureFin'].setValue(emp.heureFin);

  }

  updateEmploi() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet emploi ?')) {
      this.empObj.id = this.empDetail.value.id;
      this.empObj.lundi = this.empDetail.value.lundi;
      this.empObj.mercredi = this.empDetail.value.mercredi; // Correction de "marcredi" à "mercredi"
      this.empObj.mardi = this.empDetail.value.mardi;
      this.empObj.jeudi = this.empDetail.value.jeudi;
      this.empObj.vendredi = this.empDetail.value.vendredi;
      this.empObj.samedi = this.empDetail.value.samedi;
      this.empObj.annee = this.empDetail.value.annee;
      this.empObj.matiere = this.empDetail.value.matiere;
      this.empObj.classe = this.empDetail.value.classe;
      this.empObj.heureDebut = this.empDetail.value.heureDebut;
      this.empObj.heureFin = this.empDetail.value.heureFin;
  
      this.empService.updateEmploi(this.empObj).subscribe(res => {
        console.log(res);
        this.getAllEmploi();
      }, err => {
        console.log(err);
      });
    } else {
      console.log('Mise à jour annulée');
    }
  }
  
 
  deleteEmploi(emp: Emploi) {
    if (confirm('Are you sure you want to delete this emploi?')) {
      this.empService.deleteEmploi(emp).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllEmploi();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  emploiDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
