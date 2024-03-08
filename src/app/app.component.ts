import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { Button2Component } from "./button2/button2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ButtonComponent, Button2Component]
})
export class AppComponent {
  title = 'atelier-inputOutput';
  message: string = '';

  onButtonClick(buttonName: string): void {
    console.log(buttonName + ' a été cliqué');
    this.message = buttonName + ' a été cliqué';
  }
}
