import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.mode';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() options: RadioOption[];

  value: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(option: RadioOption): void {
    this.value = option.value;
  }
}
