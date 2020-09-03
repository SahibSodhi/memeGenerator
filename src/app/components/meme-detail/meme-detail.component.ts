import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Meme } from '../../shared/services/meme';

@Component({
  selector: 'app-meme-detail',
  templateUrl: './meme-detail.component.html',
  styleUrls: ['./meme-detail.component.css']
})
export class MemeDetailComponent implements OnInit {
  
  meme: Meme

  constructor(
    private route: ActivatedRoute,
    private memeService: AuthService 
  ) { }

  ngOnInit(): void {
    this.getMeme()
    console.log(this)
  }

  getMeme(){
    const id = this.route.snapshot.paramMap.get('id')
    return this.memeService.getMemeData(id).subscribe(data => this.meme = data)
  }

}
