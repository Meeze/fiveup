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

  expandAccordionElement( evt: Event, id:number) {
    // @ts-ignore
    let cursorX = evt.clientX;
    // @ts-ignore
    let cursorY = evt.clientY;
    let elem = document.elementFromPoint(cursorX, cursorY)
    // @ts-ignore
    const list = document.getElementById(id).classList;
    const accordion = document.getElementsByClassName(id.toString()).item(0);
    if(elem?.className === 'arrow-icon') {

    } else {
      // @ts-ignore
      elem = elem.querySelector('.arrow-icon');
    }
    const className: string = "show-me";
    const background: string = "accordion-bg-expanded";
    if (list.contains(className)) {
      list.remove(className);
      accordion?.classList.remove(background);
      // @ts-ignore
      elem.classList.remove("rotate-icon-class")
    } else {
      list.add(className);
      accordion?.classList.add(background);
      // @ts-ignore
      elem.classList.add("rotate-icon-class");
    }
  }

  protected readonly event = event;
}
