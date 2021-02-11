import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private usersS:UsersService,) { }

  ngOnInit() {
  }

  addUser(){
    console.log("[ADD] Añadiendo producto");
    let data:User={
      name:"Alba",
      avatar:"Hermosa",
      
    }
    this.usersS.addUser(data);
  }

}
