import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  role : string = '';

  user : User = new User();

  roles : string[];

  constructor(private authService : AuthService, private route : Router) { 
    this.roles = [
     
      'user',
      'enseignant'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {
    this.user.username = this.username;
    this.user.password = this.password;

    // Ajouter les informations d'identification de l'administrateur ici
    if (this.username === 'admin@example.com' && this.password === 'Admin123!') {
      console.log("Admin login successful");
      // Rediriger vers la page d'administration
      this.route.navigate(['/admin']);
      return;
    }


    if (this.username === 'enseignant@example.com' && this.password === 'Enseignant123!') {
      console.log("Enseignant login successful");
      // Rediriger vers la page de l'enseignant
      this.route.navigate(['/enseignant']);
      return;
    }
    

    this.authService.login(this.user).subscribe(res => {
        if(res == null) {
            alert("Username or password is wrong");
            this.ngOnInit();
        } else {
            console.log("Login successful");
            localStorage.setItem("token",res.token);

            switch (res.role) {
                case 'user':
                    this.route.navigate(['/user']);
                    break;
                case 'enseignant':
                    this.route.navigate(['/enseignant']);
                    break;
                default:
                    // Handle unknown role
                    break;
            }
        }
    }, err => {
        alert("Login failed");
        this.ngOnInit();
    });
  }
 
  
}