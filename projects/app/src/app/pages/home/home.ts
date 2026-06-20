import { Component, signal, WritableSignal } from '@angular/core';
import { Input } from 'input';
import { ELEMENT_DATA, PeriodicElement } from 'lib';
import { Paginator } from 'paginator';
import { Table } from 'table';

@Component({
  selector: 'app-home',
  imports: [Input, Paginator, Table],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly data: PeriodicElement[] = ELEMENT_DATA;
  readonly filter: WritableSignal<string> = signal<string>('');
}
