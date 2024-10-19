import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nationnalite } from '../model/nationnalite';
import { NationnaliteService } from '../service/nationnalite.service';

@Component({
  selector: 'app-nationnalite',
  templateUrl: './nationnalite.component.html',
  styleUrl: './nationnalite.component.css'
})
export class NationnaliteComponent {

  
  natDetail !: FormGroup;
  natObj : Nationnalite = new Nationnalite();
  natList : Nationnalite[] = [];

  constructor(private formBuilder : FormBuilder, private natService : NationnaliteService) { }

  ngOnInit(): void {

    this.getAllNationnalite();

    this.natDetail = this.formBuilder.group({
      id : [''],
    name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      nationnalite: ['', Validators.required],
      pays: ['' ,Validators.required]
      
    });    

  }

  addNationnalite() {
    if (this.natDetail.valid) {  
    console.log(this.natDetail);
    this.natObj.id = this.natDetail.value.id;
    this.natObj.name= this.natDetail.value.name;
    this.natObj.nationnalite= this.natDetail.value.nationnalite;
    this.natObj.pays = this.natDetail.value.pays;
    
    this.natService.addNationnalite(this.natObj).subscribe(res=>{
        console.log(res);
        this.getAllNationnalite();
    },err=>{
        console.log(err);
    });
  } else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllNationnalite() {
    this.natService.getAllNationnalite().subscribe(res=>{
        this.natList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editNationnalite(nat : Nationnalite) {
    this.natDetail.controls['id'].setValue(nat.id);
    this.natDetail.controls['name'].setValue(nat.name);
    this.natDetail.controls['nationnalite'].setValue(nat.nationnalite);
    this.natDetail.controls['pays'].setValue(nat.pays);
   
    

  }

  updateNationnalite() {

    this.natObj.id = this.natDetail.value.id;
    this.natObj.name = this.natDetail.value.name;
    this.natObj.nationnalite = this.natDetail.value.nationnalite;
    this.natObj.pays = this.natDetail.value.pays;
    
    


    this.natService.updateNationnalite(this.natObj).subscribe(res=>{
      console.log(res);
      this.getAllNationnalite();
    },err=>{
      console.log(err);
    })

  }

  deleteNationnalite(nat : Nationnalite) {

    this.natService.deleteNationnalite(nat).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllNationnalite();
    },err => {
      console.log(err);
    });

  }
}





