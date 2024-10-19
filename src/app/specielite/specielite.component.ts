import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Specielite } from '../model/specielite';
import { SpecieliteService } from '../service/specielite.service';

@Component({
  selector: 'app-specielite',
  templateUrl: './specielite.component.html',
  styleUrl: './specielite.component.css'
})
export class SpecieliteComponent {

  speDetail !: FormGroup;
 speObj : Specielite = new  Specielite ();
  speList :  Specielite[] = [];

  constructor(private formBuilder : FormBuilder, private speService :  SpecieliteService) { }

  ngOnInit(): void {

    this.getAllSpecielite();

    this.speDetail = this.formBuilder.group({
      id : [''],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    description: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      code: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      niveau: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      etudiant: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
     responsable: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
    });    

  }

  addSpecielite() {
    if (this.speDetail.valid) {
    console.log(this.speDetail);
    this.speObj.id = this.speDetail.value.id;
    this.speObj.name= this.speDetail.value.name;
    this.speObj.description= this.speDetail.value.description;
    this.speObj.code = this.speDetail.value.code;
    this.speObj.niveau = this.speDetail.value.niveau;
    this.speObj.etudiant = this.speDetail.value.etudiant;
    this.speObj.responsable = this.speDetail.value.responsable;

    this.speService.addSpecielite(this.speObj).subscribe(res=>{
        console.log(res);
        this.getAllSpecielite();
    },err=>{
        console.log(err);
    });}
    else {
      alert('Veuillez remplir tous les champs du formulaire.');
      console.log('Formulaire invalide. Veuillez vérifier les champs.');
      // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
    }
  }
  

  getAllSpecielite() {
    this.speService.getAllSpecielite().subscribe(res=>{
        this.speList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editSpecielite(spe :Specielite) {
    this.speDetail.controls['id'].setValue(spe.id);
    this.speDetail.controls['name'].setValue(spe.name);
    this.speDetail.controls['description'].setValue(spe.description);
    this.speDetail.controls['code'].setValue(spe.code);
    this.speDetail.controls['niveau'].setValue(spe.niveau);
    this.speDetail.controls['responsable'].setValue(spe.responsable);
    this.speDetail.controls['etudiant'].setValue(spe.etudiant);
    

  }

  updateSpecielite() {

    this.speObj.id = this.speDetail.value.id;
    this.speObj.name = this.speDetail.value.name;
    this.speObj.description = this.speDetail.value.description;
    this.speObj.code = this.speDetail.value.code;

    


    this.speService.updateSpecielite(this.speObj).subscribe(res=>{
      console.log(res);
      this.getAllSpecielite();
    },err=>{
      console.log(err);
    })

  }

  deleteSpecielite(spe : Specielite) {

    if (confirm('Are you sure you want to delete this specielite?')) {
      this.speService.deleteSpecielite(spe).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllSpecielite();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}


