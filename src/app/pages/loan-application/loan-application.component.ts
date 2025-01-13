import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Application, Loan } from '../../models/application.model';
import { JsonpInterceptor } from '@angular/common/http';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  masterSrv = inject(MasterService);


  addload() {
    const strobj = JSON.stringify(this.loan);
    const newobj = JSON.parse(strobj)
    this.application.Loans.unshift(newobj);

  }

  onsubmit() {
    console.log("Submitting application:", this.application); // Debugging log
    this.masterSrv.addNewApplication(this.application).subscribe(
      (Result: ApiResponseModel) => {
        if (Result.result) {
          alert("Loan Application success");
        } else {
          alert(Result.message);
        }
      },
      (error) => {
        alert("An error occurred: " + error.message);
      }
    );
  }


}

