import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  familyFormGroup: FormGroup;
  antecedentesFormGroup: FormGroup;
  sintomasFormGroup: FormGroup;
  contactoFormGroup: FormGroup;
  sectorFormGroup: FormGroup;
  pruebasFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForms();
  }


  private buildForms(): void {
    this.antecedentesFormGroup = this.formBuilder.group({
      hipertension: [null, Validators.required],
      diabetes: [null, Validators.required],
      enfermedad_pulmonar: [null, Validators.required],
      enfermedad_renal: [null, Validators.required],
      enfermedad_autoinmune: [null, Validators.required],
      malnutricion: [null, Validators.required],
      tabaquismo: [null, Validators.required],
      embarazo: [null, Validators.required],
      convive_mayores: [null, Validators.required],
      tratamiento_medico: [null, Validators.required],
    });
  }

  public test(formGroup: FormGroup): void {
    console.log(formGroup.value);
  }

}
