import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: 'bar',
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Completed Tasks by Type',
          },
          ticks: {
            beginAtZero: true,
          },
        },
        {
          id: 'line',
          stacked: false,
          display: false,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {},
        },
      ],
    },
    legend: {
      labels: { labels: ['Taylor Cella', 'Test Teammate'] },
    },
    tooltips: {
      callbacks: {},
    },
  };
  public barChartLabels: Label[] = ['May 14', 'May 15', 'May 16', 'May 17'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 0, 0],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Taylor Cella',
      stack: 'Calls',
      yAxisID: 'bar',
    },
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [0, 2, 0, 0],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Taylor Cella',
      stack: 'Social Media',
      yAxisID: 'bar',
    },
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 3, 0],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Taylor Cella',
      stack: 'General',
      yAxisID: 'bar',
    },
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 0, 4],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Test Teammate',
      stack: 'Calls',
      yAxisID: 'bar',
    },
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 0, 1],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Test Teammate',
      stack: 'Social Media',
      yAxisID: 'bar',
    },
    {
      backgroundColor: 'hsl(215, 72%, 43%)',
      borderColor: 'rgba(255,99,132,1)',
      data: [1, 0, 0, 0],
      hoverBackgroundColor: 'hsl(215, 72%, 36%)',
      hoverBorderColor: 'hsl(215, 72%, 36%)',
      label: 'Test Teammate',
      stack: 'General',
      yAxisID: 'bar',
    },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'Taylor' }
  ];
  constructor() {}

  ngOnInit() {}
}
