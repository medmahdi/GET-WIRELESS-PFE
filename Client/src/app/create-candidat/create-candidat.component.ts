import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create-candidat',
  templateUrl: './create-candidat.component.html',
  styleUrls: ['./create-candidat.component.css'],
  providers: [TaskService]
})
export class CreateCandidatComponent implements OnInit {
  message_valide: boolean;
  message_error: boolean;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {

    var body = {
      username: form.value["username"],
      firstname: form.value["NomCandidat"],
      lastname: form.value["Prenom_Candidat"],
      email: form.value["Email_Candidat"],
      phone: form.value["phone"],
      password: form.value["passwd"],
      roles: ['user']
    }

    console.log("candidat : ", body)

    this.accountService.registerForUser(body).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/Login');
      },
      err => {
        console.log("err : ",err)
      }
    );


  }
}
