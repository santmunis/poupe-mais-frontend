import { Component, Input } from '@angular/core';
import { isNil } from 'lodash';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() currentProgress: number;
  @Input() height?: number = 22;
  @Input() roundedBorder?: boolean = false;
  @Input() color?: string;
  @Input() fillingColor?: string = '#E8E8E8';


}
