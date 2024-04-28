import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie'
    },
    title: {
        text: 'Course Evaluation 2024'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:'Luminar Technolab'
        
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    credits:{
      enabled:false
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'MEARN',
                    y: 55.02
                },
                {
                    name: 'PYTHON',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'BIGDATA',
                    y: 1.09
                },
                {
                    name: '.NET',
                    y: 15.5
                },
                {
                    name: 'TESTING',
                    y: 1.68
                }
            ]
        }
    ]

    }
    HC_exporting(Highcharts);

  }



}
