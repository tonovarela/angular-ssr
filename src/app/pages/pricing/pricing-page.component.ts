import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  
   private title = inject(Title);
      private meta = inject(Meta);
    
      ngOnInit(): void {        
        this.title.setTitle('Pricing Page');
        this.meta.updateTag({ name: 'description', content: 'About Page Description' });            
      }
  
}
