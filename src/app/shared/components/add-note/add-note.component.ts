import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit, OnChanges {
  @Output() newNotesEvent = new EventEmitter<object>();
  @Output() updateNotesEvent = new EventEmitter<object>();
  @Input() editNoteDetails: any;
  isUpdate: boolean;
  initialized: boolean;

  noteForm: FormGroup;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.initialized) {
      this.noteForm.patchValue({
        title: this.editNoteDetails.title,
        desc: this.editNoteDetails.desc,
      });
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });
    this.initialized = true;
  }

  emitOnSubmit(form: FormGroup) {
    if (this.isUpdate) {
      this.emitupdateNoteEvent(form);
    } else {
      this.emitAddNoteEvent(form);
    }
  }

  emitAddNoteEvent(form) {
    let guid: any = Guid.create(); // create guid at clientside
    const notes = {
      title: form.value.title,
      desc: form.value.desc,
      id: guid.value,
    };
    this.newNotesEvent.emit(notes);
    form.reset();
  }

  emitupdateNoteEvent(form) {
    const notes = {
      title: form.value.title,
      desc: form.value.desc,
      id: this.editNoteDetails.id,
    };
    this.updateNotesEvent.emit(notes);
    form.reset();
    this.isUpdate = !this.isUpdate;
  }
}
