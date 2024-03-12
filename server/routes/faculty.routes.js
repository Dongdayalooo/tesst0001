// hhh
const Controller = require("../controllers/faculty.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // api get faculty
    
    // api create faculty
    app.post (
        "/api/faculty/create",
        Controller.createFaculty

    )



}