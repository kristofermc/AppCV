import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
// many imports added here for the dark mode enabling
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
// This is the funtionality for the enabling and disabling of the dark mode. it reverts back to default colour scheme
// maybe in the next app I can make a few different colour schemes!
  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
  }
  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }
}
