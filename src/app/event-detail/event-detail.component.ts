import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  id!: number;
  event!: Event;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private eveService: EventService) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      
      this.eveService.getEventById(this.id)
        .subscribe((data: Event) => {
          console.log(data);
          this.event = data;
        }, (error: any) => {
          console.log(error);
        });
    }
    
    
    

  eveList(){
    this.router.navigate(['event']);
  }

  @ViewChild('content') content!: ElementRef;

  printPage(): void {
    window.print(); // Cette commande ouvrira la boîte de dialogue d'impression du navigateur
  }
}
