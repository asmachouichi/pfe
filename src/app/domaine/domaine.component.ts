import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Domaine } from '../model/domaine';
import { DomaineService } from '../service/domaine.service';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrl: './domaine.component.css'
})
export class DomaineComponent {

  domDetail !: FormGroup;
  domObj : Domaine = new Domaine();
  domList : Domaine[] = [];

  constructor(private formBuilder : FormBuilder, private domService : DomaineService) { }

  ngOnInit(): void {

    this.getAllDomaine();

    this.domDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      descreption: [''],
      responsable: [''],
      utilisateur: ['']
    });    

  }

  addDomaine() {
    console.log(this.domDetail);
    this.domObj.id = this.domDetail.value.id;
    this.domObj.name = this.domDetail.value.name;
    this.domObj.descreption = this.domDetail.value.descreption;
    this.domObj.responsable = this.domDetail.value.responsable;
    this.domObj.utilisateur = this.domDetail.value.utilisateur;
   

    this.domService.addDomaine(this.domObj).subscribe(res=>{
        console.log(res);
        this.getAllDomaine();
    },err=>{
        console.log(err);
    });

  }

  getAllDomaine() {
    this.domService.getAllDomaine().subscribe(res=>{
        this.domList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editDomaine(dom : Domaine) {
    this.domDetail.controls['id'].setValue(dom.id);
    this.domDetail.controls['name'].setValue(dom.name);
    this.domDetail.controls['descreption'].setValue(dom.descreption);
    this.domDetail.controls['responsable'].setValue(dom.responsable);
    
    this.domDetail.controls['utilisateur'].setValue(dom.utilisateur);
    
    

  }

  updateDomaine() {

    this.domObj.id = this.domDetail.value.id;
    this.domObj.name = this.domDetail.value.name;
    this.domObj.descreption = this.domDetail.value.descreption;
    this.domObj.responsable = this.domDetail.value.responsable;
    this.domObj.utilisateur = this.domDetail.value.utilisateur;
    this.domService.updateDomaine(this.domObj).subscribe(res=>{
      console.log(res);
      this.getAllDomaine();
    },err=>{
      console.log(err);
    })

  }

  deleteDomaine(dom : Domaine) {

    this.domService.deleteDomaine(dom).subscribe(res=>{
      console.log(res);
      alert(' deleted yes or no');
      this.getAllDomaine();
    },err => {
      console.log(err);
    });

  }

}