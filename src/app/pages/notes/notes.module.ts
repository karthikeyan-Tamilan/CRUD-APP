import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, NotesRoutingModule, SharedModule],
})
export class NotesModule {}
