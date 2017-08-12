import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'E&T Greenhouses';

    constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
            }
        });
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }


    submitEvent() {
        this.googleAnalyticsEventsService.emitEvent(
            'testCategory',
            'testAction',
            'testLabel',
            10
        );
    }

    onDeactivate() {
        document.body.scrollTop = 0;
    }
}
