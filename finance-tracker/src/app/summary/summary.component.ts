import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalIncome: number = 0;
  totalExpenses: number = 0;
  balance: number = 0;
  recentTransactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.loadSummary();
  }

  loadSummary() {
    const transactions = this.transactionService.getTransactions();
    this.totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    this.totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    this.balance = this.totalIncome - this.totalExpenses;
    this.recentTransactions = transactions.slice(-5);
  }
}
