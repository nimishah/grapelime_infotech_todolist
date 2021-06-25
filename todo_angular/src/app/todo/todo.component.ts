import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   list:any=[];

  newItem: string = "";

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getList().subscribe(
      (todoList:any) =>{
        
        this.list=todoList.list
 console.log(this.list);
 
       }
       )
       
 }
 add(data:string){
  this.taskService.addItem(data)
    .subscribe(
      (response:any) =>{         
        console.log(response)
        this.ngOnInit();
        this.newItem="";
      }
    )
  }

  delete(data:any){
    this.taskService.deleteItem(data._id)
      .subscribe(
        (response:any) =>{         
          console.log(response)
        this.ngOnInit();
        }
      )
    }
}
    
  
  //  pushItem(data:any){
  // 	 if (this.newItem != "") {
  // 		this.items.push(this.newItem);
	// 	  this.newItem = "";
  //  	}
  //  }
  
 
  // removeItem(i:any){
  // 	this.items.splice(i, 1);
  // }
  

