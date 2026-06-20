import { Component, effect, input, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PeriodicElement } from 'lib';
import { Paginator } from 'paginator';

@Component({
  selector: 'lib-table',
  imports: [MatButtonModule, MatIconModule, MatSortModule, MatTableModule, Paginator],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  // Signals
  readonly data = input<PeriodicElement[]>([]);
  readonly filter = input<string>('');
  readonly paginator = signal<MatPaginator | null>(null);
  readonly sort = viewChild(MatSort);

  // Effects
  readonly syncDataEffect = effect(() => {
    this.dataSource.data = this.data();
  });

  readonly syncFilterEffect = effect(() => {
    this.dataSource.filter = this.filter().trim().toLowerCase();
  });

  readonly syncSortEffect = effect(() => {
    this.dataSource.sort = this.sort();
  });

  readonly syncPaginatorEffect = effect(() => {
    this.dataSource.paginator = this.paginator();
  });

  // Properties
  readonly dataSource = new MatTableDataSource<PeriodicElement>([]);
  readonly columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  readonly columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  // Methods
  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement): boolean {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement): void {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  onPaginatorReady(paginator: MatPaginator): void {
    this.paginator.set(paginator);
  }
}
