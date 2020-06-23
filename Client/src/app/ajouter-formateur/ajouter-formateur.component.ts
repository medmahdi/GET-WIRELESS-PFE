import { Component, OnInit , ViewChild, ElementRef, Renderer2} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css'],
  providers:[TaskService]
})
export class AjouterFormateurComponent implements OnInit {
  @ViewChild("ettiquette",{static: false}) div: ElementRef;
 Specialite:String[]=[];
 filePhoto: File = null;
 fileCv: File = null;
 textmot:string="";
 message_valide:boolean;
message_error:boolean;
  constructor(private renderer: Renderer2,private el :ElementRef,private taskService:TaskService,private router:Router) { }
  fileProgressImage(file:FileList) {
    this.filePhoto=file.item(0);
    var reader=new FileReader();
  reader.readAsDataURL(this.filePhoto);
  }
  fileProgressPdf(file:FileList) {
    this.fileCv=file.item(0);
    var reader=new FileReader();
  reader.readAsDataURL(this.fileCv);
  }

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


  ajouter_Specialite(text:string)
  {

    if(!this.Specialite.includes(text))
  {
    const p: HTMLSpanElement = this.renderer.createElement('span');
    const div: HTMLDivElement = this.renderer.createElement('div');
    p.innerHTML = text;
    this.renderer.addClass(p,"badge");
    this.renderer.addClass(p,"badge-success");
    this.renderer.addClass(div,"form-group");
    this.renderer.addClass(div,"col-2");

    //this.renderer.setAttribute(this.input,"value","");
    div.appendChild(p);
    this.renderer.appendChild(this.div.nativeElement, div);

    this.Specialite.push(text)
  }




  }
   cvname:String;
   phtotname:String;
onSubmit(form: NgForm) {

  if(this.Specialite.length==0)
  {
    alert("merci de mettre des specialité cle ");
  }
  else{

   let formData = new FormData();
   formData.append("uploads", this.fileCv, this.fileCv.name);
   let formData2 = new FormData();
   formData2.append("uploads", this.filePhoto, this.filePhoto.name);
   this.taskService.UplodeFile(formData).subscribe((response)=>{
    this.cvname=response["message"];
    this.taskService.UplodeFile(formData2).subscribe((response)=>{
      this.phtotname=  response["message"];


      if( this.phtotname.length>0 &&this.cvname.length>0)
      {

            var formateur={
              nom:form.value["nom_formateur"],
              prenom:form.value["prenom_Formateur"],
              email:form.value["email_Formateur"],
              numero_Tel:form.value["tel_Formateur"],
              numero_cin:form.value["cin_Formateur"],
              tarif_Par_H:form.value["Tarif_par_h"],
              photo:this.phtotname,
              cv:this.cvname,
              password:form.value["mot_de_passe"],
              specialite:this.Specialite
             }


            this.taskService.ajouterFormateur(formateur).subscribe((res)=>{

              if(res["msg"]=="Post request is working")
              {
                this.message_valide=true;
                this.message_error=false;
                form.reset();
                this.Specialite=[];

                let v= document.getElementById("ettiquette");
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

   });



    }



  }
}
