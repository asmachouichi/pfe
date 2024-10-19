
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscreption } from '../model/inscreption';
import { InscreptionService } from '../service/inscreption.service';

@Component({
  selector: 'app-inscreption',
  templateUrl: './inscreption.component.html',
  styleUrl: './inscreption.component.css'
})
export class InscreptionComponent {

  insDetail !: FormGroup;
  insObj : Inscreption = new Inscreption ();
  insList : Inscreption [] = [];

  constructor(private formBuilder : FormBuilder, private insService : InscreptionService) { }

  ngOnInit(): void {

    this.getAllInscreption();

    this.insDetail = this.formBuilder.group({
      id : [''],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    email: ['', [Validators.required, Validators.email]],
     
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$') ]],
      sexe: [''],
      password: ['', [Validators.required ]]
    });    

  }

  addInscreption() {
    if (this.insDetail.valid) {
    console.log(this.insDetail);
    this.insObj.id = this.insDetail.value.id;
    this.insObj.name= this.insDetail.value.name;
    this.insObj.prenom= this.insDetail.value.prenom;
    this.insObj.email= this.insDetail.value.email;
    this.insObj.sexe= this.insDetail.value.sexe;
    this.insObj.password= this.insDetail.value.password;
    this.insObj.cin= this.insDetail.value.cin;
    



    this.insService.addInscreption(this.insObj).subscribe(res=>{
        console.log(res);
        this.getAllInscreption();
    },err=>{
        console.log(err);
    });
  } else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllInscreption() {
    this.insService.getAllInscreption().subscribe(res=>{
        this.insList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editInscreption(ins :Inscreption) {
    this.insDetail.controls['id'].setValue(ins.id);
    this.insDetail.controls['name'].setValue(ins.name);
    this.insDetail.controls['prenom'].setValue(ins.prenom);
    this.insDetail.controls['email'].setValue(ins.email);
    this.insDetail.controls['sexe'].setValue(ins.sexe);
    
    this.insDetail.controls['password'].setValue(ins.password);
    this.insDetail.controls['cin'].setValue(ins.cin);
    
    
    

  }

  updateInscreption() {

    this.insObj.id = this.insDetail.value.id;
    this.insObj.name = this.insDetail.value.name;
    this.insObj.prenom = this.insDetail.value.prenom;
    this.insObj.email = this.insDetail.value.email;
    this.insObj.sexe = this.insDetail.value.sexe;
    this.insObj.password = this.insDetail.value.password;
    
    this.insObj.cin = this.insDetail.value.cin;
    
    


    this.insService.updateInscreption(this.insObj).subscribe(res=>{
      console.log(res);
      this.getAllInscreption();
    },err=>{
      console.log(err);
    })

  }

  deleteInscreption(ins: Inscreption) {
    if (confirm('Are you sure you want to delete this Inscreption?')) {
      this.insService.deleteInscreption(ins).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllInscreption();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

  