import { Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SubHeaderComponent } from '../../../common/sub-header/sub-header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SubHeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pageName = '';
  breadCrumbs = [];
  buttonContent = {};
  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);

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
    });
  }
}
