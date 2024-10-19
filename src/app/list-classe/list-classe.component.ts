import { Component, OnInit } from '@angular/core';
import { Classe } from '../model/classe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClasseService } from '../service/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit {
  claList!: Classe[];
  claDetail !: FormGroup;
  constructor(private claService : ClasseService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.claService.getAllClasse().subscribe((claList) => {
      this.claList = claList;
    });
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
