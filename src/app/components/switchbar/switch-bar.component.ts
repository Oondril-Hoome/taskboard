import {Component, Input} from '@angular/core';
import {SwitchOption} from '../../models/switchoption/switch-option.model';

@Component({
  selector: 'app-switch-bar-component',
  templateUrl: './switch-bar.component.html',
  styleUrls: ['./switch-bar.component.scss']
})
export class SwitchBarComponent {

  @Input() options: Array<SwitchOption>;

  select(index: number) {
    for (let i = 0; i < this.options.length; i ++) {
      if (i === index) {
        this.options[i].isSelected = true;
      } else{
        this.options[i].isSelected = false;
      }
    }
  }

}
