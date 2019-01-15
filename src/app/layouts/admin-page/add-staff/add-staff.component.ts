import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from 'src/app/shared/services/staff.service';
import { Staff } from 'src/app/shared/models/staff';
import { TranslateService } from '../../../shared/services/translate.service'

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  staff: Staff = new Staff();

  constructor(private staffService: StaffService, public translate: TranslateService) { }

  ngOnInit() {}

  addNewStaff(staffForm: NgForm) {
    staffForm.value['staffId'] = 'S_' + shortId.generate();
    staffForm.valid['staffFirstName']
    staffForm.value['createdOn'] = moment().unix();
		if (staffForm.value['staffImageUrl'] === undefined) {
			staffForm.value['staffImageUrl'] = 'https://via.placeholder.com/640x360/FFFFFF/000000?text=Image+is+not+available';
		}


		const date = staffForm.value['productAdded'];

		this.staffService.addStaff(staffForm.value);

		this.staff = new Staff();

		$('#exampleModalLong').modal('hide');

		toastr.success('staff ' + staffForm.value['staffLastName'] +staffForm.value['staffFirstName'] + 'is added successfully');

	}

}
