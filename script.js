document.getElementById("add-to-list").addEventListener("click", function() {
    
   // Check if all required fields are filled
    const requiredFields = document.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            allFilled = false;
            field.setCustomValidity("This field is required.");
        } else {
            field.setCustomValidity(""); // Clear error message
        }
    });

    if (!allFilled) {
        alert("Please fill out all required fields.");
        return; // Do not proceed if not all fields are filled
    }

    // Get values from the form
    const theme = document.getElementById("theme").value;
    const programName = document.getElementById("programName").value;
    const partnerName = document.getElementById("partnerName").value;
    const district = document.getElementById("district").value;
    const municipality = document.getElementById("municipality").value;
    const ward = document.getElementById("ward").value;
    const village = document.getElementById("village").value;
    const startDate = document.getElementById("startDate").value;

    // Get the table body
    const tbody = document.querySelector("#mapping-list tbody");

    // Create a new row
    const row = document.createElement("tr");

    // Add cells to the row
    const cells = [
        tbody.children.length + 1,  // Serial Number
        theme,
        programName,
        partnerName,
        district,
        municipality,
        ward,
        village,
        startDate // Include the Date
    ];

    cells.forEach(cellText => {
        const cell = document.createElement("td");
        cell.textContent = cellText;
        row.appendChild(cell);
    });

    // Append the row to the table
    tbody.appendChild(row);

     // Clear the form fields
     document.getElementById("theme").value = "";
     document.getElementById("partnerName").value = "";
     document.getElementById("district").value = "";
     document.getElementById("programName").value = "";
     document.getElementById("municipality").value = "";
     document.getElementById("ward").value = "";
     document.getElementById("village").value = "";
     document.getElementById("startDate").value = "";
});




 // Variable to track the current state
 let isOn = false;

 function toggleMode() {
     if (isOn) {
         // Change to OFF state
         document.body.style.backgroundColor = 'white';
         document.body.style.color = 'black';
         document.getElementById('toggleImage').src = 'off .png'; // Set image to off
     } else {
         // Change to ON state
         document.body.style.backgroundColor = 'black';
         document.body.style.color = 'white';
         document.getElementById('toggleImage').src = 'on.png'; // Set image to on
     }
     // Toggle the state
     isOn = !isOn;
    }