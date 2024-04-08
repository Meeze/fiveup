import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextMediaComponent} from "../standalone/textmedia/text-media.component";

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrl: './info-text.component.scss'
})
export class InfoTextComponent {

   textMediaRight: string[] = ['Check out my youtube channel for tons of educational content', 'I post every week mostly sunday or the day after', 'Thats a free way for you to promote and support my growth']
   textMediaLeft: string[] = ['Receive professional coaching on Patreon or support my content and watch', 'I\'m a high-ranking player with professional coaching and playing experience', 'Many clients quickly achieve Immortal or their respective goals']


}
