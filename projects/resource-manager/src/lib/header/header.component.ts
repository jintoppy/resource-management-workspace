import { Component, Input, OnInit, Output, EventEmitter , ViewEncapsulation} from '@angular/core';
import { format } from 'date-fns';


import { MatDialog } from '@angular/material/dialog';
import { DisplayFieldsComponent } from '../display-fields/display-fields.component';
import { TaskAllocationComponent } from '../task-allocation/task-allocation.component';
import { EmployeeAllocationComponent } from '../employee-allocation/employee-allocation.component';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();

  @Input()
  onClickForward!: () => any;

  @Input()
  onClickBackward!: () => any;

  @Input()
  onToggleButton!: (value: string) => any;

  @Input() monthDate:Date = new Date ();

  @Input() weekDate: Date = new Date();

  @Input() activeView:string = '';

  tabValue = "";

  @Output() tabValueEvent = new EventEmitter<string> ();

  constructor(public dialog: MatDialog) {}

  openDisplayFields() {
    const dialogRef = this.dialog.open(DisplayFieldsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onToggle = (value:string) => {
    this.tabValue = value;
    this.tabValueEvent.emit(this.tabValue);
  }

  openTaskAllocation() {
    const dialogRef = this.dialog.open(TaskAllocationComponent, {
      height: '100vh',
      width: '40vw',
      panelClass: 'custom-dialog-container',
      position: {
        right: '0',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(EmployeeAllocationComponent, {
      height: '100vh',
      width: '40vw',
      panelClass: 'custom-dialog-container',
      position: {
        right: '0',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {}
}
