import { AccountService } from './../../../../services/account.service';
import { UsersService } from './../../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  message_valide: boolean;
  message_error: boolean;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'username', 'firstname', 'lastname', 'email', 'phone', 'status','createdAt', 'action'];

  constructor(private usersService: UsersService,private router : Router, private accountService: AccountService) {
    this.getAllUsers()
   }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllUsers() {
    this.usersService.getAll()
      .subscribe((response: any) => {
        let decoded = this.accountService.getDecodedToken()
        if (decoded) {
          let userId = decoded.sub
          response = response.filter(x => x._id != userId)
          this.dataSource = new MatTableDataSource(response);
          console.log("users : ", this.dataSource.data)
          this.dataSource.paginator = this.paginator;
        }
      })
  }

  activateUserStatus(id,index){
    this.usersService.activateUser(id)
    .subscribe(res=>{
      let user : any  = this.dataSource.data.find((x : any)=>x._id == id)
      user.status = true
        console.log(res)
      },
      err=>console.log(err)
    )
  }

  deactivateUserStatus(id,index){
    this.usersService.deactivateUser(id)
    .subscribe(res=>{
        console.log(res)
        let user : any  = this.dataSource.data.find((x : any)=>x._id == id)
      user.status = false
      },
      err=>console.log(err)
    )
  }

  deleteById(id, index) {
    this.usersService.deleteById(id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
          // this.toastr.info('House Suppression !', 'House deleted successfully.');
        },
        err => {
          console.log(err);
        },
      );
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
