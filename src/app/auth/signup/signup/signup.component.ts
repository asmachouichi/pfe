import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name : string = '';
  username : string = '';
  password : string = '';
role:string='';
  user : User = new User();
  sigDetail: FormGroup;
  roles! : string[];
  constructor( private authService : AuthService, private route : Router,private formBuilder: FormBuilder,) { 
 
    this.sigDetail= this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    
    });
  }
 
  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }

  signup() {
    if (this.sigDetail.valid) {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.role = 'user'; // Premier rôle
     // Deuxième rôle
  
    this.authService.signUp(this.user).subscribe(res => {
      if (res == null) {
        alert("Registration failed");
        this.ngOnInit();
      } else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    });
  }
 else {
  alert('Veuillez remplir tous les champs du formulaire.');
  console.log('Formulaire invalide. Veuillez vérifier les champs.');
  // Vous pouvez également afficher des messages d'erreur spécifiques à chaque champ invalide ici
}

}}