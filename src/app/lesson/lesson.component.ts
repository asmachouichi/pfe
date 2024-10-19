import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Lesson } from '../model/lesson';
import { LessonService } from '../service/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  lesDetail !: FormGroup;
  lesObj : Lesson = new Lesson ();
  lesList : Lesson [] = [];

  constructor(private formBuilder : FormBuilder, private lesService : LessonService) { }

  ngOnInit(): void {

    this.getAllLesson();

    this.lesDetail = this.formBuilder.group({
      id : [''],
    niveau: [''],
    auteur: [''],
      duree: [''],
      descreption: [''],
      matiere: [''],
      titre: [''],
    
    });    

  }

  addLesson() {
    console.log(this.lesDetail);
    this.lesObj.id = this.lesDetail.value.id;
    this.lesObj.titre = this.lesDetail.value.titre;
    this.lesObj.descreption = this.lesDetail.value.descreption;
    this.lesObj.matiere = this.lesDetail.value.matiere;
    this.lesObj.auteur = this.lesDetail.value.auteur;
    this.lesObj.duree = this.lesDetail.value.duree;
    this.lesObj.niveau = this.lesDetail.value.niveau;


    this.lesService.addLesson(this.lesObj).subscribe(res=>{
        console.log(res);
        this.getAllLesson();
    },err=>{
        console.log(err);
    });

  }

  getAllLesson() {
    this.lesService.getAllLesson().subscribe(res=>{
        this.lesList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editLesson(les :Lesson) {
    this.lesDetail.controls['id'].setValue(les.id);
    this.lesDetail.controls['descreption'].setValue(les.descreption);
    this.lesDetail.controls['titre'].setValue(les.titre);
    this.lesDetail.controls['duree'].setValue(les.duree);
    this.lesDetail.controls['auteur'].setValue(les.auteur);
    this.lesDetail.controls['matiere'].setValue(les.matiere);
  }

  updateLesson() {

    this.lesObj.id = this.lesDetail.value.id;
    
    this.lesObj.auteur = this.lesDetail.value.auteur;
    this.lesObj.titre = this.lesDetail.value.titre;
    this.lesObj.duree = this.lesDetail.value.duree;
    
    this.lesObj.matiere = this.lesDetail.value.matiere;
    this.lesObj.descreption = this.lesDetail.value.descreption;

   
    


    this.lesService.updateLesson(this.lesObj).subscribe(res=>{
      console.log(res);
      this.getAllLesson();
    },err=>{
      console.log(err);
    })

  }

  deleteLesson(les : Lesson) {

    this.lesService.deleteLesson(les).subscribe(res=>{
      console.log(res);
      alert('deletet ou non');
      this.getAllLesson();
    },err => {
      console.log(err);
    });

  }
}

  


