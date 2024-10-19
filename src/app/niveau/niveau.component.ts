import { Component } from '@angular/core';

import { Niveau } from '../model/niveau';
import { NiveauService } from '../service/niveau.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrl: './niveau.component.css'
})
export class NiveauComponent {

  nivDetail !: FormGroup;
  nivObj : Niveau = new Niveau();
  nivList : Niveau[] = [];

  constructor(private formBuilder : FormBuilder, private nivService : NiveauService) { }

  ngOnInit(): void {

    this.getAllNiveau();

    this.nivDetail = this.formBuilder.group({
      id : [''],
    name: [''],
    description: [''],
      cycle: [''],
    
    });    

  }

  addNiveau() {
    console.log(this.nivDetail);
    this.nivObj.id = this.nivDetail.value.id;
    this.nivObj.name= this.nivDetail.value.name;
    this.nivObj.description= this.nivDetail.value.description;
    this.nivObj.cycle = this.nivDetail.value.cycle;


    this.nivService.addNiveau(this.nivObj).subscribe(res=>{
        console.log(res);
        this.getAllNiveau();
    },err=>{
        console.log(err);
    });

  }

  getAllNiveau() {
    this.nivService.getAllNiveau().subscribe(res=>{
        this.nivList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editNiveau(niv :Niveau) {
    this.nivDetail.controls['id'].setValue(niv.id);
    this.nivDetail.controls['name'].setValue(niv.name);
    this.nivDetail.controls['description'].setValue(niv.description);
    this.nivDetail.controls['cycle'].setValue(niv.cycle);
    
    

  }

  updateNiveau() {

    this.nivObj.id = this.nivDetail.value.id;
    this.nivObj.name = this.nivDetail.value.name;
    this.nivObj.description = this.nivDetail.value.description;
    this.nivObj.cycle = this.nivDetail.value.cycle;

    


    this.nivService.updateNiveau(this.nivObj).subscribe(res=>{
      console.log(res);
      this.getAllNiveau();
    },err=>{
      console.log(err);
    })

  }

  deleteNiveau(niv : Niveau) {

    this.nivService.deleteNiveau(niv).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllNiveau();
    },err => {
      console.log(err);
    });

  }
}
