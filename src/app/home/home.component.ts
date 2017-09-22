import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MdDialog, MdDialogRef} from '@angular/material';
import {VirtualTourComponent} from '../virtual-tour/virtual-tour.component';


@Component({
    selector: 'et-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {



    constructor(public dialog: MdDialog,
                private titleService: Title) {
    }

    openDialog() {
        console.log('here');
        const dialogRef = this.dialog.open(VirtualTourComponent);
    }


    ngOnInit() {
    }
}

