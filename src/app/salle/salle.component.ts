import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../model/salle';
import { SalleService } from '../service/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit{
  salDetail !: FormGroup;
  salObj : Salle = new Salle();
  salList : Salle[] = [];

  constructor(private formBuilder : FormBuilder, private salService : SalleService) { }

  ngOnInit(): void {

    this.getAllSalle();

    this.salDetail = this.formBuilder.group({
      id : [''],
      numero : [''],
      type: ['']
     
    });    

  }

  addSalle() {
    console.log(this.salDetail);
    this.salObj.id = this.salDetail.value.id;
    this.salObj.numero = this.salDetail.value.numero;
    this.salObj.type = this.salDetail.value.type;
   
   

    this.salService.addSalle(this.salObj).subscribe(res=>{
        console.log(res);
        this.getAllSalle();
    },err=>{
        console.log(err);
    });

  }

  getAllSalle() {
    this.salService.getAllSalle().subscribe(res=>{
        this.salList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editSalle(sal : Salle) {
    this.salDetail.controls['numero'].setValue(sal.numero);
    this.salDetail.controls['type'].setValue(sal.type);
    this.salDetail.controls['id'].setValue(sal.id);
    
    

  }

  updateSalle() {

    this.salObj.id = this.salDetail.value.id;
    this.salObj.numero = this.salDetail.value.numero;
    this.salObj.type = this.salDetail.value.type;
    
    this.salService.updateSalle(this.salObj).subscribe(res=>{
      console.log(res);
      this.getAllSalle();
    },err=>{
      console.log(err);
    })

  }

  deleteSalle(sal: Salle) {
    if (confirm('Are you sure you want to delete this salle?')) {
      this.salService.deleteSalle(sal).subscribe(
        res => {
          console.log(res);
          alert('Deleted successfully');
          this.getAllSalle();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
 

}
