import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chapitre } from '../model/chapitre';
import { ChapitreService } from '../service/chapitre.service';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrl: './chapitre.component.css'
})
export class ChapitreComponent {
  chaDetail !: FormGroup;
  chaObj : Chapitre = new Chapitre();
  chaList : Chapitre[] = [];

  constructor(private formBuilder : FormBuilder, private chaService : ChapitreService) { }

  ngOnInit(): void {

    this.getAllChapitre();

    this.chaDetail = this.formBuilder.group({
      id : [''],
      name: [''],
      matiere: [''],
      semestre:['']
    });    

  }

  addChapitre() {
    console.log(this.chaDetail);
    this.chaObj.id = this.chaDetail.value.id;
    this.chaObj.name= this.chaDetail.value.name;
    this.chaObj.matiere= this.chaDetail.value.matiere;
    this.chaObj.semestre=this.chaDetail.value.semestre

    this.chaService.addChapitre(this.chaObj).subscribe(res=>{
        console.log(res);
        this.getAllChapitre();
    },err=>{
        console.log(err);
    });

  }

  getAllChapitre() {
    this.chaService.getAllChapitre().subscribe(res=>{
        this.chaList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editChapitre(cha : Chapitre) {
    this.chaDetail.controls['id'].setValue(cha.id);
    this.chaDetail.controls['name'].setValue(cha.name);
    this.chaDetail.controls['matiere'].setValue(cha.matiere);
    this.chaDetail.controls['semestre'].setValue(cha.semestre);


  }

  updateChapitre() {

    this.chaObj.id = this.chaDetail.value.id;
    this.chaObj.name= this.chaDetail.value.name;
    this.chaObj.matiere = this.chaDetail.value.matiere;
    this.chaObj.semestre = this.chaDetail.value.semestre;
    
    


    this.chaService.updateChapitre(this.chaObj).subscribe(res=>{
      console.log(res);
      this.getAllChapitre();
    },err=>{
      console.log(err);
    })

  }

  deleteChapitre(cha : Chapitre) {

    this.chaService.deleteChapitre(cha).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllChapitre();
    },err => {
      console.log(err);
    });
  }
}
