import { ArticlesService } from './../articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../articles';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  article: Article | undefined;
  constructor(
    private route: ActivatedRoute,
   private ArticlesService: ArticlesService,   
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }


  getDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.ArticlesService.getDetail(id)
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

}
