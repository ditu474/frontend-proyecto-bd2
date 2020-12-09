import { Component, Input, OnInit } from '@angular/core';
import { NgControlStatus, FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-boolean-radio-group',
  templateUrl: './boolean-radio-group.component.html',
  styleUrls: ['./boolean-radio-group.component.css']
})
export class BooleanRadioGroupComponent implements OnInit {

  @Input() label: string;
  @Input() controlName: NgControlStatus;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

}
