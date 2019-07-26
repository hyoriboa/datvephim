import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  //mỗi trang có 1 store riêng

  //lay danh sach phim: la array
  listDanhSachPhim = new BehaviorSubject([{}] as any);
  shareListDanhSachPhim = this.listDanhSachPhim.asObservable();

  //lay chi tier phim la obj nen tra ve {}
  // chiTietPhim = new BehaviorSubject({} as any);
  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  //chi tiet phim
  getChiTietPhim = new BehaviorSubject({} as Object);
  shareGetChiTietPhim = this.getChiTietPhim.asObservable();

  chiTietPhongVe = new BehaviorSubject({} as Object);
  shareChiTietPhongVe = this.chiTietPhongVe.asObservable();


  ngayGioChieu = new BehaviorSubject({} as Object);
  shareNgayGioChieu = this.ngayGioChieu.asObservable();


  constructor() {
    // console.log(this.listDanhSachPhim);
    // console.log(this.chiTietPhim);
    
   }

  shareingDataListDanhSachPhim(listPhim){
    this.listDanhSachPhim.next(listPhim);
  }

  shareingDataChiTietPhim(phim){
    this.chiTietPhim.next(phim);
  }
  
  shareingDataGetChiTietPhim(maPhim){
    this.getChiTietPhim.next(maPhim);
  }

  shareingDataChiTietPhongVe(phongVe){
    this.chiTietPhongVe.next(phongVe);
  }

  shareingDataNgayGioChieu(ngayGioChieu){
    this.ngayGioChieu.next(ngayGioChieu);
  }

}
