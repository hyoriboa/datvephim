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

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent, TinTucComponent, FooterComponent, LoginComponent, SliderComponent, ItemPhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
