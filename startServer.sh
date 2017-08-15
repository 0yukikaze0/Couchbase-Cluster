docker run -d \
    -p 8091-8093:8091-8093 \
    -e ADMINISTRATOR_USERNAME=Administrator \
    -e ADMINISTRATOR_PWD=password \
    -e BUCKET=default \
    -e BUCKET_PASSWORD= \
    --network="CBNET" \
    --name CBSVR1 couchbase-clustered