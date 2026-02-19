import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tenant } from './services/tenant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tenant = inject(Tenant);
  protected readonly title = signal('multi-web');
}
