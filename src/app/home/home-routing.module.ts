import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { LoginComponent } from './login/login.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { PhongVeComponent } from './danh-sach-phim/chi-tiet-phim/phong-ve/phong-ve.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent,
    children: [
        //trang-chu
        {path: "", component: TrangChuComponent},
        {path: "home", component: TrangChuComponent},

        //danh-sach-phim
        {path: "danh-sach-phim", component: DanhSachPhimComponent},

        //chi-tiet-phim
        {path: "chi-tiet-phim/:id", component: ChiTietPhimComponent},

        //phong-ve
        // {path:"phong-ve/:maLichChieu", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"},
        {path:"phong-ve/:maLichChieu", component: PhongVeComponent},

        //dang-nhap
        {path: "dang-nhap", component: LoginComponent},

    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
