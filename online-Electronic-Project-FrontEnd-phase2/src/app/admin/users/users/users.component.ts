
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUser } from 'src/app/model/AdminUser';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  adminusers: Array<AdminUser>;
  selectedUser: AdminUser;
  action: string;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.httpClientService
      .getAdminUser()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    this.activatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
      const selectedUserId = params['id'];
      if (selectedUserId) {
        this.selectedUser = this.adminusers.find(
          (user) => user.userid === +selectedUserId
        );
      }
    });
  }
  handleSuccessfulResponse(response: AdminUser[]) {
    this.adminusers = response;
  }

  viewUser(id: number) {
    this.router.navigate(['admin', 'users'], {
      queryParams: { id, action: 'view' },
    });
  }
}
