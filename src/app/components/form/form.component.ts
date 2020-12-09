import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  fechaFormControl: FormControl;
  minDate: Date;
  maxDate: Date;

  constructor(private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay + 1);
    this.maxDate = new Date(currentYear, currentMonth + 1, currentDay);
   }

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
      tratamiento_medico: [null, Validators.required]
    });

    this.sintomasFormGroup = this.formBuilder.group({
      tos: [null, Validators.required],
      dolor_garganta: [null, Validators.required],
      fiebre: [null, Validators.required],
      secrecion_nasal: [null, Validators.required],
      malestar_general: [null, Validators.required],
      disminucion_percepcion: [null, Validators.required],
      dificultad_respiratoria: [null, Validators.required],
      diarrea: [null, Validators.required]
    });

    this.contactoFormGroup = this.formBuilder.group({
      contacto_positivo: [null, Validators.required],
      contacto_sintomatico	: [null, Validators.required]
    });

    this.sectorFormGroup = this.formBuilder.group({
      sector: ['', Validators.required],
      area_durante_covid: ['', Validators.required],
      otra_area: ['', Validators.required]
    });

    this.pruebasFormGroup = this.formBuilder.group({
      prueba_con_muestra	: [null, Validators.required],
      prueba_sangre	: [null, Validators.required],
      aislamiento	: [null, Validators.required],
      incapacidad	: [null, Validators.required]
    });

    this.fechaFormControl = new FormControl('', [Validators.required]);
  }

  public sendForm(): void {
    console.log(this.antecedentesFormGroup.value, this.sintomasFormGroup.value, this.contactoFormGroup.value,
      this.sectorFormGroup.value, this.pruebasFormGroup.value, this.fechaFormControl.value);
  }

}
