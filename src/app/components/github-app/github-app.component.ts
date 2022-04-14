import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css'],
})
export class GithubAppComponent implements OnInit {
  public gitHubUserQuery: string = '';
  public gitHubUserProfile: any = null;

  constructor(
    private gitHubService: GithubService,
    private ngxSpinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  searchGitHubUser() {
    if (this.gitHubUserQuery == '') {
      console.log('empty');
      return;
    }

    //show the spinner
    this.ngxSpinner.show();

    //get GitHub profile
    this.gitHubService.getProfile(this.gitHubUserQuery).subscribe((user) => {
      this.gitHubUserProfile = user;
    });

    //hide the spinner
    this.ngxSpinner.hide();
  }
}
