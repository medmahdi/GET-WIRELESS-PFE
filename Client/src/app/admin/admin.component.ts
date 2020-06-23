import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[TaskService]
})
export class AdminComponent implements OnInit {
  message_error:boolean;
  constructor(private route: ActivatedRoute,private taskService:TaskService,private router:Router) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    var Login={
      email:form.value["username"],
      password:form.value["password"],
    }

    this.taskService.authentificationAdmin(Login).subscribe((res)=>{

      if(res["token"]!="")
      {
        localStorage.setItem("token",res["token"]);
        localStorage.setItem("usertype","Admin");
        this.router.navigate(['/Partie_Admin']);
      }
      else
      {
        this.message_error=true;
      }
  });

  }

}
