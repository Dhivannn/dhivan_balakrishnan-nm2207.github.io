
// Chart on Passenger Movement in Changi Airport over time
//src = https://www.statista.com/statistics/867835/singapore-number-of-passengers-changi-airport/
var ctx = document.getElementById('Chart1').getContext('2d');

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [{
      label: 'Passenger',
      data: [54.1, 55.45, 58.7, 62.22, 65.63, 68.3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Passenger Movement over the Years',
      fontSize: 18,
      fontColor: 'navy'
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

// Chart for During Covid Travel Restrictions
    // src = https://ourworldindata.org/grapher/international-travel-covid?tab=table

    var ctx = document.getElementById('Chart3').getContext('2d');

  var Chart3 = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: ['Australia', 'China', 'India', 'Indonesia', 'United Kingdom'],
          axis : 'y',
          datasets: [{
              data: [2.632, 2.335, 2.307, 2.229,1.437],
              label : 'Scale from 0 to 4 with 4 being a complete closure of borders',
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
                text: 'Travel Restrictions in Top Destinations',
                fontSize: 18,
                fontColor: 'navy'
            },
              scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            description : {
              text : "This graph is on a scale from ",
              fontColor : 'navy'
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

// Chart for Analysis of Pre and Post Covid 
// src = https://www.statista.com/statistics/1045378/singapore-aircraft-departures-changi-airport/

  var ctx = document.getElementById('Chart4').getContext('2d');
  const labeltravel = ["Departures"]
  const dataObj = {
    labels: labeltravel,
    datasets: [{
      label: 'Departures in 2019',
      data: [191.178],
      backgroundColor: 'rgb(186,85,211)',
  },
  {
      label: 'Departures in 2022',
      data: [108.422],
      backgroundColor:'rgb(154,205,50)',
  },
]
  }
  var Chart4 = new Chart(ctx,
   {
    type: 'bar',
    data: dataObj,
    options: {
      responsive: true,
      scales:{
        xAxes:[{
          stacked:true,
        }],
        yAxes:[{
          stacked:true,
      }]
    }
  }
    })

// Chart for Analysis of Pre and Post Covid  (Change in Prices of Flights to Beijing)
// src = https://www.google.com/travel/flights/search?tfs=CBwQAhojagwIAhIIL20vMDZ0MnQSCjIwMjMtMDQtMjdyBwgBEgNQVkcaI2oHCAESA1BWRxIKMjAyMy0wNS0wMXIMCAISCC9tLzA2dDJ0cAGCAQsI____________AUABSAGYAQE
var time = ['60 days ago', '40 days ago', '20 days ago', 'Today']
var Prices = [652, 575, 421, 414];

  new Chart("Chart5", {
      type: 'line',
      data : {
        labels : time,
        datasets : [
          {
          data : Prices,
          label : 'One-way price from Singapore to Shanghai',
          borderWidth : 3,
          borderColor: "#3e95cd",
          fill: false
        },
      ],
    },
      options: {
        title: {
            display: true,
            text: 'One-way price from Singapore to Shanghai',
            fontSize: 18,
            fontColor: 'navy'
        },
    }
  });


      


