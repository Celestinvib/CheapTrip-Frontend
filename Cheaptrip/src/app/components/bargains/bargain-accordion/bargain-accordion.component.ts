import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bargain } from '../../../models/bargain/bargain.model';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bargain-accordion',
  templateUrl: './bargain-accordion.component.html',
  styleUrls: ['./bargain-accordion.component.css']
})
export class BargainAccordionComponent implements OnInit {

  @Input() bargain: Bargain = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private domSanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnInit(): void {

  }
  
}


