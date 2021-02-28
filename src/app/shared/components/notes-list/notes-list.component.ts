import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  @Input() notesList: [];
  @Output() removeNotesEvent = new EventEmitter<object>();
  @Output() updateNotesEvent = new EventEmitter<object>();

  constructor() {}

  editNote(note) {
    this.updateNotesEvent.emit(note);
  }

  removeNote(note) {
    this.removeNotesEvent.emit(note);
  }
  ngOnInit(): void {}
}
