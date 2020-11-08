import boto3
from boto3.dynamodb.conditions import Attr, Key
from botocore.config import Config

_CONFIG = Config(
    region_name="eu-west-1",
    signature_version="v4",
    retries={"max_attempts": 10, "mode": "standard"},
)
_AWS_ACCESS_KEY_ID = "removedFromGit"
_AWS_SECRET_ACCESS_KEY = "removedFromGit"


def fetch_table(product_id):
    table = _create_table()
    response = table.query(KeyConditionExpression=Key("docId").eq(product_id))
    return response["Items"][0]


def fetch_similar_tables(product_id):
    current_product_table = fetch_table(product_id)
    category = current_product_table["category"]
    doc_id = current_product_table["docId"]
    table = _create_table()
    response = table.scan(
        FilterExpression=Attr("category").eq(category) & Attr("docId").ne(doc_id)
    )
    return response["Items"]


def _create_table():
    resource = boto3.resource(
        "dynamodb",
        aws_access_key_id=_AWS_ACCESS_KEY_ID,
        aws_secret_access_key=_AWS_SECRET_ACCESS_KEY,
        config=_CONFIG,
    )
    return resource.Table("zoohackathon")
