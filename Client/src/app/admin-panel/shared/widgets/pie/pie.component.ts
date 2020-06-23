import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts ;

  chartOptions = {}

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'consomation d Energie par Mois  :, 2020'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting : {
        enabled : true
      },
      credits : {
        enabled : false
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Janvier',
              y: 10.41,
              sliced: true,
              selected: true
          }, {
              name: 'Féverier',
              y: 11.84
          }, {
              name: 'Mars',
              y: 10.85
          }, {
              name: 'Avril',
              y: 9.67
          }, {
              name: 'Mai',
              y: 11.18
          }, {
              name: 'Juin',
              y: 12.64
          }, {
              name: 'Juillet',
              y: 1.6
          }, {
              name: 'Aout',
              y: 1.2
          }, {
              name: 'etc',
              y: 2.61
          }]
      }]
  }
  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  } , 300 ) ;
  }

}
