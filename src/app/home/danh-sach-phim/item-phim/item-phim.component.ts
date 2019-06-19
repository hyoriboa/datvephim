import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {


  @Input() phim;
  @Output() eventPhim = new EventEmitter();

  trangThaiChon = false;




  constructor(private router: Router,
    private embedService: EmbedVideoService
    ) { }

  ngOnInit() {
  }

  muaVe(){
    this.router.navigate(["home/chi-tiet-phim", this.phim.MaPhim], {queryParams: {tenPhim: this.phim.TenPhim}});
  }

  xemTrailer(){

    this.eventPhim.emit(this.phim);
    
  }

  

}
