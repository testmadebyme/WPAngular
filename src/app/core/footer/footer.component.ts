import { Component, OnInit } from '@angular/core';
import { faGithubAlt,faLinkedinIn, faTelegramPlane, faFacebookF} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebookIcon = faFacebookF;
  linkedinIcon = faLinkedinIn;
  telegramIcon = faTelegramPlane;
  githubIcon = faGithubAlt;

  constructor() { }

  ngOnInit(): void {
  }

}