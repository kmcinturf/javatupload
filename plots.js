// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.greekSearchResults),
  text: data.map(row => row.greekName),
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.romanSearchResults),
  text: data.map(row => row.romanName),
  name: "Roman",
  type: "bar"
};

// Combining both traces
var traceData = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group"
};

var layout2 = {
  title: "Greek vs Roman gods search results",
  barmode: "stack"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
Plotly.newPlot("plot2", traceData, layout2);

d3.selectAll("#selDataset").on("change", getData);


function getData()
{

  var dropdownmenu = d3.select(`#setDataset`);

  var dataset = parseInt(dropdownMenu.property("value"));

  console.log(dataset)

  if (dataset === 10000)

  { 
    var filterData = data.filter(god => god.romanSearchResults<dataset)
    console.log(filteredData)

  }

  if (dataset === 10000)

  var filterData = data.filter(god => god.romanSearchResultsdataset)
  console.log(filterData)

  Ploty.restyle("plot1","values")
  Ploty.restyle("plot2", "values")



{
}