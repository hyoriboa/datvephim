import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeRoutingModule } from './home-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './trang-chu/slider/slider.component';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { PhongVeComponent } from './danh-sach-phim/chi-tiet-phim/phong-ve/phong-ve.component';
import { GheComponent } from './danh-sach-phim/chi-tiet-phim/phong-ve/ghe/ghe.component';
import { ShareModule } from 'src/_core/shared/share.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent, TinTucComponent, 
    FooterComponent, LoginComponent, SliderComponent, ItemPhimComponent, ChiTietPhimComponent, PhongVeComponent, GheComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
