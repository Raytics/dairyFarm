import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

 
  public milkChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [12, 14, 13, 15, 14, 17, 16],
        label: 'Morning Milk (L)',
        fill: true,
        tension: 0.4,
        borderColor: '#388e3c',
        backgroundColor: 'rgba(56, 142, 60, 0.2)',
        pointBackgroundColor: '#388e3c',
        pointBorderColor: '#fff',
      },
      {
        data: [10, 16, 15, 20, 19, 23, 22],
        label: 'Evening Milk (L)',
        fill: true,
        tension: 0.4,
        borderColor: '#43a047',
        backgroundColor: 'rgba(67, 160, 71, 0.2)',
        pointBackgroundColor: '#43a047',
        pointBorderColor: '#fff',
      }
    ]
  };

  public milkChartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#2e7d32'
        }
      },
      title: {
        display: true,
        text: 'Weekly Milk Collection (Morning vs Evening)',
        color: '#2e7d32',
        font: {
          size: 18
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#555'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#555'
        }
      }
    }
  };
  public feedChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Dry Fodder (kg)',
      data: [25, 22, 28, 24, 26, 30, 29],
      backgroundColor: '#8D6E63'
    },
    {
      label: 'Green Fodder (kg)',
      data: [30, 35, 32, 31, 33, 34, 36],
      backgroundColor: '#66BB6A'
    },
    {
      label: 'Concentrates (kg)',
      data: [10, 12, 11, 9, 10, 13, 12],
      backgroundColor: '#FFA726'
    }
  ]
};

public feedChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly Feed Distribution',
      font: {
        size: 18
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
}
