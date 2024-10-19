import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Ensiegnant } from '../model/ensiegnant';
import { EnsiegnantService } from '../service/ensiegnant.service';




@Component({
  selector: 'app-ensiegnant',
  templateUrl: './ensiegnant.component.html',
  styleUrls: ['./ensiegnant.component.css']
})
export class EnsiegnantComponent implements OnInit {
  searchText = '';
  ensDetail !: FormGroup;
  ensObj : Ensiegnant = new Ensiegnant();
  ensList : Ensiegnant[] = [];
  

  constructor(private formBuilder : FormBuilder, private ensService : EnsiegnantService) { }

  ngOnInit(): void {

    this.getAllEnsiegnant();

    this.ensDetail = this.formBuilder.group({
      id : [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      specielite: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
    });    

  }

  addEnsiegnant() {
    if (this.ensDetail.valid) {
      if (window.confirm('Êtes-vous sûr de vouloir ajouter cet enseignant ?')) {
    console.log(this.ensDetail);
    this.ensObj.id = this.ensDetail.value.id;
    this.ensObj.name = this.ensDetail.value.name;
    this.ensObj.prenom = this.ensDetail.value.prenom;
    this.ensObj.email = this.ensDetail.value.email;
    this.ensObj.specielite = this.ensDetail.value.specielite;

    this.ensService.addEnsiegnant(this.ensObj).subscribe(res=>{
        console.log(res);
        this.getAllEnsiegnant();
    },err=>{
        console.log(err);
    });
  } else {
    console.log('Ajout annulé');
  }
  }  else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllEnsiegnant() {
    this.ensService.getAllEnsiegnant().subscribe(res=>{
        this.ensList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEnsiegnant(ens : Ensiegnant) {
    this.ensDetail.controls['id'].setValue(ens.id);
    this.ensDetail.controls['name'].setValue(ens.name);
    this.ensDetail.controls['email'].setValue(ens.email);
    this.ensDetail.controls['prenom'].setValue(ens.prenom);
    this.ensDetail.controls['specielite'].setValue(ens.specielite);

  }

  updateEnsiegnant() {

    this.ensObj.id = this.ensDetail.value.id;
    this.ensObj.name = this.ensDetail.value.name;
    this.ensObj.prenom = this.ensDetail.value.prenom;
    this.ensObj.email = this.ensDetail.value.email;
    this.ensObj.specielite = this.ensDetail.value.specielite;

    this.ensService.updateEnsiegnant(this.ensObj).subscribe(res=>{
      console.log(res);
      this.getAllEnsiegnant();
    },err=>{
      console.log(err);
    })

  }

  deleteEnsiegnant(ens: Ensiegnant) {
    if (confirm('Are you sure you want to delete this ensiegnant?')) {
      this.ensService.deleteEnsiegnant(ens).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllEnsiegnant();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}