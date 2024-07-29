import {
  Component,
  Input,
  OnInit,
  signal,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SubHeaderComponent } from '../../../common/sub-header/sub-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    SubHeaderComponent,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pageName = '';
  breadCrumbs = [];
  buttonContent = {};
  isBthShow: boolean = false;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const title = data['title'];
      if (title) {
        this.pageName = title;
        this.titleService.setTitle(title);
      }
      if (data['breadcrumbs']) {
        this.breadCrumbs = data['breadcrumbs'];
      }
      if (data['btnData']) {
        this.buttonContent = data['btnData'];
      }

      if (data['isBtnData']) {
        this.isBthShow = data['isBtnData'];
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: 'H' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: 'H' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: 'H' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: 'H' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: 'H' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: 'H' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: 'H' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: 'H' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: 'H' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', action: 'H' },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
    action: 'H',
  },
  {
    position: 13,
    name: 'Aluminum',
    weight: 26.9815,
    symbol: 'Al',
    action: 'H',
  },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', action: 'H' },
  {
    position: 15,
    name: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
    action: 'H',
  },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', action: 'H' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', action: 'H' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', action: 'H' },
  {
    position: 19,
    name: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
    action: 'H',
  },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', action: 'H' },
];
