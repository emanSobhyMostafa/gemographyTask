import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Repo } from '../models/repoModel';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repoList: Array<Repo> = [];
  curPage!: number;
  loading: boolean = true;
  last_page!: number;

  constructor(private repoDate: DataService) {

  }



  ngOnInit() {

    this.repoDate.getRepoData().subscribe(data => {
      this.last_page = data.total_count / 100

      this.repoList = data.items;
      this.loading = false;
      console.log(data)
    });
    this.curPage = 1;
  }


  @HostListener('window:scroll', ['$event'])

  numberOfPages() {
    var percent = (window.pageYOffset / (document.body.clientHeight - window.innerHeight)) * 100
    if (percent > 90 && !this.loading && this.curPage <= this.last_page) {
      this.loading = true
      this.curPage = this.curPage + 1;

      this.repoDate.getRepoData(this.curPage).subscribe(data => {

        this.repoList.push(...data.items);
        this.loading = false;

      });
    }


  }
}
