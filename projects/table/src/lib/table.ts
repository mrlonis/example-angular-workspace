import { Component, computed, input, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PeriodicElement } from 'lib';

@Component({
  selector: 'lib-table',
  imports: [MatButtonModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  // Signals
  readonly data = input<PeriodicElement[]>([]);
  readonly filter = input<string>('');
  readonly paginator = viewChild(MatPaginator);
  readonly sort = viewChild(MatSort);
  readonly dataSource = computed(() => {
    const dataSource = new MatTableDataSource<PeriodicElement>(this.data());
    dataSource.paginator = this.paginator();
    dataSource.sort = this.sort();
    dataSource.filter = this.filter().trim().toLowerCase();
    return dataSource;
  });

  // Properties
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  // Methods
  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
}
