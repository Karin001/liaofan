import { NgModule,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule} from '../shared/shared.module';
import { loadIconSvg } from '../utils/loadiconsvg';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() private parent: CoreModule,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    if (this.parent) {
      throw new Error('核心模块已加载！不要重复加载！')
    }
    loadIconSvg(iconRegistry, sanitizer);


  }
}
