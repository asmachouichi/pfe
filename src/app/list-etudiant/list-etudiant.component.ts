import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrl: './list-etudiant.component.css'
})
export class ListEtudiantComponent implements OnInit{
  etuList!: Etudiant[];
  etuDetail !: FormGroup;
  constructor(private etuService : EtudiantService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.etuService.getAllEtudiant().subscribe((etuList) => {
      this.etuList = etuList;
    });
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
