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
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'action'];
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
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    firstname: 'Hydrogen',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 2,
    firstname: 'Helium',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 3,
    firstname: 'Lithium',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 4,
    firstname: 'Beryllium',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 5,
    firstname: 'Boron',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 6,
    firstname: 'Carbon',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 7,
    firstname: 'Nitrogen',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 8,
    firstname: 'Oxygen',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 9,
    firstname: 'Fluorine',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 10,
    firstname: 'Neon',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
  {
    id: 11,
    firstname: 'Sodium',
    lastname: 'Hydrogen',
    email: 'Hydrogen@yopmail.com',
    action: 'H',
  },
];
