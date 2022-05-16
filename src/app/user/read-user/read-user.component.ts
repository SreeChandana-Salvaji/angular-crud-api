import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api.resonse';
import { Observable } from 'rxjs';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {
  users:any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any)=>{
      this.users=res;
    });
    //this.users=this.userService.getUsers();
  }
  deleteUser(user_id: number) {
    this.userService.deleteUser(user_id)
      .subscribe({next:(data)=>{console.log(data);
        this.userService.getUsers().subscribe(data=>{this.users=data});},
        error:(error)=>console.error()});
        alert("User deleted successfully")
  }
  updateUser(user_id:number){
    this.router.navigate(['update',user_id])
  }

}
