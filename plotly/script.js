//basic bar chart using plotly library
let animalData = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar'
    }
  ];
Plotly.newPlot("animalsDiv", animalData);
//same but we specify a color and opacity for marker and a color and width for line. play around  with diff colors and try the diff ways of specifying the color such as by name, hex, and rgb.
let beerData = [
  {
    x: ['bud light', 'miller light', 'coors light'],
    y: [200000, 183000, 23007],
    type: 'bar',
    marker: {
      color: 'aqua',
      opacity: 0.6,
      line: {
        color: 'red',
        width: 1.5
      }
    }
  }
];
Plotly.newPlot("beerDiv", beerData);
//now for a line chart
var xDataAnimalsL = [
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013]
];

var yDataAnimalsL = [
  [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
  [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
  [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50]
];

var colors = ['rgba(115,115,115,1)', 'rgba(49,130,189, 1)',
  'rgba(189,189,189,1)'
];

var lineSize = [2, 2, 4, 2];

var labels = ['giraffes', 'orangutans', 'monkeys'];

var data = [];

for ( var i = 0 ; i < xDataAnimalsL.length ; i++ ) {
  var result = {
    x: xDataAnimalsL[i],
    y: yDataAnimalsL[i],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors[i],
      width: lineSize[i]
    }
  };
  var result2 = {
    x: [xDataAnimalsL[i][0], xDataAnimalsL[i][11]],
    y: [yDataAnimalsL[i][0], yDataAnimalsL[i][11]],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: colors[i],
      size: 12
    }
  };
  data.push(result, result2);
}

var layout = {
  showlegend: false,
  height: 600,
  width: 600,
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: true,
    linecolor: 'rgb(204,204,204)',
    linewidth: 2,
    autotick: false,
    ticks: 'outside',
    tickcolor: 'rgb(204,204,204)',
    tickwidth: 2,
    ticklen: 5,
    tickfont: {
      family: 'Arial',
      size: 12,
      color: 'rgb(82, 82, 82)'
    }
  },
  yaxis: {
    showgrid: false,
    zeroline: false,
    showline: false,
    showticklabels: false
  },
  autosize: false,
  margin: {
    autoexpand: false,
    l: 100,
    r: 20,
    t: 100
  },
  annotations: [
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.0,
      y: 1.05,
      xanchor: 'left',
      yanchor: 'bottom',
      text: 'Animal popularity over time',
      font:{
        family: 'Arial',
        size: 30,
        color: 'rgb(37,37,37)'
      },
      showarrow: false
    },
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.5,
      y: -0.1,
      xanchor: 'center',
      yanchor: 'top',
      text: 'Source: imagination i.e., totally made up',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(150,150,150)'
      }
    }
  ]
};

for( var i = 0 ; i < xDataAnimalsL.length ; i++ ) {
  var result = {
    xref: 'paper',
    x: 0.05,
    y: yDataAnimalsL[i][0],
    xanchor: 'right',
    yanchor: 'middle',
    text: labels[i] + ' ' + yDataAnimalsL[i][0] +'%',
    showarrow: false,
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    }
  };
  var result2 = {
    xref: 'paper',
    x: 0.95,
    y: yDataAnimalsL[i][11],
    xanchor: 'left',
    yanchor: 'middle',
    text: yDataAnimalsL[i][11] +'%',
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    },
    showarrow: false
  };

  layout.annotations.push(result, result2);
}

Plotly.newPlot("animalsDivL", data, layout);