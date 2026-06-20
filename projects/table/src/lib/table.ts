import { AfterViewInit, Component, computed, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Input } from 'input';
import { PeriodicElement } from 'lib';

@Component({
  selector: 'lib-table',
  imports: [
    Input,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements AfterViewInit {
  // Signals
  readonly data = input<PeriodicElement[]>([]);
  readonly dataSource = computed(() => {
    const dataSource = new MatTableDataSource<PeriodicElement>(this.data());
    if (this.paginator) {
      dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      dataSource.sort = this.sort;
    }
    return dataSource;
  });

  // View Children
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  // Properties
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  // Lifecycle Hooks
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource().paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource().sort = this.sort;
    }
  }

  // Methods
  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  applyFilter(event: string) {
    this.dataSource().filter = event.trim().toLowerCase();
    this.dataSource().paginator?.firstPage();
  }
}
