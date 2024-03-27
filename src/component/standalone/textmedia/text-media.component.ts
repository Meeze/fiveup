import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {ButtonType} from "../../ButtonInterface";

export type imgOrient = 'left'|'right';

@Component({
  selector: 'app-textmedia',
  templateUrl: './text-media.component.html',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  styleUrls: ['./text-media.component.scss']
})
export class TextMediaComponent {

  @Input() imgOrientation: imgOrient = 'right';
  @Input() lines: string[] = [];
  @Input() buttonText: string = "";
  @Input() buttonUrl: string = "";
  @Input() buttonType: ButtonType = 'primary';

  nav() {
    window.open('https://' + this.buttonUrl, "_blank");
  }
}
