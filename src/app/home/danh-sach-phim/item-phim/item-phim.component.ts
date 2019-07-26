import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {


  @Input() phim;
  @Output() eventPhim = new EventEmitter();

  nam:any;
  thang:any;
  ngay:any;



  constructor(private router: Router,
    private embedService: EmbedVideoService,
    private shateDataService : ShareDataService
    ) { }

  ngOnInit() {
    this.tachNgayThangNam();
  }

  tachNgayThangNam(){
    if(this.phim.NgayKhoiChieu !== null){
      let ngayThangNam = this.phim.NgayKhoiChieu.slice(0, 10);
      let [nam, thang, ngay] = ngayThangNam.split('-');
      this.nam = nam;
      this.thang = thang;
      this.ngay = ngay;
    }
    
  }

  muaVe(){
    this.router.navigate(["home/chi-tiet-phim", this.phim.MaPhim], {queryParams: {tenPhim: this.phim.TenPhim}});
    this.shateDataService.shareingDataChiTietPhim(this.phim);
    // console.log(this.shateDataService.shareingDataChiTietPhim(this.phim));
    // console.log(this.phim);
    
  }

  xemTrailer(){
    this.eventPhim.emit(this.phim);
  }

  

}
