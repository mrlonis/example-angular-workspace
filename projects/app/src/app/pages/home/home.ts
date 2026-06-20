import { Component, signal, WritableSignal } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  readonly paginator: WritableSignal<MatPaginator | undefined> = signal<MatPaginator | undefined>(
    undefined,
  );

  onPaginatorReady(paginator: MatPaginator): void {
    this.paginator.set(paginator);
  }
}
