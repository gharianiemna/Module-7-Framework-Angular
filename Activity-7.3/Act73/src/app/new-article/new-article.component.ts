import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../articles';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  articleForm!: FormGroup;
  articlePreview$!: Observable<Article>;

  constructor(private formBuilder: FormBuilder) { }

 ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        content:  [null, [Validators.required, Validators.maxLength(225)]],
        date: [formatDate(new Date(),  'yyyy-MM-dd', 'en')],
        author:[null],
    }, {
    updateOn: 'blur'
});
    this.articlePreview$ = this.articleForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        comment: '',
        id: 0
    }))
);
}

onSubmitForm() {
    console.log(this.articleForm.value);
}
}
