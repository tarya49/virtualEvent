class Event {
    constructor(id, eventName, eventLink, duration, topic) {
        this.id = Event.getEventId();
        this.eventName = eventName;
        this.eventLink = eventLink;
        this.duration = duration;
        this.topic = topic;
    }
    static getEventId() {
        if (eventList.length == 0)
            return 0;
        var lastEventId = eventList[eventList.length - 1].id;
        return lastEventId + 1;
    }
}

var eventList = [];
var eventRegisterList = [];

function addEvent(eventName, eventLink, duration, topic) {
    var newEvent = Event(eventName, eventLink, duration, topic);
    eventList.push(newEvent);
}

function isEventAdded(eventName) {
    return eventList.some(event => event.name === eventName);
}

function updateEvent(eventId, newEventName, newEventLink, newDuration, newTopic) {
    var eventIndex = eventList.findIndex(event => event.eventId == eventId);
    if (eventIndex == -1) {
        return "not found Event";
        eventList[eventIndex].eventName = newEventName;
        eventList[eventIndex].eventLink = newEventLink;
        eventList[eventIndex].topic = newTopic;
        eventIndex[eventIndex].duration = newDuration;
        return "event updated succesfully";
    }
}

function eventRegister(eventId) {
    eventRegisterList.push(eventId);
}
function isEventRegister(eventId) {
    return eventRegisterList.some(event_Id => event_Id == eventId);
}

export const addEvent = addEvent;
export const isEventAdded = isEventAdded;
export const updateEvent = updateEvent;
export const eventRegister = eventRegister;
export const isEventRegister = isEventRegister;