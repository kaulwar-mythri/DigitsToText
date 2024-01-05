import { Component } from '@angular/core';
import { ConvertdigittotextPipe } from './convertdigittotext.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitsToText';
  textValue!: string;
  inputNumber!: number;

  constructor(private numberToTextPipe: ConvertdigittotextPipe) {}

  convertDigitToText() {
     if(this.inputNumber !== undefined && this.inputNumber !== null) {
      this.textValue  = this.numberToTextPipe.transform(this.inputNumber);
    } else {
      this.textValue = "Please enter a valid number";
    }
  }
}
