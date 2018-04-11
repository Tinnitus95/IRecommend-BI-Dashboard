google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Role', 'Hired'],
        ['Scrum Master', 112],
        ['Front End Developer', 462],
        ['Back End Developer', 452],
        ['Full Stack Developer', 122],
        ['Chief Editor', 57]
    ]);

    var options = {
        title: 'Bästa Rollerna',

        backgroundColor: {
            fill: '#fff'
        },
        titleTextStyle: {
            fontSize: 24
        },
        pieSliceBorderColor: "transparent",
        legend: {
            position: 'bottom'
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
            },
            3: {
                color: '#1f929b'
            },
            4: {
                color: '#158794'
            },
            5: {
                color: '#017486'
            }
        }

    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
