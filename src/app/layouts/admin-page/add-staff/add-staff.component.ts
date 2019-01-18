import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from 'src/app/shared/services/staff.service';
import { Staff } from 'src/app/shared/models/staff';
import { Upload } from 'src/app/shared/models/upload';
import { UploadService } from 'src/app/shared/services/upload.service';
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
  selectedFiles: FileList;
  currentFileUpload: Upload;
  progress: { percentage: number } = { percentage: 0};
  staffKey: string;
  recPath: string = '/staffs';

  constructor(
    private staffService: StaffService, 
    private uploadService: UploadService, 
    public translate: TranslateService
  ) { }

  ngOnInit() {}

  addNewStaff(staffForm: NgForm) {
    staffForm.value['staffId'] = 'S_' + shortId.generate();
    staffForm.valid['staffFirstName'];
    staffForm.valid['staffLastName'];
    staffForm.value['createdOn'] = moment().unix();
		if (staffForm.value['staffAvatar'] === undefined) {
			staffForm.value['staffAvatar'] = 'https://firebasestorage.googleapis.com/v0/b/angular-shoppingcart-ae8d3.appspot.com/o/staffs%2FNot%20Available.png?alt=media&token=3f140062-7a66-4af0-ba20-97287f646978';
		}


    const date = staffForm.value['productAdded'];

    this.staffKey = this.staffService.addStaff(staffForm.value);

    this.upload(this.recPath, this.staffKey);

    this.staff = new Staff();

		$('#exampleModalLong').modal('hide');

		toastr.success('staff ' + staffForm.value['staffLastName'] +staffForm.value['staffFirstName'] + 'is added successfully');

  }
  
  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  // upload() {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined;

  //   this.currentFileUpload = new Upload(file);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  // }

  upload(recPath: string, staffKey: string) {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Upload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, recPath, staffKey, this.progress);
  }

}
