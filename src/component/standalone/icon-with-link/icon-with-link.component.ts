import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-with-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-with-link.component.html',
  styleUrl: './icon-with-link.component.scss'
})
export class IconWithLinkComponent {
    @Input() src = ''
    @Input() link = ''
    @Input() title = ''


  constructor() {
  }

  navigate() {
    window.open(this.link, "_blank");
  }
}
