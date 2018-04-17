google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);


function drawChart(obj) {
    var data = google.visualization.arrayToDataTable([
        ['Roller', 'Mest relevanta tips'],
        [obj.role1.title, obj.role1.recommendations],
        [obj.role2.title, obj.role2.recommendations],
        [obj.role3.title, obj.role3.recommendations],

    ]);

    var options = {
        title: 'Success Stories',

        backgroundColor: {
            fill: '#fff'
        },
        titleTextStyle: {
            fontSize: 24,
            color: '#424241'
        },
        pieSliceBorderColor: "transparent",
        legend: {
            position: 'right'
        },
        slices: {
            0: {
                color: '#43bab6'
            },
            1: {
                color: '#30a4a7'
            },
            2: {
                color: '#299da2'
            }
        }

    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
