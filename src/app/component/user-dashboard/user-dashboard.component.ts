import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { Etudiant } from '../../etudiant';
import { EtudiantService } from '../../etudiant.service';
import { Emploi } from '../../model/emploi';
import { Inscreption } from '../../model/inscreption';
import { EmploiService } from '../../service/emploi.service';
import { InscreptionService } from '../../service/inscreption.service';
import { EventService } from '../../service/event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  totalUsers: number = 1000;
  eveList: Event[]= [];
  empList: Emploi[]= [];
  insList: Inscreption[]= [];
  constructor(private router : Router,private authService: AuthService,private insService: InscreptionService,private empService: EmploiService,private eveService: EventService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEvent();
    this.getAllEmploi();
    this.getAllInscreption();
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
  getAllInscreption() {
    this.insService.getAllInscreption().subscribe(res => {
      this.insList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

}