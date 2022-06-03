async function thisWeeksEvents(date) {

const response = await fetch(`/calendar/${date}`, {
        method: "get"
    });

    const responseData = await response.json();

    renderEvents(responseData.events)

    }