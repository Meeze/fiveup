import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  imageObject: Array<object> = [
    {
      image: 'assets/feedback/feedback1.png',
      thumbImage: 'assets/feedback/feedback1.png',
      alt: 'test',
      title: 'Finishing the tutorial!',
      order: 1,
    },
    {
      image: '../../assets/feedback/feedback2.png',
      thumbImage: '../../assets/feedback/feedback2.png',
      title: 'Yet another immortal in the pool',
      alt: 'Image alt',
      order: 2,
    },
    {
      image: '../../assets/feedback/feedback3.png',
      thumbImage: '../../assets/feedback/feedback3.png',
      title: 'Dirty Tony Spammer (gj tho)',
      alt: 'Image alt',
      order: 3,
    }
  ];


  click(event: number) {
      // @ts-ignore
    document.querySelector('.navbar').classList.add("hide-me");
  }

  exit() {

  }
}
