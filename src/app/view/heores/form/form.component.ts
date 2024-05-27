import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hero = {
    id: "1",
    name: "Edgar"
  }
  formGroup!: FormGroup;

  constructor(private formB: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      phone: ["", [Validators.required, Validators.maxLength(10)]]
    });
  }

  submit() {
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
