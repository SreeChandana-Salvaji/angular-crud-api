import { Component, OnInit , ViewChild} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api.resonse';
import { Observable , Subject} from 'rxjs';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})

export class ReadUserComponent implements OnInit {
  asc:boolean= false;
  users:any;
  search:string;
  dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
  isDtInitialized:boolean=false;
  user_id: number;
  baseUrl: string = 'https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';
  public temp: Object=false;
  constructor(private userService:UserService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any)=>{
      this.users=res;
    })
    this.http.get(this.baseUrl).subscribe({next:(data) => {
      this.users = data;
      this.temp = true;
      }});
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
  sort(){
    this.asc=!this.asc;
  }
}
