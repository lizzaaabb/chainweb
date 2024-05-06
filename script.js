var canvasElement = document.getElementById("cookieChart")
var config = {
    type: "bar",
    data: {labels: ["Blockindustry", "ChainMeta", "Blockchain Geo", "CryptoStar"], 
    datasets: [{
        label: "Growth Rate", 
        data: [5,3,10,12],
        backgroundColor: 'black',

    }]
},



}

  

var cookieChart = new Chart(canvasElement, config)
