import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Bargain } from 'src/app/models/bargain/bargain.model';

@Component({
  selector: 'app-bargain',
  templateUrl: './bargain.component.html',
  styleUrls: ['./bargain.component.css']
})
export class BargainComponent implements OnInit {

  @Input() bargain: Bargain = {}


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
}
