import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificat } from '../model/certificat';
import { CertificatService } from '../service/certificat.service';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrl: './certificat.component.css'
})
export class CertificatComponent {
  cerDetail !: FormGroup;
  cerObj : Certificat = new Certificat();
  cerList : Certificat[] = [];

  constructor(private formBuilder : FormBuilder, private cerService : CertificatService) { }

  ngOnInit(): void {

    this.getAllCertificat();

    this.cerDetail = this.formBuilder.group({
      id : [''],
      name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      niveau: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      
      descreption:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      institut:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      domaine:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
    });    

  }

  addCertificat() {
    if (this.cerDetail.valid) { 
    console.log(this.cerDetail);
    this.cerObj.id = this.cerDetail.value.id;
    this.cerObj.descreption = this.cerDetail.value.descreption;
   
    this.cerObj.domaine = this.cerDetail.value.domaine;
    this.cerObj.niveau = this.cerDetail.value.niveau;
    this.cerObj.institut = this.cerDetail.value.institut;
    this.cerObj.name = this.cerDetail.value.name;
   

    this.cerService.addCertificat(this.cerObj).subscribe(res=>{
        console.log(res);
        this.getAllCertificat();
    },err=>{
        console.log(err);
    });
  } else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  getAllCertificat() {
    this.cerService.getAllCertificat().subscribe(res=>{
        this.cerList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editCertificat(cer : Certificat) {
    this.cerDetail.controls['id'].setValue(cer.id);

    this.cerDetail.controls['descreption'].setValue(cer.descreption);
    this.cerDetail.controls['domaine'].setValue(cer.domaine);
    this.cerDetail.controls['institut'].setValue(cer.institut);
    this.cerDetail.controls['niveau'].setValue(cer.niveau);
    this.cerDetail.controls['name'].setValue(cer.name);
   
   

  }

  updateCertificat() {
    if (this.cerDetail.valid) { 
    this.cerObj.id = this.cerDetail.value.id;
    this.cerObj.name= this.cerDetail.value.name;
    this.cerObj.descreption= this.cerDetail.value.descreption;

    this.cerObj.domaine= this.cerDetail.value.domaine;
    this.cerObj.niveau= this.cerDetail.value.niveau;
    this.cerObj.institut= this.cerDetail.value.institut;
    
    


    this.cerService.updateCertificat(this.cerObj).subscribe(res=>{
      console.log(res);
      this.getAllCertificat();
    },err=>{
      console.log(err);
    })
  } else {
   
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
  }

  deleteCertificat(cer: Certificat) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.cerService.deleteCertificat(cer).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllCertificat();
        },
        err => {
          console.log(err);
        }
      );
    }
}

}
