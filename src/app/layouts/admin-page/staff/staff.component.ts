import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../shared/models/staff';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StaffService } from 'src/app/shared/services/staff.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { TranslateService } from 'src/app/shared/services/translate.service';
import { AddStaffComponent } from '../add-staff/add-staff.component'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
	staffList: Staff[];
	loading = false;

	page = 1;
	constructor(
		public authService: AuthService,
		private staffService: StaffService,
		private toastrService: ToastrService,
		public translate: TranslateService
	) {}

	ngOnInit() {
		this.getAllStaffs();
	}

	getAllStaffs() {
		// this.spinnerService.show();
		this.loading = true;
		const x = this.staffService.getAllStaff();
		x.snapshotChanges().subscribe(
			(staff) => {
				this.loading = false;
				// this.spinnerService.hide();
				this.staffList = [];
				staff.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.staffList.push(y as Staff);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Staffs', err);
			}
		);
	}
}