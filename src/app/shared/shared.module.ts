import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesListComponent, AddNoteComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    NotesListComponent,
    AddNoteComponent,
    NavbarComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
