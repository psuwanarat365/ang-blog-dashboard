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
    let subCategoryData = {
      subCategory: 'subCategory1',
    };
    // console.log(categoryData);

    // เราส่ง data ไปในรูปแบบ collection เนื่องจาก firestore
    // รูปแบบ collection

    //promise call - categories
    this.afs
      .collection('categories')
      .add(categoryData)
      .then((docRef) => {
        console.log(docRef);
        //promise call - first level subcategories
        this.afs
          .collection('categories')
          .doc(docRef.id)
          .collection('subcategories')
          .add(subCategoryData)
          .then((docRef1) => {
            console.log(docRef1);
            //promise call - second level subcategories
            this.afs
              .collection('categories')
              .doc(docRef.id)
              .collection('subcategories')
              .doc(docRef1.id)
              .collection('subsubcategories')
              .add(subCategoryData)
              .then((docRef2) => {
                console.log('Second Level Subcategory Saved Successfully');
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
