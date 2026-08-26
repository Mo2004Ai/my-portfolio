import { Component, signal } from '@angular/core';
import { WelcomComponent } from '../pages/welcom/welcom';
import { AbuteComponent } from '../pages/abute/abute';
import { SkilsComponent } from '../pages/skils/skils';
import { NavbarComponent } from './navbar/navbar';
import { Brojactes } from '../pages/brojactes/brojactes';
import { Thances } from '../pages/thances/thances';
import { Education } from '../pages/education/education';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,WelcomComponent,AbuteComponent,SkilsComponent,Education,Brojactes,Thances],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My_prtfolio');
}