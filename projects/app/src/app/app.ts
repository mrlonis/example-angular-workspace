import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lib } from 'lib';

@Component({
  selector: 'app-root',
  imports: [Lib, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app');
}
