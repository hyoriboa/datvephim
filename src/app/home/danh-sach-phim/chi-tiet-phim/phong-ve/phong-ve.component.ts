import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLiPhimService } from 'src/_core/quan-li-phim.service';
import { GheComponent } from './ghe/ghe.component';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {


  @ViewChildren(GheComponent) danhSachGhePhim: QueryList<GheComponent>;

  public maLichChieu:any;
  public danhSachGhe:any;
  public tienVe = 0;
  public soluong1 = 0;
  public soluong2 = 0;
  public tongCB1 = 0;
  public tongCB2 = 0;

  myCombo = [
    {id: 1, name: 'Combo 1', gia: 40000, soLuong: 0, tong: 0},
    {id: 2, name: 'Combo 2', gia: 50000, soLuong: 0, tong: 0},
  ];

  danhSachGheDaDat = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quanLiPhimService: QuanLiPhimService
  ) { }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhongVe();
  }

  getParams(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu");
  }

  getChiTietPhongVe(){
    this.quanLiPhimService.chiTietPhongVe(this.maLichChieu).subscribe((data)=>{
      console.log(data);
      this.danhSachGhe = data.DanhSachGhe;
    });
  }

  datGhe(ghe){
    // console.log(ghe);
    (ghe.trangThai) ? (this.danhSachGheDaDat.push(ghe.ghe)) :
    (this.danhSachGheDaDat.splice(this.danhSachGheDaDat.findIndex(item => item.MaGhe === ghe.ghe.MaGhe), 1));

     this.tienVe = this.danhSachGheDaDat.reduce((currentTotal, ghe)=>{
       return currentTotal + ghe.GiaVe;
     }, 0);
     
  }

  themCombo(){
    let combo = this.myCombo.find(item => item.id === 1);
    this.soluong1 = ++combo.soLuong;
    this.tongCB1 = this.soluong1 * combo.gia;
  }

  themCombo2(){
    let combo = this.myCombo.find(item => item.id === 2);
    this.soluong2 = ++combo.soLuong;
    this.tongCB2 = this.soluong2  * combo.gia;
  }

  giamCombo(){
    let combo = this.myCombo.find(item => item.id === 1);
    if(this.soluong1 > 0){
      this.soluong1 = --combo.soLuong;
    }
    this.tongCB1 = this.soluong1 * combo.gia;
  }
  giamCombo2(){
    let combo = this.myCombo.find(item => item.id === 2);
    if(this.soluong2 > 0){
      this.soluong2 = --combo.soLuong;
    }
    this.tongCB2 = this.soluong2 * combo.gia;
  }



}
