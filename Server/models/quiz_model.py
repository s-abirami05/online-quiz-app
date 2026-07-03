from config.db import (
    score_collection
)

def save_result(data):

    score_collection.insert_one(data)