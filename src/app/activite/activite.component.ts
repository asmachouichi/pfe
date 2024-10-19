import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Activite } from '../model/activite';
import { ActiviteService } from '../service/activite.service';


@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrl: './activite.component.css'
})
export class ActiviteComponent {

  actDetail !: FormGroup
  ;
  actObj : Activite = new Activite();
  actList : Activite[] = [];

  constructor(private formBuilder : FormBuilder, private actService : ActiviteService) { }

  ngOnInit(): void {

    this.getAllActivite();

    this.actDetail = this.formBuilder.group({
      id : [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lieu: [''],
      description: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      heure: [''],
      date: [''],
      type:[''],
      participants: ['', [Validators.required, Validators.pattern('^[0-9]{3}') ]],
    });    

  }

  addActivite() {
    if (this.actDetail.valid){
    console.log(this.actDetail);
    this.actObj.id = this.actDetail.value.id;
    this.actObj.name= this.actDetail.value.name;
    this.actObj.type= this.actDetail.value.type;
    this.actObj.date = this.actDetail.value.date;
    this.actObj.heure = this.actDetail.value.heure;
    this.actObj.description = this.actDetail.value.description;
    this.actObj.participants = this.actDetail.value.participants;

    this.actService.addActivite(this.actObj).subscribe(res=>{
        console.log(res);
        this.getAllActivite();
    },err=>{
        console.log(err);
    });
  }else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllActivite() {
    this.actService.getAllActivite().subscribe(res=>{
        this.actList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editActivite(act : Activite) {
    this.actDetail.controls['id'].setValue(act.id);
    this.actDetail.controls['name'].setValue(act.name);
    this.actDetail.controls['type'].setValue(act.type);
    this.actDetail.controls['date'].setValue(act.date);
    this.actDetail.controls['heure'].setValue(act.heure);
    this.actDetail.controls['description'].setValue(act.description);
    this.actDetail.controls['participants'].setValue(act.participants);
    

  }

  updateActivite() {

    this.actObj.id = this.actDetail.value.id;
    this.actObj.name = this.actDetail.value.name;
    this.actObj.type = this.actDetail.value.type;
    this.actObj.date = this.actDetail.value.date;
    this.actObj.heure = this.actDetail.value.heure;
    this.actObj.description = this.actDetail.value.description;
    this.actObj.participants = this.actDetail.value.participants;
    


    this.actService.updateActivite(this.actObj).subscribe(res=>{
      console.log(res);
      this.getAllActivite();
    },err=>{
      console.log(err);
    })

  }

  deleteActivite(act : Activite) {

    if (confirm('Are you sure you want to delete this student?')) {
      this.actService.deleteActivite(act).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllActivite();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
