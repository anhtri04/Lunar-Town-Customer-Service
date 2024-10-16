/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Sample data for events
const events = [
    { name: "Event 1", date: "2022-10-15", fee: 20, start_date: "2022-10-14" },
    { name: "Event 2", date: "2022-11-20", fee: 25, start_date: "2022-11-18" },
    // Add more events as needed
];

// Function to display events in the specified list
function displayEvents(eventsList, eventType) {
    eventsList.innerHTML = ""; // Clear the list first
    events.forEach(event => {
        const eventItem = document.createElement("li");
        eventItem.textContent = `${event.name} - Date: ${event.date} - Fee: $${event.fee} - Start Date: ${event.start_date}`;
        eventsList.appendChild(eventItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const eventForm = document.getElementById("event-form");
    const pastEventsList = document.getElementById("past-events-list");
    const upcomingEventsList = document.getElementById("upcoming-events-list");

    displayEvents(pastEventsList, "past");
    displayEvents(upcomingEventsList, "upcoming");

    eventForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const eventName = document.getElementById("event-name").value;
        const eventDate = document.getElementById("event-date").value;
        const eventFee = document.getElementById("event-fee").value;
        const eventStartDate = document.getElementById("event-start-date").value;

        // Add the new event to the events array
        events.push({ name: eventName, date: eventDate, fee: eventFee, start_date: eventStartDate });

        // Update the events lists
        displayEvents(pastEventsList, "past");
        displayEvents(upcomingEventsList, "upcoming");

        // Clear the form fields
        eventForm.reset();
    });
});