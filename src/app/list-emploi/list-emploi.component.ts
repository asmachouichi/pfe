import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emploi';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmploiService } from '../service/emploi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emploi',
  templateUrl: './list-emploi.component.html',
  styleUrl: './list-emploi.component.css'
})
export class ListEmploiComponent implements OnInit{
  empList!: Emploi[];
  empDetail !: FormGroup;
  constructor(private empService : EmploiService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.empService.getAllEmploi().subscribe((empList) => {
      this.empList = empList;
    });
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
