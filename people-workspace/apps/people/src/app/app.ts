import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Header} from '@people-workspace/header'
import {Footer} from '@people-workspace/footer'
import {Content} from '@people-workspace/content'
@Component({
  imports: [RouterModule, Header, Content, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'people';
}
