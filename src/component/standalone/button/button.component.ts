import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonType} from "../../ButtonInterface";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnLabel = '';
  @Input() btnLink = '';
  @Input() btnType: ButtonType = 'default';

  onClick() {
    window.open('https://' + this.btnLink, "_blank");
  }
}
