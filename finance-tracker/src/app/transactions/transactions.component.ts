import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactions = this.transactionService.getTransactions();
  }

  deleteTransaction(id: number) {
    alert(JSON.stringify(id))
    this.transactionService.deleteTransaction(id);
    this.loadTransactions();
  }
}
