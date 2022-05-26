import { AdminUser } from 'src/app/model/AdminUser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input()
  user: AdminUser

  constructor() { }

  ngOnInit(): void {
  }

}
