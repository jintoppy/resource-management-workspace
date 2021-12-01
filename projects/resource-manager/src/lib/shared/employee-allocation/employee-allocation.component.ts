import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Availability } from '../../models/availability/availability';
import { Resource } from '../../models/resources/resource';




@Component({
  selector: 'lib-employee-allocation',
  templateUrl: './employee-allocation.component.html',
  styleUrls: ['./employee-allocation.component.scss'],
})
export class EmployeeAllocationComponent implements OnInit {
  resourceAllocationForm: FormGroup;
  constructor(public dialog: MatDialog, public formBuilder: FormBuilder) {
    this.resourceAllocationForm = formBuilder.group({
      resource: new FormControl(''),
      allocation: new FormControl(''),
      role: new FormControl(''),
      status: new FormControl(),
      priority: new FormControl(''),
      plannedStartDate: new FormControl(''),
      plannedEndDate: new FormControl(''),
      actualStartDate: new FormControl(''),
      actualEndDate: new FormControl(''),
      description: new FormControl(''),
    });
  }
  startDate = new Date(1990, 0, 1);
  selectedValue: string = '';
  resources: Resource[] = [
    {
      resourceId: 1,
      resourceName: 'James',
      resourceType: 'Chef',
      availability: Availability.CUSTOM,
    },
    {
      resourceId: 2,
      resourceName: 'Andy',
      resourceType: 'Driver',
      availability: Availability.CUSTOM,
    },
    {
      resourceId: 3,
      resourceName: 'Sam',
      resourceType: 'Chef',
      availability: Availability.CUSTOM,
    },
  ];
  statuses: string[] = ['DEFINED', 'IN_PROGRESS'];
  priorities: string[] = ['LOW', 'MEDIUM', 'HIGH'];
  ngOnInit(): void {}
}
