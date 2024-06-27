import { Component, ViewChild } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finance-tracker';

  @ViewChild(SummaryComponent) summaryComponent: SummaryComponent;
  @ViewChild(TransactionsComponent) transactionsComponent: TransactionsComponent;

  refreshData() {
    this.summaryComponent.loadSummary();
    this.transactionsComponent.loadTransactions();
  }
}
