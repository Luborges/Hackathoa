const express = require("express");
const middleware = require("../middlewares");
const routes = express.Router();
const UserController = require("../controller/UserController");
const EventController = require("../controller/EventController");

routes.post("/users/create", UserController.store);
routes.post("/users/login", UserController.login);

routes.get("/events", middleware, EventController.index);
routes.get("/events/:id", middleware, EventController.byId);
routes.post("/events", middleware, EventController.store);

module.exports = routes;
