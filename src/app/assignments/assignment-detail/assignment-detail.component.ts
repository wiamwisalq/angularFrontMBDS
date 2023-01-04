import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Output() supprimerAssignment=new EventEmitter<Assignment>();
  @Input() assignementTrensmis?:Assignment;



  onAddAssignmentBtnClick(event:Assignment){
    this.supprimerAssignment.emit(event);
  }
}
