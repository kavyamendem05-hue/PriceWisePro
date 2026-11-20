FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN javac PriceWiseServer.java

EXPOSE 10000

CMD ["java", "PriceWiseServer"]
