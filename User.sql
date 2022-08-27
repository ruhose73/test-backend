CREATE TABLE Users (
uid UUID PRIMARY KEY,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
nickname VARCHAR(30) NOT NULL
);

CREATE TABLE Tags (
id SERIAL PRIMARY KEY,
creator UUID NOT NULL,
name VARCHAR(40) NOT NULL,
sortOrder INT DEFAULT 0,
FOREIGN KEY (creator) REFERENCES Users (uid)
);

CREATE TABLE UserTags (
id SERIAL PRIMARY KEY,
creatorId UUID NOT NULL,
tagId INT NOT NULL,
FOREIGN KEY (creatorId) REFERENCES Users (uid),
FOREIGN KEY (tagId) REFERENCES Tags (id)
);

SELECT uid FROM users WHERE email = $1 OR nickname = $2

INSERT INTO users (uid, email, password, nickname) VALUES ($1,$2,$3,$4)

SELECT * FROM users WHERE email = $1



