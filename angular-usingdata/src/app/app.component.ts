import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserItemComponent,HelloWorldComponent], //importazione di User-Item
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-usingdata';
}
