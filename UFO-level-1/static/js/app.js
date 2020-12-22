// from data.js
var tableData = data;

// reference to the table body
var tbody = d3.select("tbody");

// loops through each ufo object in data provided
tableData.forEach((ufo) => {

	// use d3 to append one table row
	var row = tbody.append("tr");

	// iterates through keys and values
	Object.entries(ufo).forEach(([key, value]) => {

		// use d3 to append one cell
		var cell = row.append("td");
		cell.text(value);
	});
});

// select button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("form");

// create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler for the form
function runEnter() {

  // prevent refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // get value of input
  var inputValue = inputElement.property("value");

  // filter
	var results = tableData.filter(ufo => ufo.datetime === inputValue);
	
	// clear table
	tbody.html("");

	// if there was no sighting append it
	if (results.length === 0) {
		tbody.text(`No ufo sightings on ${inputValue}.`);
	}

	// if there was a sighting append it
	else {
		results.forEach((ufo) => {
			var row = tbody.append("tr");
			Object.entries(ufo).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		});
	};
};