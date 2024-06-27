import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionsComponent } from './transactions/transactions.component';

// Import Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TransactionFormComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
