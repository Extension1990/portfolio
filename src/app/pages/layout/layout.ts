import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  host: {
    class: 'min-h-screen flex flex-col'
  }
})
export class Layout {}