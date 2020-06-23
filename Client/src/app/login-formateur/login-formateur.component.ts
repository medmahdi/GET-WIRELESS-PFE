import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-formateur',
  templateUrl: './login-formateur.component.html',
  styleUrls: ['./login-formateur.component.css'],
  providers:[TaskService]
})
export class LoginFormateurComponent implements OnInit {
  message_error:boolean;
  constructor(private route: ActivatedRoute,private taskService:TaskService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var Login={
      email:form.value["username"],
      password:form.value["password"],
    }

    this.taskService.authentificationF(Login).subscribe((res)=>{

      if(res["token"]!="")
      {
        localStorage.setItem("token",res["token"]);
        localStorage.setItem("usertype","Formateur");
        this.router.navigate(['/Acceuil']);
      }
      else
      {
        this.message_error=true;
      }
  });

  }
}
