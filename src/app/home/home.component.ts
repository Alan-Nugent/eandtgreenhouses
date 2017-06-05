import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./_home.component.scss']
})
export class HomeComponent implements OnInit {

    public constructor(private titleService: Title) {}
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    ngOnInit() {
        this.setTitle('E&T Greenhouses | home page');
    }

}