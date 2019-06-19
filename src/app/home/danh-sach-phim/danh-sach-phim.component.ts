import { Component, OnInit } from '@angular/core';
import { QuanLiPhimService } from 'src/_core/quan-li-phim.service';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];
  danhSachPhimSapChieu = [];
  danhSachPhimDaChon = [];
  youtubeUrl: any;
  phim: any;
  tenPhim:any;

  public iframe_html: any;
  
  constructor(
    private quanLyPhimService: QuanLiPhimService,
    private embedService: EmbedVideoService
    ) { }

  ngOnInit() {
    this.getDanhSachPhim();
    this.getDanhSachPhimSapChieu();
  }

  getDanhSachPhim(){
    this.quanLyPhimService.layDanhSachPhim().subscribe((data:any)=>{
      // console.log(data);
      this.danhSachPhim = data;  
    });
  }

  getDanhSachPhimSapChieu(){
    this.quanLyPhimService.layDanhSachPhimSapChieu().subscribe((data:any)=>{
      // console.log(data);
      this.danhSachPhimSapChieu = data;  
    });
  }

  xemTrailer(phim){
    console.log(phim);
    
    this.phim = phim;
    this.youtubeUrl  = this.phim.Trailer;
    if(!this.youtubeUrl.includes("embed")){
      this.tenPhim = this.phim.TenPhim;
      this.iframe_html = this.embedService.embed(this.youtubeUrl,{
        attr: { width: '100%', height: 500},
      });  
    }else{
      this.youtubeUrl = this.youtubeUrl.replace('embed/', 'watch?v=');
      this.tenPhim = this.phim.TenPhim;
      this.iframe_html = this.embedService.embed(this.youtubeUrl,{
        attr: { width: '100%', height: 500},
      });  
    }
    
    
  }

  tatTrailer(){
    this.iframe_html = '';
  }
    
}
