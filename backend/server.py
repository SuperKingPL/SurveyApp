# Import librays
from flask import Flask
import pymongo
from services.snowflakeService import *

# Define application environment
app = Flask(__name__)
mongoClient = pymongo.MongoClient("mongodb://localhost:27017")

print(GenerateSnowflake())

# Run application
app.run(port=5000)