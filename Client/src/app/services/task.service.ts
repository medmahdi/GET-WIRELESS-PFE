import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Formation } from 'src/models/Formation.model';
import { Formateur } from 'src/models/Formateur.model';
import { Session_Formation } from 'src/models/Session_Formation.model';
import { Candidat } from 'src/models/Candidat.model';
import { Session_Candidat } from 'src/models/Session_Candidat.model'

interface ajouterCandidatResponse {
  success: boolean 
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
selectedFormation:Formation;
selectedFormateur:Formateur;
session:Session_Formation;
candidat:Candidat;
formations:Formation[];
formateurs:Formateur[];
candidats:Candidat[];
sessions:Session_Formation[];
Candidat_Session:Session_Candidat;
Candidat_Sessions:Session_Candidat[];
  constructor(private http:HttpClient) { 
  }
  
countParSession(id:string)
{
  return this.http.get("http://localhost:3000/Candidat/Count/"+id);
}
verification(id:string,id2:string)
{
  return this.http.get("http://localhost:3000/Candidat/Verifiaction/"+id+"/"+id2);
}


  authentification(candidat:Candidat){
    return this.http.post("http://localhost:3000/Candidat/authentification",candidat);
  }
  getIdToken(id:string){
    return this.http.get("http://localhost:3000/Candidat/username/"+id);
  }
  authentificationF(candidat:Candidat){
    return this.http.post("http://localhost:3000/Formateur/authentification",candidat);
  }
  getIdTokenF(id:string){
    return this.http.get("http://localhost:3000/Formateur/username/"+id);
  }
  authentificationAdmin(candidat:Candidat){
    return this.http.post("http://localhost:3000/Admin/authentification",candidat);
  }
  getIdTokenAdmin(id:string){
    return this.http.get("http://localhost:3000/Admin/username/"+id);
  }
getAllFormations()
{
  return this.http.get("http://localhost:3000/Formation/read");
}

getAllFormateurs(){
  return this.http.get("http://localhost:3000/Formateur/read");
}
getAllCandidat(){
  return this.http.get("http://localhost:3000/Candidat/read");
}

getDetaileFormation(id:string){
  return this.http.get("http://localhost:3000/Formation/read/"+id);
}
searchFormation(id:string){
  return this.http.get("http://localhost:3000/Formation/searchByMotCle/"+id);
}
ListeDesFormationCandidat(id:string){
  return this.http.get("http://localhost:3000/Candidat/ListeDesSessionParCandidat/"+id);
}
ListeDesFormationFormateur(id:string){
  return this.http.get("http://localhost:3000/Formation/ListeDesFormationParFormateur/"+id);
}
ListeDesFormationParSession(id:string){
  return this.http.get("http://localhost:3000/Formation/ListeDesFormationParSession/"+id);
}
ajouterFormation(selectedFormation:Formation){
  return this.http.post("http://localhost:3000/Formation/create",selectedFormation);
}

UplodeFile(file:FormData){
  return this.http.post("http://localhost:3000/api/upload",file);
}

downloadFile(file:string){
  return this.http.get("http://localhost:3000/download/"+file);
}

ajouterFormateur(selectedFormateur:Formateur){
  return this.http.post("http://localhost:3000/Formateur/create",selectedFormateur);
}

ajouterSessionFormation(selectedFormateur:Session_Formation,id:string){
  return this.http.put("http://localhost:3000/Formation/Creation_Session_Formation/"+id,selectedFormateur);
}
ajouterCandidat(candidat){
  return this.http.post<ajouterCandidatResponse>('api/register',{
    candidat

  });
}
ajouterSessionCandidat(Session_Candidat:Session_Candidat,id:string){
  return this.http.put("http://localhost:3000/Candidat/Inscription_Candidat_In_Session_Formation/"+id,Session_Candidat);
}
}
