import { Component, OnInit } from '@angular/core';
import { QuanLiPhimService } from '../_core/quan-li-phim.service';


@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];

  constructor(
    private quanLyPhimService: QuanLiPhimService
    ) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim(){
    this.quanLyPhimService.layDanhSachPhim().subscribe((data:any)=>{
      console.log(data);
      this.danhSachPhim = data;      
    });
  }

  
    
}
