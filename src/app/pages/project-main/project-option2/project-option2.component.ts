import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {CommunicationServiceService} from "../../../service/communication_service/communication-service.service";

@Component({
  selector: 'app-project-option2',
  templateUrl: './project-option2.component.html',
  styleUrls: ['./project-option2.component.scss']
})
export class ProjectOption2Component implements OnInit {
  canvas: any;
  ctx: any;
  tabledata: any;

  constructor(private _service: CommunicationServiceService) {
  }

  ngOnInit() {
    this.getDetails();
    this.createChart('mylineChart1', 'line', ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      [75, 25, 80, 20], [
        'rgba(54, 162, 235,1)',
        'rgba(255, 99, 132, 1)',
        'rgba(0, 255, 0,1)',
        'rgba(255, 0, 0,1)',
      ], 'Year');

    this.createChart('mylineChart2', 'bar', ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      [{
        x: 0,
        y: 2,
      }, {
        x: 2,
        y: 4,
      }, {
        x: 2.5,
        y: 3.5,
      }, {
        x: 4,
        y: 5.6,
      }], [
        'rgba(54, 162, 235,1)',
        'rgba(255, 99, 132, 1)',
        'rgba(0, 255, 0,1)',
        'rgba(255, 0, 0,1)',
      ], 'Year');

    this.createChart('mylineChart3', 'bar', ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      [{
        x: 0,
        y: 2,
      }, {
        x: 2,
        y: 4,
      }, {
        x: 2.5,
        y: 3.5,
      }, {
        x: 4,
        y: 5.6,
      }], [
        'rgba(54, 162, 235,1)',
        'rgba(255, 99, 132, 1)',
        'rgba(0, 255, 0,1)',
        'rgba(255, 0, 0,1)',
      ], 'Year');


    this.createChart('mylineChart4', 'bar', ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      [{
        x: 0,
        y: 2,
      }, {
        x: 2,
        y: 4,
      }, {
        x: 2.5,
        y: 3.5,
      }, {
        x: 4,
        y: 5.6,
      }], [
        'rgba(54, 162, 235,1)',
        'rgba(255, 99, 132, 1)',
        'rgba(0, 255, 0,1)',
        'rgba(255, 0, 0,1)',
      ], 'Year');

  }

  createChart(chartId, charType, labels, data, backgroundcolor, label) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: charType,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: backgroundcolor,
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              display: true,
              steps: 2
            }
          }],
          xAxes: [{
            display: true,
            // Change here
            barPercentage: 0.2
          }]
        }
      }
    });
  }

  async getDetails() {
    //this.tabledata = await this._service.getListOfTopStocks();
  }


}
