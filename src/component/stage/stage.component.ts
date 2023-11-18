import { Component } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent {

  image: string = "assets/stage_bg_1.png"


  public getRandomImage(count: number): string {
    const a = Math.floor(Math.random() * count);
    return `assets/stage_bg_${a}.png`
  }

}
