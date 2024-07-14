import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../../common/sub-header/sub-header.component';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    SubHeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pageName = '';
  breadCrumbs = [];
  buttonContent = {};
  isBthShow: boolean = false;
  posts: any = [];
  value = '';
  readonly bestBoys: string[] = [
    'Samo',
    'Akita',
    'Alaskan',
    'Siberian Husky',
    'boxer',
  ];

  constructor(private titleService: Title, private route: ActivatedRoute) {}
  ngOnInit() {
    this.settingSubHeader();
    this.posts = [
      {
        firstName: 'Shiba Inu',
        userName: 'Dog Breed',
        userImg: '',
        postImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        date: '2015-03-25',
        title: 'About Shiba Inu',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      },
      {
        firstName: 'Shiba Inu',
        userName: 'Dog Breed',
        userImg: '',
        postImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        date: '2022-03-25',
        title: 'Why Shiba Inu',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      },
    ];
  }

  settingSubHeader() {
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
}
