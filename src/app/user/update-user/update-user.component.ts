import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ApiResponse } from '../model/api.resonse';
import { User } from '../model/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  submitted=false;
  user_id:number;
  user:User;
  apiResponse:ApiResponse;
  constructor(private router:Router,private userService:UserService,
    private route:ActivatedRoute) { } 

  ngOnInit(){
    this.user=new User();

    this.user_id=this.route.snapshot.params['user_id'];
    this.userService.getUserById(this.user_id).subscribe(
      data=>{console.log(data)
      this.user=data;
      console.log(data);
      },
      error=>console.log(error));
  }
  onSubmit(){
    this.userService.updateUser(this.user_id,this.user).subscribe(
      data=>console.log(data),error=>console.error());
      this.user=new User();
      this.router.navigate(['/users']);
      console.log(this.user);
      alert("User modified succesfully!")
  }
  list(){
    this.router.navigate(['users']);
  }
}
