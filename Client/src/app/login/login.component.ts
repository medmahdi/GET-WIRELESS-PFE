import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { debug } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TaskService]
})
export class LoginComponent implements OnInit {
  message_error: boolean;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {

    let token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('/admin-panel');
    }
  }


  onSubmit(form: NgForm) {
    var login = {
      username: form.value["username"],
      password: form.value["password"],
    }

    this.accountService.login(login).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('/admin-panel');
      },
        err => {
          console.log("err : ",err)
        }
    )
  }

}
