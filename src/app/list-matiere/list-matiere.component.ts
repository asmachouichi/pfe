import { Component, OnInit } from '@angular/core';
import { Matiere } from '../model/matiere';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatiereService } from '../service/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{
  matList!: Matiere[];
  matDetail !: FormGroup;
  constructor(private matService : MatiereService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.matService.getAllMatiere().subscribe((matList) => {
      this.matList = matList;
    });
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
