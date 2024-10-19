import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../../etudiant.service';
import { Etudiant } from '../../etudiant';
import { AuthService } from '../../service/auth.service';

import { Ensiegnant } from '../../model/ensiegnant';
import { Matiere } from '../../model/matiere';
import { Classe } from '../../model/classe';
import { Emploi } from '../../model/emploi';
import { EnsiegnantService } from '../../service/ensiegnant.service';
import { MatiereService } from '../../service/matiere.service';
import { EmploiService } from '../../service/emploi.service';
import { ClasseService } from '../../service/classe.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  etuList: Etudiant[]= [];
  ensList: Ensiegnant[]= [];
  matList: Matiere[]= [];
  claList: Classe[]= [];
  empList: Emploi[]= [];
  constructor(private route : Router,private claService: ClasseService,private empService: EmploiService,private matService: MatiereService,private ensService: EnsiegnantService,private etuService: EtudiantService,private authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.getAllEtudiant();
    this.getAllEnsiegnant();
    this.getAllEmploi();
    this.getAllMatiere();
    this.getAllClasse();
  }
  
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
  getAllEtudiant() {
    this.etuService.getAllEtudiant().subscribe(res => {
      this.etuList = res;
    }, err => {
      console.log("error while fetching data.")
    });}
    getAllEnsiegnant() {
      this.ensService.getAllEnsiegnant().subscribe(res => {
        this.ensList = res;
      }, err => {
        console.log("error while fetching data.")
      });}
   
      getAllEmploi() {
        this.empService.getAllEmploi().subscribe(res => {
          this.empList = res;
        }, err => {
          console.log("error while fetching data.")
        });}
        getAllMatiere() {
          this.matService.getAllMatiere().subscribe(res => {
            this.matList = res;
          }, err => {
            console.log("error while fetching data.")
          });}
          getAllClasse() {
            this.claService.getAllClasse().subscribe(res => {
              this.claList = res;
            }, err => {
              console.log("error while fetching data.")
            });}   
}