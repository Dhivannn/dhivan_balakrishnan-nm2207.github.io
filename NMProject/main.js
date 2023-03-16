
// Chart on Passenger Movement in Changi Airport over time
//src = https://www.statista.com/statistics/867835/singapore-number-of-passengers-changi-airport/
var ctx = document.getElementById('Chart1').getContext('2d');

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Passenger',
      data: [54.1, 55.45, 58.7, 62.22, 65.63, 68.3, 11.8,3.05],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Passenger Movement over the Years'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Chart on Changi Airport top flights in 2023
// src = https://www.oag.com/busiest-routes-right-now


  var ctx = document.getElementById('Chart2').getContext('2d');

  var Chart2 = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['KUL - SIN', 'CAI-JED', 'ICN-NRT', 'CGK-SIN', 'ICN-KIX'],
          datasets: [{
              data: [402786, 395801, 325705,315348,310280],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(186,85,211)',
                  'rgb(154,205,50)',

                ]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 International Flights in the World',
                fontSize: 18,
                fontColor: 'navy'
            }
        }
    });


   
    