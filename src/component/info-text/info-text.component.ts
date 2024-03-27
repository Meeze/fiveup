import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextMediaComponent} from "../standalone/textmedia/text-media.component";

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrl: './info-text.component.scss'
})
export class InfoTextComponent {

   textMediaRight: string[] = ['Come and Check out my youtube content', 'It is very good, high quality and i post weekly and stuff', 'Thats a free way to promote and support my growth']
   textMediaLeft: string[] = ['Get profesional coaching on patreon or just support my content and watch', 'Im a high ranked immortal player and have coached and played profesionally', 'Many of my clients reach immortal or their respective goals quickly']

}
