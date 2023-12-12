docker build --no-cache -f SQL\Dockerfile.PostgreSql -t logistika-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t logistika-java/app ../../..
