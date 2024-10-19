import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Classe } from '../model/classe';
import { ClasseService } from '../service/classe.service';
import { Emploi } from '../model/emploi';
import { Etudiant } from '../etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent {
  claDetail !: FormGroup;
  claObj : Classe = new Classe();
  claList : Classe[] = [];
  empList: Emploi[] = [];
  searchText = '';
  constructor(private formBuilder : FormBuilder, private claService : ClasseService,private router: Router) { }

  ngOnInit(): void {

    this.getAllClasse();

    this.claDetail = this.formBuilder.group({
      id : [''],
      specielite: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      niveau: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
   etudiant : [''],
    });    

  }

  addClasse() {
    console.log(this.claDetail);
    this.claObj.id = this.claDetail.value.id;
    this.claObj.specielite= this.claDetail.value.specielite;
    this.claObj.niveau= this.claDetail.value.niveau;
    this.claObj.name= this.claDetail.value.name;
    this.claObj.etudiant= this.claDetail.value.etudiant;
    this.claService.addClasse(this.claObj).subscribe(res=>{
        console.log(res);
        this.getAllClasse();
    },err=>{
        console.log(err);
    });

  }

  getAllClasse() {
    this.claService.getAllClasse().subscribe(res=>{
        this.claList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editClasse(cla : Classe) {
    this.claDetail.controls['id'].setValue(cla.id);
    this.claDetail.controls['specielite'].setValue(cla.specielite);
    this.claDetail.controls['niveau'].setValue(cla.niveau);
    this.claDetail.controls['name'].setValue(cla.name);
    this.claDetail.controls['etudiant'].setValue(cla.etudiant);

  }

  updateClasse() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour cet classe ?')) {
    this.claObj.id = this.claDetail.value.id;
    this.claObj.specielite= this.claDetail.value.specielite;
    this.claObj.niveau = this.claDetail.value.niveau;
    this.claObj.name = this.claDetail.value.name;
    this.claObj.etudiant = this.claDetail.value.etudiant;
    


    this.claService.updateClasse(this.claObj).subscribe(res=>{
      console.log(res);
      this.getAllClasse();
    },err=>{
      console.log(err);
    })
  } else {
    console.log('Mise à jour annulée');
  }
  }

  deleteClasse(cla : Classe) {
    if (confirm('Are you sure you want to delete this classe?')) {
      this.claService.deleteClasse(cla).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllClasse();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  presence(){
    this.router.navigate(['presence']);
  }
}
