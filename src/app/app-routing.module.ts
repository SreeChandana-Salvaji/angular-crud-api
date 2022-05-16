import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ReadUserComponent } from './user/read-user/read-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'add',component:CreateUserComponent},
  {path:'users',component:ReadUserComponent},
  {path:'update/:user_id',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
