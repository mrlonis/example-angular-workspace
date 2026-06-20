import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'lib';
import { Table } from 'table';

@Component({
  selector: 'app-home',
  imports: [Table],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly data = ELEMENT_DATA;
}
