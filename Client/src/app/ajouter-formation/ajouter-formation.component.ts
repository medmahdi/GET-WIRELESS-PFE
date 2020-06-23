import { Component, OnInit , ElementRef, ViewChild, Renderer2} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css'],
  providers:[TaskService]
})
export class AjouterFormationComponent implements OnInit {
  @ViewChild("ett",{static: false}) div: ElementRef;
  mots_cle:String[]=[];
  textmot:string="";
  Cv:String="";
fileCv: File = null;
message_valide:boolean;
message_error:boolean;

  constructor(private renderer: Renderer2,private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
 alert("merci de connecter.");
 this.router.navigate(['/Admin']);
    }
    else if (localStorage.getItem('usertype')!="Admin")
    {

   alert("vous n'êtes pas un Admin.");
   this.router.navigate(['/Admin']);

    }
  }
  fileProgressPdf(file:FileList) {
    this.fileCv=file.item(0);
    var reader=new FileReader();
  reader.readAsDataURL(this.fileCv);
  }

ajouter_mot(text:string)
{
if(!this.mots_cle.includes(text))
{
  if(text.length!=0)
  {
  const a = this.renderer.createElement('a');
  a.innerHTML = text;
  this.renderer.setAttribute(a,"href","#");
  this.renderer.appendChild(this.div.nativeElement, a);
  this.mots_cle.push(text);
  }
  else
  {

  }
}
else
{

}

}
onSubmit(form: NgForm) {
  if(this.mots_cle.length==0)
  {
    alert("merci de mettre des mots cle ");
  }
  else{


   let formData = new FormData();
   formData.append("uploads", this.fileCv, this.fileCv.name);
this.taskService.UplodeFile(formData).subscribe((response)=>{
     if(response["message"]!="" || response["message"]!=null)
     {

      var formation={
        titre:form.value["Titre"],
        description:form.value["Description"],
        charge_Horaire:form.value["Charge_Horaire"],
        programme:response["message"],
        niveau_Difficulte:form.value["difficulte"],
        mots:this.mots_cle
       }


      this.taskService.ajouterFormation(formation).subscribe((res)=>{

        if(res["msg"]=="Post request is working")
        {
          this.message_valide=true;
          this.message_error=false;
          form.reset();
          this.mots_cle=[];

          let v= document.getElementById("ett");
          v.innerHTML="";
        }
        else
        {
          this.message_error=true;
          this.message_valide=false;
        }
    });
     }
});


/*
*/

  }
}
}
