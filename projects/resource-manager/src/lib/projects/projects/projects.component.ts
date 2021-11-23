import { Component, Input, OnInit } from '@angular/core';
import {lastDayOfMonth, addDays, format, startOfMonth, subDays, startOfWeek, lastDayOfWeek } from 'date-fns';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
  selector: 'lib-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  monthDate: Date = new Date();
  selectButton: string = "month"
  buttonValue: string = '';
  weekDate: Date = new Date();
  tabValue:string = '';

  constructor(private _calendarService: CalendarService) { }

  ngOnInit(): void {
    this.tabValue = 'Projects';
  }

  onClickForward = () => {
    let lastDayMonth = lastDayOfMonth(this.monthDate);
    this.monthDate = addDays(lastDayMonth, 1);
    let lastDayWeek = lastDayOfWeek(this.weekDate);
    this.weekDate = addDays(lastDayWeek, 1);
    this.buttonValue = 'next';
    console.log(this.monthDate)
  }
  onClickBackward = () => {
    let firstDayMonth = startOfMonth(this.monthDate);
    this.monthDate = subDays(firstDayMonth, 1);
    let firstDayWeek = startOfWeek(this.weekDate);
    this.weekDate = subDays(firstDayWeek,1);
    this.buttonValue = 'prev'
  }
  onToggleButton = (value: string) => {
    if (value == 'month') {
      this.selectButton = 'month';
    } else {
      this.selectButton = 'week';
    }
  };

  onChangeTab = (tabValue:string) => {
    this.tabValue = tabValue;
  }

}
