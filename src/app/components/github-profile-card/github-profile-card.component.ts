import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css'],
})
export class GithubProfileCardComponent implements OnInit {
  @Input() gitHubUserProfile: any = '';
  constructor() {}

  ngOnInit(): void {}
}
