import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  /**
   * The available$ property of ScullyRoutesService is called an observable and returns all the available routes
   * that were generated from Scully when we subscribe to it. To avoid displaying routes other than those related to blog posts,
   * such as the contact route, we filter out the results from the available$ property.
   */
  ngOnInit(): void {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => posts.filter(post => post.title))
    );
  }
}
