import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss'],
})
export class ElementDialogComponent implements OnInit {
  newPerson!: FormGroup;
  isOnEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isOnEdit = this.data ? true : false;
    this.newPerson = this.fb.group({
      position: [this.data?.position, Validators.required],
      name: [
        this.data?.name,
        {
          validators: Validators.minLength(3),
          updateOn: 'blur',
        },
      ],

      surname: [ this.data?.surname],

      number: [this.data?.number],
      city: [this.data?.city],
      birthday: [this.data?.birthday]
    });
  }

  onAdd() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  get name() {
    return this.newPerson.get('name');
  }

  get surname() {
    return this.newPerson.get('surname');
  }

  get number() {
    return this.newPerson.get('number');
  }

  get city() {
    return this.newPerson.get('city');
  }

  get birthday() {
    return this.newPerson.get('birthday');
  }
}
