
var canvasElement = document.getElementById("cookieChart2");
var config = {
    type: "line",
    data: {
        labels: ["Blockindustry", "ChainMeta", "Blockchain Geo", "CryptoStar"],
        datasets: [{
            label: "Growth Rate",
            data: [5, 3, 10, 12],
            borderColor: 'black',
            fill: false
        }]
    },
};

var cookieChart = new Chart(canvasElement, config);