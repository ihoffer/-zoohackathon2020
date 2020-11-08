from flask import Flask, jsonify, send_file
from helper import fetch_similar_tables, fetch_table

app = Flask(__name__)


@app.route("/product_details/<product_id>")
def serve_table(product_id):
    if product_id == "null":
        return "", 204
    product_table = fetch_table(product_id)
    return product_table


@app.route("/similar_products/<product_id>")
def serve_similar_tables(product_id):
    if product_id == "null":
        return "", 204
    product_tables = fetch_similar_tables(product_id)
    return jsonify(product_tables)


@app.route("/cdn/<path>")
def serve_image(path):
    return send_file(filename_or_fp=f"images/{path}")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
