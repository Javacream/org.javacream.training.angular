import { Component } from '@angular/core';
import { demoFunction } from './demo';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { HeaderComponent } from './people/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:any = demoFunction()
}
