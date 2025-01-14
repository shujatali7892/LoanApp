import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
title: string = 'Data Binding title';
name: string = 'Data Binding name';
url: string = 'https://www.google.com';
subtitle: string = 'Data Binding subtitle';
 



}
