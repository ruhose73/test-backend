CREATE TABLE Users (
uid UUID PRIMARY KEY,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
nickname VARCHAR(30) NOT NULL
);

SELECT uid FROM users WHERE email = $1 OR nickname = $2

INSERT INTO users (uid, email, password, nickname) VALUES ($1,$2,$3,$4)

SELECT * FROM users WHERE email = $1

