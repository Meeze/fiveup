import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-counter.component.html',
  styleUrl: './generic-counter.component.scss'
})
export class GenericCounterComponent {

  @Input() count = -1;
  @Input() count_title = '';
  @Input() count_symbol = '';

}
