import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-thong-tin-phim',
  templateUrl: './thong-tin-phim.component.html',
  styleUrls: ['./thong-tin-phim.component.scss']
})
export class ThongTinPhimComponent implements OnInit {

  phim:any;
  nam:any;
  thang:any;
  ngay:any;
  tenRapPhim:any;

  phongVe:any;
  ngayGioChieu:any;

  constructor( private shareDateService: ShareDataService ) { }

  ngOnInit() {
    this.shareDateService.shareGetChiTietPhim.subscribe(data => {
      // console.log(data);
      this.phim = data;
      // console.log(data);
      
    });
    this.shareDateService.shareChiTietPhongVe.subscribe(data => {
      this.phongVe = data;
      console.log(data);
      
    });
    this.shareDateService.shareNgayGioChieu.subscribe(data => {
      this.ngayGioChieu = data;
      console.log(data);
      
    });
    this.tachNgayThangNam();
    this.tenRap();
  }

  tenRap(){
    this.tenRapPhim = this.phongVe.TenRap;
    console.log(this.tenRapPhim);
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

}
