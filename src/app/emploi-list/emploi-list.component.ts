import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Emploi } from '../model/emploi';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmploiService } from '../service/emploi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emploi-list',
  templateUrl: './emploi-list.component.html',
  styleUrl: './emploi-list.component.css'
})
export class EmploiListComponent implements OnInit {
  empList!: Emploi[];
  empDetail !: FormGroup;
  searchText = '';
  constructor(private empService : EmploiService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.empService.getAllEmploi().subscribe((empList) => {
      this.empList = empList;
    });
  }
  user(){
    this.router.navigate(['user']);
  }
  @ViewChild('content') content!: ElementRef;

  printPage(): void {
    window.print(); // Cette commande ouvrira la boîte de dialogue d'impression du navigateur
  }
}
