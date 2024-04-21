import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

export type ModalType = 'MxMedia' | 'Impress';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  openModal(modalType: ModalType) {
    if(document.getElementsByClassName("modal").length > 0) {
      return;
    }
    const modal = document.createElement('div');
    const child = document.createElement('div');
    modal.classList.add('modal')
    child.classList.add('child');
    child.classList.add('modal-keep-open');
    switch (modalType) {
      case "MxMedia":
        child.innerHTML = `
    <div class="modal-keep-open modal-inner-container">
    <div class="modal-text-unit">
        <div class="modal-keep-open modal-text">Created by MxMedia</div>
    </div>
    <div class="modal-text-unit">
        <div class="modal-subtext modal-keep-open">Mail me: <div class="link">marvin.mxmedia@gmail.com</div></div>
    </div>
    <div class="modal-keep-open modal-text-unit">
        <div class="modal-subtext modal-keep-open">My Discord Server: <div class="link"> https://discord.gg/mbq8AT5uMy</div> </div>
    </div>
    <div class="modal-text-unit">
        <div class="modal-subtext modal-keep-open">My Discord Account: <div class="link">https://discordapp.com/users/144957275008794625</div></div>
    </div>
    </div>
`;
        break;
      case "Impress":
        child.innerHTML = `
    <div class="modal-keep-open modal-inner-container">
    <div class="modal-text-unit">
         <div class="modal-keep-open modal-text">Impress</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor , consetetur sadipscing elitr,</div>
</div>
<div class="modal-text-unit">
         <div class="modal-keep-open modal-text">Impress2</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor , consetetur sadipscing elitr,</div>
</div>
<div class="modal-text-unit">
        <div class="modal-keep-open modal-text">Impress3</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor sit amet,</div>
        <div class="modal-keep-open modal-subtext">Lorem ipsum dolor , consetetur sadipscing elitr,</div>
</div>
        `
        break;
    }
    modal.appendChild(child);
    document.body.appendChild(modal);
    window.addEventListener('click', e => {
      // @ts-ignore
      let classes = e.target.classList;
      if (!classes.contains('modal-keep-open')) {
        document.body.removeChild(modal);
      }
    })
  }
}
