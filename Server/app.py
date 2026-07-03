from flask import Flask
from flask_cors import CORS

from routes.quiz_routes import (
    quiz_routes
)

app = Flask(__name__)

CORS(app)

app.register_blueprint(
    quiz_routes
)

@app.route("/")
def home():
    return (
      "Quiz Backend Running"
    )

if __name__ == "__main__":
    app.run(debug=True)