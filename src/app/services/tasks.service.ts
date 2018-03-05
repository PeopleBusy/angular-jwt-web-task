import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TasksService {

  private host : string = "http://localhost:8080";

  private jwt = null;

  constructor(private http : HttpClient) { }

  loadToken(){
      this.jwt = localStorage.getItem('token');
  }

  getTasks(){
    if(this.jwt == null) this.loadToken();
    return this.http.get(this.host + "/api/tasks", {headers : new HttpHeaders({'authorization' : this.jwt})});
  }

}
