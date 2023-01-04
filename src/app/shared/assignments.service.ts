import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[]=[
    {
      id:1,
      nom:"Devoir Angilar MrBuffa",
      dateDeRendu:new Date("2022-01-10"),
      rendu:false
    },
    {
      id:2,
      nom:"Devoir Grails Mr Galli",
      dateDeRendu:new Date("2022-12-10"),
      rendu:true
    },
    {
      id:3,
      nom:"Devoir IOS Mr Amosse",
      dateDeRendu:new Date("2022-01-10"),
      rendu:true
    }
  ]
  constructor(private loggingService: LoggingService) { }
  getAssignments():Observable<Assignment[]>{
    return of(this.assignments);
  }

  addAssignments(assignment:Assignment):Observable<string>{
    assignment.id=Math.floor(Math.random()*1000000000000000000);
    this.assignments.push(assignment);
    return of("bien");
  }

  updateAssignments(assignment:Assignment):Observable<string>{
   
    return of("bien");
  }
  deleteAssignments(assignment:Assignment):Observable<string>{
    this.assignments.splice(this.assignments.indexOf(assignment, 0), 1);
    this.loggingService.log("wiam","laqssir");
    return of("bien");
  }
  getAssignment(id:number):Observable<Assignment|undefined>{
    const a:Assignment|undefined=this.assignments.find(a=>a.id==id);
    console.log(this.assignments.find(a=>a.id==id));
    return of(a);
  }
}
