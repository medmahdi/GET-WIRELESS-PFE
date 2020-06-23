import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userDetails: any = {};

  constructor(private accountService: AccountService) {
    this.userDetails = this.accountService.getDecodedToken()
    console.log(this.userDetails)

   }

  ngOnInit(): void {
  }

}
