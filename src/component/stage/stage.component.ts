import {Component, Input, OnInit} from '@angular/core';
import {ButtonInterface} from "../ButtonInterface";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  image: string = "assets/stage.png"
  @Input() buttons:ButtonInterface[] = [];

  ngOnInit(): void {

  }

}
