from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.team22db

db.books.insert_one