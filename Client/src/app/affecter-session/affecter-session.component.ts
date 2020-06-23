import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Formateur } from 'src/models/Formateur.model';
import { Formation } from 'src/models/Formation.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affecter-session',
  templateUrl: './affecter-session.component.html',
  styleUrls: ['./affecter-session.component.css'],
  providers:[TaskService]
})
export class AffecterSessionComponent implements OnInit {
  message_valide:boolean;
  message_error:boolean;
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de connecter.");
 this.router.navigate(['/Admin']);
    }
    else if (localStorage.getItem('usertype')!="Admin")
    {

   alert("vous n'êtes pas un Admin.");
   this.router.navigate(['/Admin']);

    }
    else
    {
      this.getAllFormateurs();
      this. getAllFormations();
    }

  }

  getAllFormateurs()
  {
    this.taskService.getAllFormateurs().subscribe((res)=>{
      this.taskService.formateurs=res as Formateur[];
    });
  }

  getAllFormations()
  {
    this.taskService.getAllFormations().subscribe((res)=>{
      this.taskService.formations=res as Formation[];
    });
  }
  onSubmit(form: NgForm) {
alert(form.value["listeform"]);
     var Session={
              id_Formateur:form.value["nomform"],
              date_Debut:form.value["date_debut"],
              date_Fin:form.value["date_fin"],
              planning:form.value["planing"]
             }
             this.taskService.ajouterSessionFormation(Session,form.value["listeform"]).subscribe((res)=>{
             if(res["msg"]=="put request is working")
             {
              this.message_valide=true;
              form.reset();
             }
             else
             {
              this.message_error=false;
             }
             })

  }
}
