import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl :"pdfVista.html"
})
export class App {
  name = 'Angular';

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}

bootstrapApplication(App);
