import {Component, ComponentDecorator, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() question?:string;
  @Input() answer?: string;
  @Input() id: number = -1;

  doStuff(id: number) {
    // @ts-ignore
    const list = document.getElementById(id).classList;
    if (list.contains("show-me")) {
      list.remove("show-me")
    } else {
      list.add("show-me")
    }
  }
}
