$(function () {
    Highcharts.chart('#shadyside-hours', {

        title: {
            text: 'Popular Times for Shadyside Location'
        },

        subtitle: {
            text: 'Average customers per day'
        },

        xAxis: {
            title: {
                text: 'Hour'
            },
            categories: {
                ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
            }
        },

        yAxis: {
            title: {
                text: 'Average number of customers'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        tooltop: {
            valueSuffix: ' customers per day (on average)'
        },

        series: [{
            name: 'Shadyside',
            data: [10, 8, 24, 5, 7, 32, 16, 18, 27, 39, 32]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
});