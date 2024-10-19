import { Component, OnInit } from '@angular/core';
import { Ensiegnant } from '../model/ensiegnant';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnsiegnantService } from '../service/ensiegnant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ensiegnant',
  templateUrl: './list-ensiegnant.component.html',
  styleUrl: './list-ensiegnant.component.css'
})
export class ListEnsiegnantComponent implements OnInit{
  ensList!: Ensiegnant[];
  ensDetail !: FormGroup;
  constructor(private ensService : EnsiegnantService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.ensService.getAllEnsiegnant().subscribe((ensList) => {
      this.ensList = ensList;
    });
  }
  admin(){
    this.router.navigate(['admin']);
  }
}
