from flask import Flask, render_template
from flask import request, jsonify
import pandas as pd
app = Flask(__name__)

# Create some data in the form of a list of dictionaries.
acreage = [
    {'year': 2016,
     'acres_burned': '452406'},
    {'year': 2017,
     'acres_burned': '1455280'},
    {'year': 2018,
     'acres_burned': '1571007'},
    {'year': 2019,
     'acres_burned': '285439'},
    {'year': 2020,
     'acres_burned': '2882362'}
]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/fires-by-county")
def chart_1():
    return render_template("fires_by_county_fig.html")

@app.route("/acreage-by-county")
def chart_2():
    return render_template("acreage_by_county_fig.html")

@app.route("/acreage-by-year")
def chart_3():
    return render_template("acreage_by_year.html")    

app.config["DEBUG"] = True
@app.route('/api', methods=['GET'])
def api_all():
    return jsonify(acreage)
app.run()

if __name__ == '__main__':
    app.run(debug=True)