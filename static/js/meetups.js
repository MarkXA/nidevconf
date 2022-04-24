(async function () {
    const response = await fetch('/data/ni-tech-meetups.json');
    const meetups = JSON.parse(await response.text());

    ko.applyBindings({
        'meetups': meetups.map(m => {
            return {
                'meetupName': m.meetupName,
                'eventName': m.eventName,
                'url': m.url,
                'date': new Date(m.startTime).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }),
                'startTime': new Date(m.startTime).toLocaleTimeString(undefined, { timeStyle: 'short' }),
                'endTime': new Date(m.endTime).toLocaleTimeString(undefined, { timeStyle: 'short' })
            }
        })
    });

    Array.from(document.getElementsByClassName("hide-at-first")).forEach(elt => {
        elt.style.display = 'block';
    });
})();