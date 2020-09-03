import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-meme-dashboard',
  templateUrl: './meme-dashboard.component.html',
  styleUrls: ['./meme-dashboard.component.css']
})
export class MemeDashboardComponent implements OnInit {

  @ViewChild('memeCanvas', {static: false}) myCanvas;

  topText: string = '';
  bottomText: string = '';
  fontsize: string = '50px';
  fontstyle: string = 'Comic Sans';
  fontweight: string = 'normal';
  fileEvent: any;
  textColor: string = '#000000';
  backgroundColor: string = '#f9f9fd';

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {

  }

  preview(e:any){

    this.fileEvent = e;

    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);

    render.onload = function(event){

      const img = new Image();
      img.src = event.target.result as string;

      img.onload = function(){
        ctx.drawImage(img, 50, 150, 600, 500);
      }
    }

  }

  drawText(){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.preview(this.fileEvent);

    ctx.fillStyle = this.textColor;
    ctx.font = this.fontweight + ' ' + this.fontsize + ' ' + this.fontstyle ;
    ctx.textAlign = 'center';
    ctx.fillText(this.topText, canvas.width/2, 100);
    ctx.fillText(this.bottomText, canvas.width/2, 750);
 
  }

  canvasTextColor($event: ColorEvent){
    this.textColor = $event.color.hex;
    this.drawText();
  }

  canvasBgColor($event: ColorEvent){
    this.backgroundColor = $event.color.hex;
    this.drawText();
  }

  textFontSize(event: any){
    this.fontsize = event.target.value;
    this.drawText();
  }

  textFontStyle(event: any){
    this.fontstyle = event.target.value;
    this.drawText();
  }

  textFontWeight(event: any){
    this.fontweight = event.target.value;
    this.drawText();
  }

  downloadImg(){

    let canvas = this.myCanvas.nativeElement;
    let image = canvas.toDataURL('image/png');

    let link = document.createElement('a');
    link.download = 'memeImg.png';
    link.href = image;
    link.click();
  }

}
