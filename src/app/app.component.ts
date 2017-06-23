import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'E&T Greenhouses';
    onDeactivate() {
        document.body.scrollTop = 0;
    }
}
