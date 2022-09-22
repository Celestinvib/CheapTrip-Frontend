import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bargain } from '../../../models/bargain/bargain.model';

@Component({
  selector: 'app-bargain-accordion',
  templateUrl: './bargain-accordion.component.html',
  styleUrls: ['./bargain-accordion.component.css']
})
export class BargainAccordionComponent implements OnInit {

  @Input() bargain: Bargain = {}


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }
}
