import { Component, Input } from '@angular/core';
import { InvestmentInput } from '../investment-input';
import { AnnualData } from '../annual-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) results?: AnnualData[];
}
