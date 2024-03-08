import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button2',
  standalone: true,
  imports: [],
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.scss'
})
export class Button2Component {
  @Input() buttonName: string = '';
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit(this.buttonName);
  }
}
