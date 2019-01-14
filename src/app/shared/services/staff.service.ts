import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Staff } from '../models/staff';
import { AuthService } from './auth.service';
import { ToastrService } from './toastr.service';

@Injectable()
export class StaffService {
	staffs: AngularFireList<Staff>;
	staff: AngularFireObject<Staff>;

	constructor(
		private db: AngularFireDatabase,
		private authService: AuthService,
		private toastrService: ToastrService
	) { }

	getAllStaff() {
		this.staffs = this.db.list('staffs');
		return this.staffs;
	}

	createStaff(data: Staff) {
		this.staffs.push(data);
	}

	getStaffById(key: string) {
		this.staff = this.db.object('staffs/' + key);
		return this.staff;
	}

	updateStaff(data: Staff) {
		this.staffs.update(data.$key, data);
	}

	deleteStaff(key: string) {
		this.staffs.remove(key);
  }
}
