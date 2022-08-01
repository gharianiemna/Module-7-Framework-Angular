import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../articles';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from './../articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  articleForm!: FormGroup;
  articlePreview$!: Observable<Article>;

  constructor(private formBuilder: FormBuilder,  private router: Router,
   private ArticlesService: ArticlesService,   ) { }

 ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        content:  [null, [Validators.required, Validators.maxLength(225)]],
        date: [null],
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
    this.ArticlesService.addArticle(this.articleForm.value);
    this.router.navigateByUrl('/articleList');
}
}
