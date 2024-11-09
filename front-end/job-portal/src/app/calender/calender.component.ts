import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { GeoService } from '../service/geo/geo.service';
import { HttpClient } from '@angular/common/http';
import { startOfMonth, endOfMonth } from 'date-fns';
import { Event } from '../model/event.model';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent{

  // viewDate: Date = new Date();
  // events: CalendarEvent[] = [];
  // view: 'month' = 'month'; // Ensure that the view is a string literal 'month'

  // constructor(private geoService: GeoService, private http: HttpClient) {}

  // ngOnInit() {
  //   this.geoService.getCurrentLocation().then(position => {
  //     const lat = position.coords.latitude;
  //     const lng = position.coords.longitude;
  //     this.fetchEvents(lat, lng);
  //   }).catch(error => {
  //     console.error('Error getting location', error);
  //   });
  // }

  // fetchEvents(lat: number, lng: number) {
  //   // Replace with your API endpoint
  //   const apiUrl = `https://api.your-events-source.com/events?lat=${lat}&lng=${lng}`;
    
  //   this.http.get<Event[]>(apiUrl).subscribe(data => {
  //     // Transform your data into CalendarEvent objects
  //     this.events = data.map(event => ({
  //       start: new Date(event.startDate),
  //       title: event.name,
  //     }));
  //   });
  // }


}
