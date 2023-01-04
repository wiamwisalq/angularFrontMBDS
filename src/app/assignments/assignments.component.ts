import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{
 
  titre = "Application de gestion";
  nomAssignment='';
  couleur="yellow";
  bouttonActif=false;
  formVisible = false;
  assignementSelection?:Assignment;
  //dateRendu=new Date();
  dateRendu?:Date;
  assignments:Assignment[]=[
    {
      nom:"Devoir Angilar MrBuffa",
      dateDeRendu:new Date("2022-01-10"),
      rendu:false
    },
    {
      nom:"Devoir Grails Mr Galli",
      dateDeRendu:new Date("2022-12-10"),
      rendu:true
    },
    {
      nom:"Devoir IOS Mr Amosse",
      dateDeRendu:new Date("2022-01-10"),
      rendu:true
    }
  ]
  ngOnInit(){
    console.log("Apre..");
    setTimeout(()=>{
     console.log("hello");
     this.bouttonActif=true;
    },3000);
   }
  // getColor(a:any){
  //   return 
  // }

  onSubmit(event:any) {

    if((!this.nomAssignment)|| (!this.dateRendu) ){return;}
    console.log(this.nomAssignment+" "+ this.dateRendu);
    let assignment=new Assignment();
    assignment.nom=this.nomAssignment;
    assignment.dateDeRendu=this.dateRendu;
    assignment.rendu=false;
    // event.preventDefault();
    this.assignments.push(assignment);
  }
  
  assignmentclicker(assignment:Assignment){
    this.assignementSelection=assignment;
    console.log("hello "+assignment.nom);
   
  }

  onAddAssignmentBtnClick(){
    this.formVisible = true;
  }

  onNouvelAssignment(event:Assignment){
    this.assignments.push(event);
    this.formVisible=false;
  }
  onSupprimerAssignment(event:Assignment){
    console.log(event);
    this.assignments.splice(this.assignments.indexOf(event,0),1)
  }
 
}
