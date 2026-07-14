const chart = document.getElementById('salesChart');

if(chart){

new Chart(chart, {

type: 'bar',

data: {

labels: [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun'
],

datasets: [{

label: 'Monthly Sales',

data: [
500,
900,
1200,
800,
1500,
2000
]

}]

},

options: {

responsive:true,

plugins:{

legend:{
display:true
}

}

}

});

}
