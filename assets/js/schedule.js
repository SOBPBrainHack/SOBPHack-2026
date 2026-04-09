// get modal
var modal = document.getElementById('infoModal');
let eventsModel = [];


$(function(){
    eventsModel = scheduleData;

    function showGenericModal(title, message) {
        // set content to passed parameters
        $(".modal-title").empty();
        $(".modal-body").empty();
        $(".modal-title").html(title);
        $(".modal-body").html(message);

       $("#infoModal").modal({
            //disable clicking on backdrop to close
            backdrop: 'static',
            //disable using the keyboard to close
            keyboard: false
        });

    }

    function getEventById(id) {
        let eventIdx = _.findIndex(eventsModel, function(events) {
            return events.id === id;
        });

        if (eventIdx != -1) return _.cloneDeep(eventsModel[eventIdx]);
        else return null;
    }

    // show event details
    $(".table-responsive").on("click", ".sEvent", function(e) {
        e.stopPropagation();

        let clickedEvent = getEventById($(this).attr('data-id'));

        let modalTemplate = _.template(
            '<h3 class="time">Time: </h3> <%- scheduleData.time %><br>' +
            '<h3 class="details">Details: </h3> <%- scheduleData.details %>');

        // show event detail
        showGenericModal(
            clickedEvent.event,
            modalTemplate({ 'scheduleData':clickedEvent })
        )});
  });



// Data
  let scheduleData = [
    {
        id: "registration",
        event: "Room Opens & Registration",
        time: "08:00 - 09:00",
        details: "Arrive, register, and get settled for Day 1 of SOBP BrainHack 2026."
    }, {
        id: "intro",
        event: "Introduction to Brainhacking for Everyone",
        time: "09:00 - 09:30",
        details: "A brief introduction to what BrainHacking is all about and how to make the most of the next two days."
    }, {
        id: "pitches",
        event: "'Project' Pitches",
        time: "09:30 - 10:30",
        details: "Pitch your project to attract collaborators! Attendees are encouraged to bring their own projects or join others."
    }, {
        id: "coffee1",
        event: "Coffee Break",
        time: "10:30 - 10:45",
        details: "Coffee break with time to socialize."
    }, {
        id: "resources",
        event: "Brief Review of Key Resources for BrainHacking",
        time: "10:45 - 11:45",
        details: "An overview of key tools, datasets, and resources available for BrainHacking projects."
    }, {
        id: "discussion",
        event: "Group Discussion and Questions",
        time: "11:45 - 12:00",
        details: "Open discussion and Q&A session."
    }, {
        id: "lunch1",
        event: "Lunch (On-Site)",
        time: "12:00 - 13:00",
        details: "On-site lunch included with registration."
    }, {
        id: "hack-tue-pm",
        event: "UnTutorials and Hacking",
        time: "13:00 - 15:00",
        details: "Afternoon hacking session with optional unconference-style tutorials."
    }, {
        id: "coffee2",
        event: "Coffee Break",
        time: "15:00 - 15:15",
        details: "Short coffee break to recharge."
    }, {
        id: "hack-tue-late",
        event: "Free Hacking",
        time: "15:15 - 16:45",
        details: "Continue working on your projects with your team."
    }, {
        id: "recaps",
        event: "Brief Project Recaps",
        time: "16:45 - 17:00",
        details: "Quick updates from teams on Day 1 progress."
    }, {
        id: "social",
        event: "Socializing and Dinner",
        time: "18:00 - 20:00",
        details: "Evening social event to foster community building. Location: TBD."
    }, {
        id: "room-opens",
        event: "Room Opens",
        time: "08:30 - 09:00",
        details: "Day 2 room opens. Get settled and prepare for the day."
    }, {
        id: "checkin",
        event: "Project Check In",
        time: "09:00 - 09:30",
        details: "Brief check-in on project progress from Day 1."
    }, {
        id: "hack-wed-am",
        event: "UnTutorials and Hacking",
        time: "09:30 - 10:30",
        details: "Morning hacking session with optional tutorials."
    }, {
        id: "coffee3",
        event: "Coffee Break",
        time: "10:30 - 10:45",
        details: "Coffee break."
    }, {
        id: "hack-wed-am2",
        event: "UnTutorials and Hacking",
        time: "10:45 - 12:00",
        details: "Continue hacking and tutorials."
    }, {
        id: "lunch2",
        event: "Lunch (On-Site)",
        time: "12:00 - 13:00",
        details: "On-site lunch included with registration."
    }, {
        id: "hack-wed-pm",
        event: "UnTutorials and Hacking",
        time: "13:00 - 15:00",
        details: "Afternoon hacking session."
    }, {
        id: "coffee4",
        event: "Coffee Break",
        time: "15:00 - 15:15",
        details: "Short coffee break."
    }, {
        id: "hack-wed-late",
        event: "Free Hacking",
        time: "15:15 - 16:00",
        details: "Final round of hacking."
    }, {
        id: "reports",
        event: "Project Reports and Feedback",
        time: "16:00 - 17:00",
        details: "Teams present their project outcomes, share feedback, and discuss future plans."
    }
];
