import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Diplome } from '../model/diplome';
import { DiplomeService } from '../service/diplome.service';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrl: './diplome.component.css'
})
export class DiplomeComponent {
  dipDetail !: FormGroup;
  dipObj : Diplome = new Diplome();
  dipList : Diplome[] = [];

  constructor(private formBuilder : FormBuilder, private dipService : DiplomeService) { }

  ngOnInit(): void {

    this.getAllDiplome();

    this.dipDetail = this.formBuilder.group({
      id : [''],
      name: [''],
      niveau: [''],
      notes:[''],
      domaineEtudes:[''],
      institution:[''],
      specialisation:[''],
      pays:[''],
     duree:[''],
     dateObtention:[''],
     detenteur:['']


    });    

  }

  addDiplome() {
    console.log(this.dipDetail);
    this.dipObj.id = this.dipDetail.value.id;
    this.dipObj.name = this.dipDetail.value.name;
    this.dipObj.notes = this.dipDetail.value.notes;
    this.dipObj.domaineEtudes = this.dipDetail.value.domaineEtudes;
    this.dipObj.niveau = this.dipDetail.value.niveau;
    this.dipObj.institution = this.dipDetail.value.institution;
    this.dipObj.pays = this.dipDetail.value.pays;
    this.dipObj.specialisation = this.dipDetail.value.specialisation;
    this.dipObj.duree = this.dipDetail.value.duree;
    this.dipObj.dateObtention = this.dipDetail.value.dateObtention;
    this.dipObj.detenteur = this.dipDetail.value.detenteur;

    this.dipService.addDiplome(this.dipObj).subscribe(res=>{
        console.log(res);
        this.getAllDiplome();
    },err=>{
        console.log(err);
    });

  }

  getAllDiplome() {
    this.dipService.getAllDiplome().subscribe(res=>{
        this.dipList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editDiplome(dip : Diplome) {
    this.dipDetail.controls['id'].setValue(dip.id);
    this.dipDetail.controls['notes'].setValue(dip.notes);
    this.dipDetail.controls['name'].setValue(dip.name);
    this.dipDetail.controls['domaineEtudes'].setValue(dip.domaineEtudes);
    this.dipDetail.controls['institution'].setValue(dip.institution);
    this.dipDetail.controls['niveau'].setValue(dip.niveau);
    this.dipDetail.controls['duree'].setValue(dip.duree);
    this.dipDetail.controls['pays'].setValue(dip.pays);
    this.dipDetail.controls['dateObtention'].setValue(dip.dateObtention);
    this.dipDetail.controls['detenteur'].setValue(dip.detenteur);

  }

  updateDiplome() {

    this.dipObj.id = this.dipDetail.value.id;
    this.dipObj.name= this.dipDetail.value.name;
    this.dipObj.domaineEtudes= this.dipDetail.value.domaineEtudes;
    this.dipObj.notes= this.dipDetail.value.notes;
    this.dipObj.duree= this.dipDetail.value.duree;
    this.dipObj.niveau= this.dipDetail.value.niveau;
    this.dipObj.institution= this.dipDetail.value.institution;
    this.dipObj.pays= this.dipDetail.value.pays;
    this.dipObj.dateObtention= this.dipDetail.value.dateObtention;
    this.dipObj.detenteur= this.dipDetail.value.detenteur;

    this.dipService.updateDiplome(this.dipObj).subscribe(res=>{
      console.log(res);
      this.getAllDiplome();
    },err=>{
      console.log(err);
    })

  }

  deleteDiplome(dip : Diplome) {

    this.dipService.deleteDiplome(dip).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllDiplome();
    },err => {
      console.log(err);
    });
  }
}
