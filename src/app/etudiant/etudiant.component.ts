import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { InscreptionService } from '../service/inscreption.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  searchText = '';
  etuDetail !: FormGroup;
  etuObj : Etudiant = new Etudiant();
  etuList : Etudiant[] = [];
  selectedName: any;
  insList: any[] = [];
  constructor(private formBuilder : FormBuilder, private etuService : EtudiantService,private insService: InscreptionService) {
    this.selectedName = null;
   }

  ngOnInit(): void {
    this.loadName();
    this.getAllEtudiant();

    this.etuDetail = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$') ]], // Modèle de validation pour 8 chiffres
      date_naissance: ['', Validators.required],
      classe:['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
  
    });
  }
  loadName(): void {
    this.insService.getAllName().subscribe((name: string[])=> {
        this.insList = name;
    });
}

setSelectedName(nameId: number) {
    const selectedEnseignant = this.insList.find(name => name.id === nameId);
    if (selectedEnseignant) {
        this.etuObj.name = this.selectedName.name;
    }
}
addEtudiant() {
  if (this.etuDetail.valid) { // Vérifie si le formulaire est valide
    if (window.confirm('Êtes-vous sûr de vouloir ajouter cet étudiant ?')) {
      console.log(this.etuDetail);
      this.etuObj.id = this.etuDetail.value.id;
      this.etuObj.name = this.etuDetail.value.name;
      this.etuObj.prenom = this.etuDetail.value.prenom;
      this.etuObj.email = this.etuDetail.value.email;
      this.etuObj.cin = this.etuDetail.value.cin;
      this.etuObj.date_naissance = this.etuDetail.value.date_naissance;
      this.etuObj.classe = this.etuDetail.value.classe;
      this.etuObj.groupe = this.etuDetail.value.groupe;
      this.etuObj.nationnalite = this.etuDetail.value.nationnalite;
      this.etuService.addEtudiant(this.etuObj).subscribe(res => {
        console.log(res);
        this.getAllEtudiant();
      }, err => {
        console.log(err);
      });
    } else {
      console.log('Ajout annulé');
    }
  } else {
    alert('Veuillez remplir tous les champs du formulaire.');
    console.log('Formulaire invalide. Veuillez vérifier les champs.');
    // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
  }
}


  getAllEtudiant() {
    this.etuService.getAllEtudiant().subscribe(res=>{
        this.etuList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEtudiant(etu : Etudiant) {
    this.etuDetail.controls['id'].setValue(etu.id);
    this.etuDetail.controls['name'].setValue(etu.name);
    this.etuDetail.controls['prenom'].setValue(etu.prenom);
    this.etuDetail.controls['email'].setValue(etu.email);
    this.etuDetail.controls['cin'].setValue(etu.cin);
    this.etuDetail.controls['date_naissance'].setValue(etu.date_naissance);
    this.etuDetail.controls['classe'].setValue(etu.classe);
    this.etuDetail.controls['groupe'].setValue(etu.groupe);
    this.etuDetail.controls['nationnalite'].setValue(etu.nationnalite);

  }

  updateEtudiant() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet etudiant ?')) {
    this.etuObj.id = this.etuDetail.value.id;
    this.etuObj.name = this.etuDetail.value.name;
    this.etuObj.prenom = this.etuDetail.value.prenom;
    this.etuObj.email = this.etuDetail.value.email;
    this.etuObj.cin = this.etuDetail.value.cin;
    this.etuObj.date_naissance = this.etuDetail.value.date_naissance;
    this.etuObj.classe = this.etuDetail.value.classe;
    this.etuObj.groupe = this.etuDetail.value.groupe;
    this.etuObj.nationnalite = this.etuDetail.value.nationnalite;


    this.etuService.updateEtudiant(this.etuObj).subscribe(res=>{
      console.log(res);
      this.getAllEtudiant();
    },err=>{
      console.log(err);
    })
  } else {
    console.log('Mise à jour annulée');
  }
  }
  deleteEtudiant(etu: Etudiant) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.etuService.deleteEtudiant(etu).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllEtudiant();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
 
}

