from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/wastebins', methods=['GET'])
def get_waste_bins():
    # Sample data for demonstration
    waste_bins = [
        {'id': 1, 'fill_level': 75},
        {'id': 2, 'fill_level': 50}
    ]
    return jsonify(waste_bins)

if __name__ == '__main__':
    app.run(debug=True)
