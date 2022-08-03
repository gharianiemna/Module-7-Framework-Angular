import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Article } from '../../articles';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  articleForm!: FormGroup;
  articlePreview$!: Observable<Article>;
  isValidDate:any;
  error:any={isError:false,errorMessage:''};

  constructor(private formBuilder: FormBuilder,  private router: Router,
   private ArticlesService: ArticlesService,      private location: Location ) { }

 ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        body:  [null, [Validators.required, Validators.maxLength(225)]],
        date: [null,  this.validateDates()],
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
      this.ArticlesService.addArticle(this.articleForm.value).subscribe();;
      this.router.navigateByUrl('/articleList');
  }

  validateDates() : ValidatorFn{
      return (control:AbstractControl) : {[key: string]: any} | null => {
        const today = new Date();
        if(!control.value) {
          return null;
        }
        return new Date(control.value).getTime() > today.getTime() 
        ? null
        : {invalidDate: 'previous date' } ;
    }
  }
  
  goBack(): void {
    this.location.back();
  }

}

