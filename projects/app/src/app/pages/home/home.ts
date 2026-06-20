import { Component, signal } from '@angular/core';
import { Input } from 'input';
import { ELEMENT_DATA } from 'lib';
import { Table } from 'table';

@Component({
  selector: 'app-home',
  imports: [Input, Table],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly data = ELEMENT_DATA;
  readonly filter = signal('');
}
