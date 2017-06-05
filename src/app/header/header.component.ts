import { Component } from '@angular/core';

@Component({
  selector: 'et-header',
  templateUrl: './header.component.html',
  host:{
      'class': 'et-header'
  }
 // styleUrls: ['./_header.component.scss']
})
export class HeaderComponent {
  title = 'Contact Us title';
}
