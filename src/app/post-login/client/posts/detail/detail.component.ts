import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../../common/sub-header/sub-header.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown as faThumbsDownSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown as faThumbsDownRegular } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,

  imports: [
    SubHeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  pageName = '';
  breadCrumbs = [];
  buttonContent = {};
  isBthShow: boolean = false;
  post: any = {};
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    library: FaIconLibrary
  ) {
    library.addIcons(
      faThumbsUpSolid,
      faThumbsUpRegular,
      faThumbsDownSolid,
      faThumbsDownRegular
    );
  }

  ngOnInit() {
    this.settingSubHeader();
    this.post = {
      id: 3,
      firstName: 'Shiba Inu',
      userName: 'Dog Breed',
      userImg: '',
      postImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      date: '2022-03-25',
      title: 'Why Shiba Inu',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
        breeds of dog from Japan. A small, agile dog that copes very well with
        mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      isLiked: false,
      likeCount: 1,
      isUnLiked: false,
      unlikeCount: 0,
    };
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

  onLike(post: any) {
    if (!post.isLiked) {
      post.isLiked = true;
      post.likeCount += 1;
      if (post.isUnLiked) {
        post.isUnLiked = false;
        post.unlikeCount -= 1;
      }
    } else {
      post.isLiked = false;
      post.likeCount -= 1;
    }
  }

  onUnlike(post: any) {
    if (!post.isUnLiked) {
      post.isUnLiked = true;
      post.unlikeCount += 1;
      if (post.isLiked) {
        post.isLiked = false;
        post.likeCount -= 1;
      }
    } else {
      post.isUnLiked = false;
      post.unlikeCount -= 1;
    }
  }
}
