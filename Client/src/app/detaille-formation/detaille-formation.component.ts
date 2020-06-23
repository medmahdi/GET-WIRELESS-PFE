import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Formation } from 'src/models/Formation.model';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-detaille-formation',
  templateUrl: './detaille-formation.component.html',
  styleUrls: ['./detaille-formation.component.css'],
  providers:[TaskService]
})
export class DetailleFormationComponent implements OnInit {
  message_valide:boolean;
  message_error:boolean;
  message_error1:boolean;
  message_error2:boolean;
  constructor(private route: ActivatedRoute,private taskService:TaskService,private router:Router) { }
       id:string="";
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getDetaileValue();
  }

  getDetaileValue()
  {
    this.taskService.getDetaileFormation(this.id).subscribe((res)=>{
      this.taskService.selectedFormation=res as Formation;
    });
  }

  inscription(id:string)
  {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de vous connecter.");
 this.router.navigate(['/Login']);
    }
    else if (localStorage.getItem('usertype')!="Candidat")
    {

   alert("vous n'êtes pas un candidat.");
   this.router.navigate(['/Login']);

    }

    else
    {
      var ListSession={
        id_Session_Formation : id,
        date_Inscription: formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
         }

         this.taskService.countParSession(id).subscribe((res)=>
         {
             if(res<16)
             {
              this.taskService.getIdToken(localStorage.getItem("token")).subscribe((res)=>
              {
                  this.taskService.verification(res.toString(),id).subscribe((rest)=>{
                     if(rest!=true)
                     {

                      this.taskService.ajouterSessionCandidat(ListSession,res.toString()).subscribe((res)=>{
                        if(res["msg"]=="put request is working")
                        {
                         this.message_valide=true;
                        }
                        else
                        {
                         this.message_error=true;  this.message_valide=false;
                        }
                        })
                      }
                      else
                      {
                        this.message_error1=true;
                        this.message_valide=false;
                      }
                     });

                  });



             }
             else
             {
              this.message_error2=true;
              this.message_valide=false;
             }
         });



    }

  }
  downlode(x:string)
  {
    window.open('http://localhost:3000/download/'+x.substring(x.indexOf("\\")+1,x.length), "_blank");


  }
}
