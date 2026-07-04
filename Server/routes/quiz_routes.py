from flask import (
    Blueprint,
    jsonify,
    request
)

from data.questions import (
    questions
)

from models.quiz_model import (
    save_result
)

quiz_routes = Blueprint(
    "quiz_routes",
    __name__
)

@quiz_routes.route(
    "/questions",
    methods=["GET"]
)
def get_questions():

    return jsonify(questions)

@quiz_routes.route(
    "/submit",
    methods=["POST"]
)
def submit():

    data = request.json

    #save_result(data)

    return jsonify({
        "message":
        "Quiz Submitted"
    })