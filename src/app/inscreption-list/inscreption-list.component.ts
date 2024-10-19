import { Component } from '@angular/core';
import { Inscreption } from '../model/inscreption';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InscreptionService } from '../service/inscreption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscreption-list',
  templateUrl: './inscreption-list.component.html',
  styleUrl: './inscreption-list.component.css'
})
export class InscreptionListComponent {
  insList!: Inscreption[];
  insDetail !: FormGroup;
  constructor(private insService : InscreptionService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.insService.getAllInscreption().subscribe((insList) => {
      this.insList = insList;
    });
  }
  user(){
    this.router.navigate(['user']);
  }
}
