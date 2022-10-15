//app/categories/categories.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  //inject Firestore service into constructor
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {}

  onSubmit(formData) {
    // console.log(formData.value);
    let categoryData = {
      category: formData.value.category,
    };
    // console.log(categoryData);

    // เราส่ง data ไปในรูปแบบ collection เนื่องจาก firestore
    // รูปแบบ collection
    this.afs
      .collection('categories')
      .add(categoryData)
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
