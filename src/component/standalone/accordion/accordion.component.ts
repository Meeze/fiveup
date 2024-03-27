import {Component, ComponentDecorator, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() question?:string;
  @Input() answer?: string;
  @Input() id: number = -1;

  expandAccordionElement(id: number) {
    // @ts-ignore
    const list = document.getElementById(id).classList;
    const className: string = "show-me";
    if (list.contains(className)) {
      list.remove(className)
    } else {
      list.add(className)
    }
  }
}
