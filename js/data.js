$(function () {
    Highcharts.chart('container-graph', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Most commonly bought products, January 2019'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Burnt Almond Torte Cake',
            y: 57.3,
            sliced: true,
            selected: true
        }, {
            name: 'Pepperoni Rolls',
            y: 13.5
        }, {
            name: 'Italian Bread',
            y: 8.7
        }, {
            name: 'Egg Bread',
            y: 7.1
        }, {
            name: 'Egg Tart',
            y: 9.8
        }, {
            name: 'Other',
            y: 3.6
        }]
    }]
  });


});