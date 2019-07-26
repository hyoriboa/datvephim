import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongTinPhimComponent } from 'src/app/components/thong-tin-phim/thong-tin-phim.component';

@NgModule({
  declarations: [ ThongTinPhimComponent],
  exports: [ ThongTinPhimComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
