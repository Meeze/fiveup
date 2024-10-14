import {ModalType} from "../component/standalone/footer/footer.component";

export class EnlargeElementOnClick {

  openGenericModal(elem: HTMLElement): void {
    if (document.getElementsByClassName("generic-modal").length >= 0) {
      return;
    }
    const modal = document.createElement('div');
    const child = document.createElement('div');
    modal.classList.add('generic-modal')
    child.classList.add('child');
    child.classList.add('modal-keep-open');
    child.innerHTML = `
    <div class="modal-keep-open modal-inner-container ">
    <div class="modal-text-unit">
        <div class="modal-keep-open modal-text">Created by MxMedia</div>
    </div>
`;
    child.innerHTML += elem.outerHTML
    child.innerHTML += '</div>)'

    document.querySelectorAll('.navbar').item(0).classList.add("hide-me");
    modal.appendChild(child);
    document.body.appendChild(modal);
    modal.scrollIntoView({
      behavior: 'auto',
    });
    modal.addEventListener('click', e => {
      // @ts-ignore
      let classes = e.target.classList;
      if (!classes.contains('modal-keep-open' && classes.contains("generic-modal"))) {
        document.body.removeChild(modal);
        document.querySelectorAll('.navbar').item(0).classList.remove("hide-me");
      }
    })
  }


}
