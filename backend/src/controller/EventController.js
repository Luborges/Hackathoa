const Event = require("../models/Event");
const moment = require("moment");

module.exports = {
    async store(req, res) {
        const { name, theme, eventType, logo, prize, rules, faq, subscriptionStart, subscriptionEnd, user } = req.body;

        try {
            const event = await Event.create({
                name,
                theme,
                eventType,
                logo,
                prize,
                rules,
                faq,
                subscriptionStart,
                subscriptionEnd,
                user
            });

            return res.json(event);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Error on create event" });
        }
    },

    async index(req, res) {
        const { user } = req.body
        try {
            const events = await Event.find({
                $or: [
                    { user: user._id },
                    { participants: user._id },
                ]
            }, [], {
                    sort: {
                        subscriptionEnd: -1
                    }
                }).lean()

            const resultEvents = events.map((event) => {
                if (event.user.toString() === user._id) {
                    event.admin = true
                }

                if (moment(event.subscriptionEnd).diff(new Date()) < 0) {
                    event.old = true
                }


                return event
            });

            console.log(resultEvents)

            return res.send(resultEvents)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: 'Error on get event' })
        }
    },

    async byId(req, res) {
        const { id } = req.params
        try {
            const event = await Event.findById(id).lean()

            console.log(event)

            return res.send(event)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: 'Error on get event' })
        }
    },

}
