import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ceiffetion } from '../ceiffetion';
import { CeiffetionService } from '../ceiffetion.service';

@Component({
  selector: 'app-ceiffetion',
  templateUrl: './ceiffetion.component.html',
  styleUrl: './ceiffetion.component.css'
})
export class CeiffetionComponent {

  ceiDetail !: FormGroup;
  ceiObj : Ceiffetion = new Ceiffetion();
  ceiList : Ceiffetion[] = [];

  constructor(private formBuilder : FormBuilder, private ceiService : CeiffetionService) { }

  ngOnInit(): void {

    this.getAllCeiffetion();

    this.ceiDetail = this.formBuilder.group({
      id : [''],
    matiere: [''],
      ceiffetion: [''],
      semestre: [''],
     
    });    

  }

  addCeiffetion() {
    console.log(this.ceiDetail);
    this.ceiObj.id = this.ceiDetail.value.id;
    this.ceiObj.matiere= this.ceiDetail.value.matiere;
    this.ceiObj.ceiffetion= this.ceiDetail.value.ceiffetion;
    this.ceiObj.semestre = this.ceiDetail.value.semestre;
  

    this.ceiService.addCeiffetion(this.ceiObj).subscribe(res=>{
        console.log(res);
        this.getAllCeiffetion();
    },err=>{
        console.log(err);
    });

  }

  getAllCeiffetion() {
    this.ceiService.getAllCeiffetion().subscribe(res=>{
        this.ceiList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editCeiffetion(cei : Ceiffetion) {
    this.ceiDetail.controls['id'].setValue(cei.id);
    this.ceiDetail.controls['matiere'].setValue(cei.matiere);
    this.ceiDetail.controls['ceiffetion'].setValue(cei.ceiffetion);
    this.ceiDetail.controls['semestre'].setValue(cei.semestre);
   
    

  }

  updateCeiffetion() {

    this.ceiObj.id = this.ceiDetail.value.id;
    this.ceiObj.matiere = this.ceiDetail.value.matiere;
    this.ceiObj.ceiffetion = this.ceiDetail.value.ceiffetion;
    this.ceiObj.semestre = this.ceiDetail.value.semestre;
   
    


    this.ceiService.updateCeiffetion(this.ceiObj).subscribe(res=>{
      console.log(res);
      this.getAllCeiffetion();
    },err=>{
      console.log(err);
    })

  }

  deleteCeiffetion(cei : Ceiffetion) {

    this.ceiService.deleteCeiffetion(cei).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllCeiffetion();
    },err => {
      console.log(err);
    });

  }
}



