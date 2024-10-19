import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  eveList!: Event[];
  eveDetail !: FormGroup;
  constructor(private eveService : EventService,private formBuilder : FormBuilder,private router: Router){}
  ngOnInit(): void {
   
    this.eveService.getAllEvent().subscribe((eveList) => {
      this.eveList = eveList;
    });
  }
  user(){
    this.router.navigate(['user']);
  }
}
