import {
  Component,
  Input,
  OnInit,
  ContentChild,
  AfterContentInit,
} from "@angular/core";
import { FormControlName, NgModel } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() {}

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error(
        "Esse componente preisa ser usado com uma diretiva NgModel ou FormControlName"
      );
    }
  }

  ngOnInit() {}

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
