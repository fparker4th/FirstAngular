import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-sip-calculator',
  imports: [],
  templateUrl: './sip-calculator.html',
  styleUrl: './sip-calculator.scss',
})
export class SipCalculator {
  title = input<string>('SIP Calculator');
  monthlyAmount: number = 5000;
  investmentPeriod: number = 10; //in years
  expectedReturnRate: number = 12; //percentage

  //Calculated results
  totalInvestment = signal<number>(this.monthlyAmount 
    * 12 * this.investmentPeriod);
  maturityAmount = signal<number>(1162000); //Simplified calculation for now
  estimatedReturns = signal<number>(this.maturityAmount() - this.totalInvestment());
  fundName: string | null = null;

  //Calculated results
  
  //Simple calculation method
  calculateYearlyInvestment(): number
  {
    return this.monthlyAmount * 12;
  }

}
