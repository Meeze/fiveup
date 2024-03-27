import {Component} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  Hi = "hi";

  public openAll() {
    let test = document.querySelectorAll('.accordion-text');
    if (!test) {
      return
    }
    test.forEach((value) => {
      if (!value.classList.contains('show-me')) {
        value.classList.add('show-me')
      }
    })
  }

  public closeAll() {
    let test = document.querySelectorAll('.accordion-text');
    if (!test) {
      return
    }
    test.forEach((value) => {
      if (value.classList.contains('show-me')) {
        value.classList.remove('show-me')
      }
    })
  }

}
