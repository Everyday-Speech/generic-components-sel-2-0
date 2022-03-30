import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('widgetsContent') widgetsContent: ElementRef;

  progress: number;
  total: number;
  color: string;
  colorWhite = '#FFF';

  constructor(_el: ElementRef) {
    this.progress = 3;
    this.total = 10;
    this.color = '#880eee';
    this.widgetsContent = _el;
   }

  ngOnInit() {
    if (!this.progress) {
      this.progress = 0;
    }

    if (this.total === 0) {
      this.total = this.progress;
    } else if (!this.total) {
      this.total = 100;
    }

    if (this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.progress = (this.progress / this.total) * 100;
  }


  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

}
