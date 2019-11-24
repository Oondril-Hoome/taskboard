import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Input() isVisible;
  @Input() title = 'default title';
  @Output() eventChangeIsVisible = new EventEmitter();

  isVisibleNewValue = this.isVisible;

  changeIsVisible(isVisible){
    this.isVisibleNewValue = isVisible;
    this.eventChangeIsVisible.emit(this.isVisibleNewValue);
  }

}
