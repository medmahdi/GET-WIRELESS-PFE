import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Formation } from 'src/models/Formation.model';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-recherche-formation',
  templateUrl: './recherche-formation.component.html',
  styleUrls: ['./recherche-formation.component.css'],
  providers:[TaskService]
})
export class RechercheFormationComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) {}

  ngOnInit() {

  }

  values = '';

  onKey(event: any) { // without type info

    this.taskService.searchFormation(event.target.value).subscribe((res)=>{

      this.taskService.formations=res as Formation[];
      });
      this.ngOnInit();

  }


}
