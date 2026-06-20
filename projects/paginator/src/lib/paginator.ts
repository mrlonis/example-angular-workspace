import {
  AfterViewInit,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
  viewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'lib-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator implements AfterViewInit {
  readonly pageSize: InputSignal<number> = input<number>(50);
  readonly pageSizeOptions: InputSignal<number[]> = input<number[]>([5, 10, 25, 50, 100]);
  readonly ariaLabel: InputSignal<string> = input<string>('Select page');

  readonly paginatorReady: OutputEmitterRef<MatPaginator> = output<MatPaginator>();
  readonly paginator: Signal<MatPaginator> = viewChild.required(MatPaginator);

  ngAfterViewInit(): void {
    this.paginatorReady.emit(this.paginator());
  }
}
