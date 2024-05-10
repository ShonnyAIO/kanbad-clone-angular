import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-jira-board',
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, CdkDragPlaceholder, DragDropModule],
  templateUrl: './jira-board.component.html',
  styleUrl: './jira-board.component.scss'
})
export class JiraBoardComponent implements OnInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  process = ['A', 'B', 'C'];

  newItems: any;
  active: any;

  constructor() { }

  ngOnInit(): void {

  }

  addNewItem(){
    this.todo.push('New Item');
  }

  dropped(event: CdkDragDrop<string[]>) {
    console.log('MOVIMIENTO VERTICAL: ', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
