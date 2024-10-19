import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emploi } from '../../model/emploi';
import { Classe } from '../../model/classe';
import { ClasseService } from '../../service/classe.service';
import { EmploiService } from '../../service/emploi.service';
import { EventService } from '../../service/event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-enseignant-dashboard',
  templateUrl: './enseignant-dashboard.component.html',
  styleUrl: './enseignant-dashboard.component.css'
})
export class EnseignantDashboardComponent implements OnInit {
  totalUsers: number = 1000;
  eveList: Event[]= [];
  empList: Emploi[]= [];
  claList: Classe[]= [];
  constructor(private route : Router ,private claService: ClasseService,private empService: EmploiService,private eveService: EventService) { }

  ngOnInit(): void {
    this.getAllEvent();
    this.getAllEmploi();
    this.getAllClasse();
  }
  getAllEvent() {
    this.eveService.getAllEvent().subscribe(res => {
      this.eveList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getAllEmploi() {
    this.empService.getAllEmploi().subscribe(res => {
      this.empList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  getAllClasse() {
    this.claService.getAllClasse().subscribe(res => {
      this.claList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
