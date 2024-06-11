// // Build the metadata panel
// function buildMetadata(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // get the metadata field


//     // Filter the metadata for the object with the desired sample number


//     // Use d3 to select the panel with id of `#sample-metadata`


//     // Use `.html("") to clear any existing metadata


//     // Inside a loop, you will need to use d3 to append new
//     // tags for each key-value in the filtered metadata.

//   });
// }


function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field
    var metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    var resultArray = metadata.filter(obj => obj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, append new tags for each key-value in the filtered metadata
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// // function to build both charts
// function buildCharts(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the samples field


//     // Filter the samples for the object with the desired sample number


//     // Get the otu_ids, otu_labels, and sample_values


//     // Build a Bubble Chart


//     // Render the Bubble Chart


//     // For the Bar Chart, map the otu_ids to a list of strings for your yticks


//     // Build a Bar Chart
//     // Don't forget to slice and reverse the input data appropriately


//     // Render the Bar Chart

//   });
// }


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var resultArray = samples.filter(obj => obj.id == sample);
    var result = resultArray[0];

    // Get the otu_ids, otu_labels, and sample_values
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // Build a Bubble Chart
    var bubbleLayout = {
      // Add your layout configurations here
    };

    var bubbleData = [{
      // Add your data configurations here
    }];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

    // Build a Bar Chart
    var barData = [{
      // Add your data configurations here
    }];

    var barLayout = {
      // Add your layout configurations here
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);
  });
}


// // function to build both charts
// function buildCharts(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
//     // Get the samples field
//     var samples = data.samples;

//     // Filter the samples for the object with the desired sample number
//     var resultArray = samples.filter(obj => obj.id == sample);
//     var result = resultArray[0];

//     // Get the otu_ids, otu_labels, and sample_values
//     var otu_ids = result.otu_ids;
//     var otu_labels = result.otu_labels;
//     var sample_values = result.sample_values;

//     // Build a Bubble Chart
//     var bubbleLayout = {
//       // Add your layout configurations here
//     };

//     var bubbleData = [{
//       // Add your data configurations here
//     }];

//     // Render the Bubble Chart
//     Plotly.newPlot("bubble", bubbleData, bubbleLayout);

//     // For the Bar Chart, map the otu_ids to a list of strings for your yticks
//     var yticks = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

//     // Build a Bar Chart
//     var barData = [{
//       // Add your data configurations here
//     }];

//     var barLayout = {
//       // Add your layout configurations here
//     };

//     // Render the Bar Chart
//     Plotly.newPlot("bar", barData, barLayout);
//   });
// }


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var resultArray = samples.filter(obj => obj.id == sample);
    var result = resultArray[0];

    // Get the otu_ids, otu_labels, and sample_values
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // Build a Bubble Chart
    var bubbleLayout = {
      // Add your layout configurations here
    };

    var bubbleData = [{
      // Add your data configurations here
    }];

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

    // Build a Bar Chart
    var barData = [{
      // Add your data configurations here
    }];

    var barLayout = {
      // Add your layout configurations here
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);
  });
}


// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
//     // Get the names field
//     let subject_ids = data["names"];
//     console.log(subject_ids);

//     // Use d3 to select the dropdown with id of `#selDataset`
//     let let picker = d3.select("#sel-dataset");
//     replace "#sel-dataset" with the correct ID prefixed with '#'
//     let picker = d3.select("#SELECT_TAG_ID");

//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
//   // Build charts and metadata panel each time a new sample is selected

// }

// // Initialize the dashboard
// init();


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the names field
    let subject_ids = data["names"];
    console.log(subject_ids);

    // Use d3 to select the dropdown with id of `#selDataset`
    let picker = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    subject_ids.forEach((sample) => {
      picker.append("option")
        .text(sample)
        .property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = subject_ids[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();