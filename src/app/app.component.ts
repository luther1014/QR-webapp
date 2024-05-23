import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrAppContainerComponent } from './qr-app-container/qr-app-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,QrAppContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'qr-website';
}
