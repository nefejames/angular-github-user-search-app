import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  @Input() gitHubUserProfile: any = '';

  constructor() {}

  ngOnInit(): void {}
}
