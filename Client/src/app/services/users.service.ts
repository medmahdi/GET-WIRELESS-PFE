import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  BaseURI = environment.apiUrl+"user";

  getAll(){
    return this.http.get(this.BaseURI+'/getAllDto')
  }

  getById(id : string){
    return this.http.get(this.BaseURI+'/'+id)
  }

  checkExists(id : string){
    return this.http.get(this.BaseURI+'/check/'+id)
  }

  createNew(body){
    return this.http.post(this.BaseURI+'/create',body)
  }

  editById(id : string , body){
    return this.http.put(this.BaseURI+'/update/'+id,body)
  }

  activateUser(id : string){
    return this.http.put(this.BaseURI+'/activate/'+id,null)
  }

  deactivateUser(id : string){
    return this.http.put(this.BaseURI+'/deactivate/'+id,null)
  }

  deleteById(id){
    return this.http.delete(this.BaseURI+'/delete/'+id)
  }
}
