import { Component } from '@angular/core';
import {ButtonInterface} from "../component/ButtonInterface";

export type SocialLinks = 'youtube.com/@5updota'|'patreon.com/5updota'|'twitch.tv/5updota'|'discord.gg/BCfaCNXFce'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'fiveup';

  stageButtons = [{label: 'YouTube', link: 'youtube.com/@5updota', type: 'primary'} as ButtonInterface,
    {label: 'Patreon', link: 'patreon.com/5updota', type: 'secondary'} as ButtonInterface,
    {label: 'Twitch', link: 'twitch.tv/5updota', type: 'primary'} as ButtonInterface,
    {label: 'Discord', link: 'discord.gg/BCfaCNXFce',type: 'secondary'} as ButtonInterface,
  ];

}
