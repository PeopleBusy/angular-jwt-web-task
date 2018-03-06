import { Component, OnInit } from '@angular/core';

import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks;

  constructor(private tasksService : TasksService, private router :Router) { }

  ngOnInit() {

    this.tasksService.getTasks()
      .subscribe(response => {
          this.tasks = response;
      },
      error => {
        console.log(error);
          this.router.navigateByUrl("/login");
      });

  }

}
