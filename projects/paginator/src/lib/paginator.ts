import { AfterViewInit, Component, input, output, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'lib-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator implements AfterViewInit {
  readonly pageSize = input<number>(50);
  readonly pageSizeOptions = input<number[]>([5, 10, 25, 50, 100]);
  readonly ariaLabel = input<string>('Select page');

  readonly paginatorReady = output<MatPaginator>();
  readonly paginator = viewChild.required(MatPaginator);

  ngAfterViewInit(): void {
    this.paginatorReady.emit(this.paginator());
  }
}
