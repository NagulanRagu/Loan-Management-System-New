import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetails } from '../model/loan-details';
import { LoanDetailsService } from '../service/loan-details.service';

@Component({
  selector: 'app-add-loan-details',
  templateUrl: './add-loan-details.component.html',
  styleUrls: ['./add-loan-details.component.css']
})
export class AddLoanDetailsComponent implements OnInit {

  constructor(public loanDetails: LoanDetails, private route: ActivatedRoute,
    private loanDetailsService: LoanDetailsService, private router: Router) { }

  id!: number;
  addOrUpdate!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loanDetails = new LoanDetails();
    if (this.id != -1) {
      this.addOrUpdate = "Update";
      this.loanDetailsService.getLoanDetailsById(this.id).subscribe(
        data => {
          console.log(data);
          this.loanDetails = data;
        });
    } else {
      this.addOrUpdate = "Add";
    }
  }

  addLoanDetails() {
    if (this.id == -1) {
      this.loanDetailsService.addLoanDetails(this.loanDetails).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['loan']);
        });
    } else {
      this.loanDetailsService.updateLoanDetails(this.id, this.loanDetails).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['loan']);
        }
      );
    }
  }
}
