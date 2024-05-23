import express from 'express';
const addEvent = require('./models/event_model');
const isEventAdded = require('./models/event_model');
const updateEvent = require('./models/event_model');
const eventRegister = require('./models/event_model');
const isEventRegister = require('./models/event_model');
const router = express.Router();

router.post('events', (req, res) => {
    var name = req.body.name;
    var eventLink = req.body.eventLink;
    var topic = req.body.topic;
    var duration = req.body.duration;
    var respondData;
    addEvent(name,eventLink,duration,topic);
    if (isEventAdded(name)) {
        respondData = {
            "message": "Successfully event created",
            "status": 200
        }
    }
    else {
        respondData = {
            "message": "something went wrong",
            "status": 501
        }
    }
    res.json(respondData);
});

router.post('events/:id',(req,res)=>{
    var eventId = req.body.id;
    var eventName = req.body.name;
    var eventLink = req.body.link;
    var eventDuration = req.body.duration;
    var eventTopic = req.body.topic;
    
        respondData = {
            "message":  updateEvent(eventId,eventName,eventLink,eventDuration,eventTopic),
            "status": 200
        }
     
    res.json(respondData);

});

router.post('/events/:id/register',(req,res)=>{
    var event_id = req.params.id;
    eventRegister(event_id);
    if (isEventRegister(event_id)) {
        respondData = {
            "message": "Successfully event created",
            "status": 200
        }
        //send event registration email to user
    }
    else {
        respondData = {
            "message": "something went wrong",
            "status": 501
        }
    }
    res.json(respondData);

});

module.exports = router;

