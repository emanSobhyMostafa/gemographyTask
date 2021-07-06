import { Repo } from './../models/repoModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-repo',
  templateUrl: './detail-repo.component.html',
  styleUrls: ['./detail-repo.component.scss']
})
export class DetailRepoComponent implements OnInit {
  @Input() item!: Repo
  constructor() { }

  ngOnInit(): void {
  }

}
