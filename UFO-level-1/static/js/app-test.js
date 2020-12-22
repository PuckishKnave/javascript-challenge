// from data.js
var tableData = data;

// get references to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// add event listener to search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// add event listener to the reset button
$resetBtn.addEventListener("click", handleResetButtonClick);

// Build table with non-filtered data
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      // Get current address object and fields
      var address = tableData[i];
      console.log(address)
      var fields = Object.keys(address);
      // Create new row in tbody, set index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For each field in address object, create new cell and set inner text to be current value at current address field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }
  
  // Build search table for filtered data
  function handleSearchButtonClick() {
    var filterDate = $dateInput.value;
    
    // Filter on date
    if (filterDate != "") {
      tableData = data.filter(function (address) {
        var addressDate = address.datetime;
        return addressDate === filterDate;
      });
    }
    else { tableData };
  
    renderTable();
  }
  
  // Clear all the fields
  function handleResetButtonClick(){
    renderTable();
  }
  
  // Render the table for the first time on page load
  renderTable();