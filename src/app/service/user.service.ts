import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../user/model/api.resonse';
import { User } from '../user/model/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';

  

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(user_id: number): Observable<any> {
    return this.http.get(this.baseUrl + user_id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user_id: number, user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.user_id, user);
  }

  deleteUser(user_id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + user_id);
  }
}