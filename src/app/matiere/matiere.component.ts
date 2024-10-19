import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Matiere } from '../model/matiere';
import { MatiereService } from '../service/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent {
  searchText = '';
  
  matDetail !: FormGroup;
  matObj : Matiere = new Matiere();
  matList : Matiere[] = [];

  constructor(private formBuilder : FormBuilder, private matService : MatiereService) { }

  ngOnInit(): void {

    this.getAllMatiere();

    this.matDetail = this.formBuilder.group({
      id : [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      niveau: [''],
      ensiegnant: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      horaire: [''],
      semestre: ['']
    });    

  }

  addMatiere() {
    if (this.matDetail.valid){
      if (window.confirm('Êtes-vous sûr de vouloir ajouter cet Présence ?')) {
    console.log(this.matDetail);
    this.matObj.id = this.matDetail.value.id;
    this.matObj.name= this.matDetail.value.name;
    this.matObj.niveau= this.matDetail.value.niveau;
    this.matObj.ensiegnant = this.matDetail.value.ensiegnant;
    this.matObj.horaire = this.matDetail.value.horaire;
    this.matObj.semestre = this.matDetail.value.semestre;

    this.matService.addMatiere(this.matObj).subscribe(res=>{
        console.log(res);
        this.getAllMatiere();
    },err=>{
        console.log(err);
    });
  } else {
    console.log('Ajout annulé');
  }
  }else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllMatiere() {
    this.matService.getAllMatiere().subscribe(res=>{
        this.matList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editMatiere(mat : Matiere) {
    this.matDetail.controls['id'].setValue(mat.id);
    this.matDetail.controls['name'].setValue(mat.name);
    this.matDetail.controls['ensiegnant'].setValue(mat.ensiegnant);
    this.matDetail.controls['niveau'].setValue(mat.niveau);
    this.matDetail.controls['horaire'].setValue(mat.horaire);
    this.matDetail.controls['semestre'].setValue(mat.semestre);
    

  }

  updateMatiere() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet matiere ?')) {
    this.matObj.id = this.matDetail.value.id;
    this.matObj.name = this.matDetail.value.name;
    this.matObj.ensiegnant = this.matDetail.value.ensiegnant;
    this.matObj.niveau = this.matDetail.value.niveau;
    this.matObj.horaire = this.matDetail.value.horaire;
    this.matObj.semestre = this.matDetail.value.semestre;
    


    this.matService.updateMatiere(this.matObj).subscribe(res=>{
      console.log(res);
      this.getAllMatiere();
    },err=>{
      console.log(err);
    })
  } else {
    console.log('Mise à jour annulée');
  }
  } 

  deleteMatiere(mat : Matiere) {
    if (confirm('Are you sure you want to delete this matiere?')) {
      this.matService.deleteMatiere(mat).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllMatiere();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}



