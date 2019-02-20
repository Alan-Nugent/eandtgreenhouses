import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'et-header',
  templateUrl: './header.component.html',
  host: {
    'class': 'et-header'
  },
  encapsulation: ViewEncapsulation.None

  // styleUrls: ['./_header.component.scss']
})


export class HeaderComponent {
  opened = false;


  closeNav(sidenav) {
  }
}
