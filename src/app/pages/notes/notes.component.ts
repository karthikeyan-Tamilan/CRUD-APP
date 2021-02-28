import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notesList = [];
  editNoteDetails = {};

  constructor() {}

  addNewNote(e) {
    this.notesList.unshift(e);
  }

  editNote(note) {
    this.editNoteDetails = note;
  }

  updateNote(note) {
    const index = this.notesList.findIndex((item) => item.id == note.id);
    this.notesList[index] = note;
  }

  removeNote(e) {
    const index = this.notesList.findIndex((item) => item == e);
    this.notesList.splice(index, 1);
  }

  ngOnInit(): void {}
}
