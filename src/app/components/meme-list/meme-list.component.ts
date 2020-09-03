import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meme } from '../../shared/services/meme';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.css']
})
export class MemeListComponent implements OnInit {
  memes: Observable<Meme[]>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.memes = this.authService.getMemes()
    console.log(this)
  }

}
