import { ArticlesService } from '../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../articles';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  article: Article | undefined;
  article$!: Observable<Article>;
  commentForm!: FormGroup;
  articlePreview$!: Observable<Article>;

  constructor(private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute, private ArticlesService: ArticlesService,  private location: Location  ) {}

  ngOnInit(): void {
      this.getArticlebyId();
      this.commentForm = this.formBuilder.group({
          content:  [null, [Validators.required, Validators.maxLength(225)]],
          author:[null, [Validators.required]],
      }, {
      updateOn: 'blur'
      });
  }

  getArticlebyId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article$=this.ArticlesService.getDetail(id);
  }

  goBack(): void {
    this.location.back();
  }

onSubmitForm() {
   const id = Number(this.route.snapshot.paramMap.get('id'))
    this.ArticlesService.addComment(this.commentForm.value, id);
  }
}
