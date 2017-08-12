import {Component} from '@angular/core';

@Component({
    selector: 'et-header',
    templateUrl: './header.component.html',
    host: {
        'class': 'et-header'
    }
    // styleUrls: ['./_header.component.scss']
})


export class HeaderComponent {
    opened = false;

    clicked(sidenav) {
        sidenav.open();
        this.opened = !this.opened;
    }

    closeNav(sidenav) {
        sidenav.close();
        this.opened = !this.opened;
    }
}
