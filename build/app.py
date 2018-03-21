from flask import Flask, abort, request, jsonify, render_template 
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields

import os
EXEC_DIR = os.getcwd()
os.chdir(os.path.dirname(__file__))
DB_PATH = "sqlite:///{0}/app.db".format(os.getcwd())
os.chdir(EXEC_DIR)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DB_PATH
db = SQLAlchemy(app)

api = Api(app)
ma = Marshmallow(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    alias = db.Column(db.String(80))
    dateofbirth = db.Column(db.String(80))
    category = db.Column(db.String(80))
    ethnicity = db.Column(db.String(80))
    gender = db.Column(db.String(80))
    religion = db.Column(db.String(80))
    nationality = db.Column(db.String(80))
    club = db.Column(db.String(80))
    position = db.Column(db.String(80))          

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User

users_schema = UserSchema(many=True)
user_schema = UserSchema()


db.create_all()

class Profile(Resource):
    def get(self, id):
        user = User.query.get_or_404(id)
        return user_schema.jsonify(user)

    def delete(self, id):
        user = User.query.get_or_404(id)
        db.session.delete(user)
        db.session.commit()
        return jsonify({})

    def put(self, id):
        user = User.query.get_or_404(id)
        user_data = request.get_json()
        for k,v in user_data.items():
            setattr(user, k, v)
        db.session.commit()
        return user_schema.jsonify(user)

class Profiles(Resource):
    def get(self):
        users = User.query.all()
        return users_schema.jsonify(users)

    def post(self):
        rec = request.get_json()
        user = user_schema.load(rec)
        db.session.add(user.data)
        db.session.commit()
        return user_schema.jsonify(user.data)    

api.add_resource(Profile, '/profile/<id>')
api.add_resource(Profiles, '/profile')

@app.route('/')
def index():
   return render_template('index.html', api='')

if __name__ == '__main__':
   app.run()