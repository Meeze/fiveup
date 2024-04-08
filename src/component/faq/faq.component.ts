import {Component} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  bgClass = "accordion-bg-expanded";
  showMeClass = "show-me";


  public openAll() {
    let text = document.querySelectorAll('.accordion-text');
    if (!text) {
      return
    }
    text.forEach((value) => {
      if (!value.classList.contains('show-me')) {
        value.classList.add('show-me')
      }
    })
  }

  public closeAll() {
    let text = document.querySelectorAll('.accordion-text');
    if (!text) {
      return
    }
    text.forEach((value) => {
      if (value.classList.contains('show-me')) {
        value.classList.remove('show-me')
      }
    })
  }

}
