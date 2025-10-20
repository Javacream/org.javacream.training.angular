import { Component, signal } from '@angular/core';
import { Header } from './people/header/header';
import { Footer } from './people/footer/footer';
import { Content } from './people/content/content';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('training');
}
