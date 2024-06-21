import { OverlayConfig, OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ViewChild, ViewContainerRef, createNgModule, inject } from '@angular/core';
import { DynamicOverlayComponent } from '../dynamic-overlay/dynamic-overlay.component';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.scss']
})
export class CaseViewComponent {
  @ViewChild('loadModuleOutlet', {read: ViewContainerRef, static: false}) loadModuleOutlet!: ViewContainerRef

  overlayRef!: OverlayRef;
  overlay = inject(Overlay)
  viewContainerRef = inject(ViewContainerRef)

  openOverlay(){
    console.log("overlatRef ")
    const config = new OverlayConfig({
       width: '100%'
    });


    this.overlayRef = this.overlay.create(config);
    this.overlayRef.hostElement.style.zIndex = '998';

    const ticketDetailsPortal = new ComponentPortal(DynamicOverlayComponent, this.viewContainerRef);
    this.overlayRef.attach(ticketDetailsPortal);
    console.log("overlatRef ", this.overlayRef)
   
  }
}
