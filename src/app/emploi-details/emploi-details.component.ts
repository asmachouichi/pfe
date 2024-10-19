import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emploi';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiService } from '../service/emploi.service';

@Component({
  selector: 'app-emploi-details',
  templateUrl: './emploi-details.component.html',
  styleUrl: './emploi-details.component.css'
})
export class EmploiDetailsComponent implements OnInit{
  id!: number;
  emploi!: Emploi;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private empService: EmploiService) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      
      this.empService.getEmploiById(this.id)
        .subscribe((data: Emploi) => {
          console.log(data);
          this.emploi = data;
        }, (error: any) => {
          console.log(error);
        });
    }
    
    

  empList(){
    this.router.navigate(['emploi']);
  }
}
