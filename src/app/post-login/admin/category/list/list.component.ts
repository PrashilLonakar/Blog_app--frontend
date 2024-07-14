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
  displayedColumns: string[] = ['title', 'description', 'action'];
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
  title: string;
  description: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, title: 'Hydrogen', description: 'H', action: 'H' },
  { id: 2, title: 'Helium', description: 'He', action: 'H' },
  { id: 3, title: 'Lithium', description: 'Li', action: 'H' },
  { id: 4, title: 'Beryllium', description: 'Be', action: 'H' },
  { id: 5, title: 'Boron', description: 'B', action: 'H' },
  { id: 6, title: 'Carbon', description: 'C', action: 'H' },
  { id: 7, title: 'Nitrogen', description: 'N', action: 'H' },
  { id: 8, title: 'Oxygen', description: 'O', action: 'H' },
  { id: 9, title: 'Fluorine', description: 'F', action: 'H' },
  { id: 10, title: 'Neon', description: 'Ne', action: 'H' },
];
