import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/core/models/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
@Input() company: Company;
  constructor() { }

  ngOnInit() {
  }


}
