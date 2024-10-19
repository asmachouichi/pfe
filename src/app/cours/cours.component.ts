import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cours } from '../model/cours';
import { CoursService } from '../service/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
  couDetail !: FormGroup;
  couObj : Cours = new Cours();
  couList : Cours[] = [];

  constructor(private formBuilder : FormBuilder, private couService : CoursService) { }

  ngOnInit(): void {

    this.getAllCours();

    this.couDetail = this.formBuilder.group({
      id : [''],
    ensiegnant: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      matiere: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      classe: [''],
      semestre: [''],
      
    });    

  }

  addCours() {
    if (this.couDetail.valid) {
    console.log(this.couDetail);
    this.couObj.id = this.couDetail.value.id;
    this.couObj.ensiegnant= this.couDetail.value.ensiegnant;
    this.couObj.matiere= this.couDetail.value.matiere;
    this.couObj.classe = this.couDetail.value.classe;
    this.couObj.semestre = this.couDetail.value.semestre;
    

    this.couService.addCours(this.couObj).subscribe(res=>{
        console.log(res);
        this.getAllCours();
    },err=>{
        console.log(err);
    });
  } else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllCours() {
    this.couService.getAllCours().subscribe(res=>{
        this.couList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editCours(cou: Cours) {
    this.couDetail.controls['id'].setValue(cou.id);
    this.couDetail.controls['ensiegnant'].setValue(cou.ensiegnant);
    this.couDetail.controls['matiere'].setValue(cou.matiere);
    this.couDetail.controls['classe'].setValue(cou.classe);
    this.couDetail.controls['semestre'].setValue(cou.semestre);
    
    

  }

  updateCours() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet cours ?')) {
    this.couObj.id = this.couDetail.value.id;
    this.couObj.ensiegnant = this.couDetail.value.ensiegnant;
    this.couObj.matiere= this.couDetail.value.matiere;
    this.couObj.classe = this.couDetail.value.classe;
    this.couObj.semestre = this.couDetail.value.semestre;
    
    


    this.couService.updateCours(this.couObj).subscribe(res=>{
      console.log(res);
      this.getAllCours();
    },err=>{
      console.log(err);
    })
  } else {
    console.log('Mise à jour annulée');
  }
  }

  deleteCours(cou : Cours) {
    
      if (confirm('Are you sure you want to delete this student?')) {
        this.couService.deleteCours(cou).subscribe(
          res => {
            console.log(res);
            alert('Deleted successfully');
            this.getAllCours();
          },
          err => {
            console.log(err);
          }
        );
      }
    }
}



