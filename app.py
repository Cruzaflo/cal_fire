from flask import Flask, render_template
import pandas as pd
app = Flask(__name__)




@app.route("/")
def home():
    return render_template("index.html")

@api.route("/api")
def api():
    return "Welcome to Cal Fire API"

@app.route('/api/test')
def test(): 
    df = pd.read_csv('./data/test.csv')
    return df.to_json()

if __name__ == '__main__':
    app.run(debug=True)