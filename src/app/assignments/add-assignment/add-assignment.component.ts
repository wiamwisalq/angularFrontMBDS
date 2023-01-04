import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment=new EventEmitter<Assignment>();
  nomAssignment='';
  couleur="yellow";
  bouttonActif=false;
  assignementSelection?:Assignment;
  //dateRendu=new Date();
   dateRendu?:Date;
  onSubmit(event:any) {

    if((!this.nomAssignment)|| (!this.dateRendu) ){return;}
    console.log(this.nomAssignment+" "+ this.dateRendu);
    let assignment=new Assignment();
    assignment.nom=this.nomAssignment;
    assignment.dateDeRendu=this.dateRendu;
    assignment.rendu=false;
    // event.preventDefault();
    //this.assignments.push(assignment);
    this.nouvelAssignment.emit(assignment);
  }
}
