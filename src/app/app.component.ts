import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {Component, ViewEncapsulation} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

// Declare ga function as ambient
declare var ga: Function;

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  // title = 'E&T Greenhouses';

  constructor(public router: Router,
              titleService: Title,
              activatedRoute: ActivatedRoute,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }
}
