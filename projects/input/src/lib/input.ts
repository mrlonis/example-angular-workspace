import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-input',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  // Signals
  readonly label: InputSignal<string> = input<string>('');
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly value: ModelSignal<string> = model<string>('');

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(inputElement.value);
  }
}
