import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuanLiPhimService } from 'src/_core/quan-li-phim.service';
import { EmbedVideoService } from 'ngx-embed-video';



@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {


  public maPhim: any;
  public tenPhim: any;
  public phim: any;

  public youtubeUrl :string;
  public iframe_html: any;

  constructor(private quanLyPhimService: QuanLiPhimService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private embedService: EmbedVideoService) { 

    }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhim();
  }

  getChiTietPhim(){
    this.quanLyPhimService.layChiTietPhim(this.maPhim).subscribe((data:any)=>{
      // console.log(data);
       this.phim = data;
    });
  }

  getParams(){
    // nhận 1 tham số
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id'); //id <= {path: "chi-tiet-phim/:id" homeRouting
    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.tenPhim = params.tenPhim;
    });
  }

  xemTrailer(){
    this.youtubeUrl  = this.phim.Trailer;
    this.iframe_html = this.embedService.embed(this.youtubeUrl,{
      attr: { width: '100%', height: 500},
    });
  }

  tatTrailer(){
    this.iframe_html = '';
  }

}
