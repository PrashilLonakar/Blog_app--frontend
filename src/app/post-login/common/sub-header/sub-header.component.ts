import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'sub-header',
  standalone: true,
  imports: [RouterLink, CommonModule, MatButtonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  @Input() title = '';
  @Input() breadCrumbsArr: any = [];
  @Input() btn: any = [];
  @Input() isBtnShow: boolean = false;
  @Input() classname: string = '';
}
