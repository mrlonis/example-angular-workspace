import { Component, signal, WritableSignal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Input } from 'input';
import { ELEMENT_DATA, PeriodicElement } from 'lib';
import { Paginator } from 'paginator';
import { Table } from 'table';

@Component({
  selector: 'app-home',
  imports: [Input, MatExpansionModule, Paginator, Table],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Signals
  readonly filter: WritableSignal<string> = signal<string>('');
  readonly panelOpenState = signal(false);

  // Properties
  readonly data: PeriodicElement[] = ELEMENT_DATA;
}
