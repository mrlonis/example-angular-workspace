import { Component, computed, input, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PeriodicElement } from 'lib';

@Component({
  selector: 'lib-table',
  imports: [MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  // Signals
  readonly data = input<PeriodicElement[]>([]);
  readonly dataSource: Signal<MatTableDataSource<PeriodicElement>> = computed(
    () => new MatTableDataSource<PeriodicElement>(this.data()),
  );

  // Properties
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
}
