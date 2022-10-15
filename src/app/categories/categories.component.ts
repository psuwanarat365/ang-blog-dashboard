//app/categories/categories.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData) {
    // console.log(formData.value);
    let categoryData = {
      category: formData.value.category,
    };
    console.log(categoryData);
  }
}