import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Formation } from 'src/models/Formation.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers:[TaskService]
})
export class AcceuilComponent implements OnInit {
  constructor(private taskService:TaskService,private router:Router,private location: Location) { }
  ngOnInit() {

    // this.taskService.getAllFormations().subscribe((res)=>{
    //   this.taskService.formations=res as Formation[];
    //   });




  }

  pageRefresh() {
    location.reload();
 }
}
