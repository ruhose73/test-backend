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
FOREIGN KEY (creator) REFERENCES Users (uid) ON DELETE CASCADE
);

CREATE TABLE UserTags (
id SERIAL PRIMARY KEY,
creatorId UUID NOT NULL,
tagId INT NOT NULL,
FOREIGN KEY (creatorId) REFERENCES Users (uid) ON DELETE CASCADE,
FOREIGN KEY (tagId) REFERENCES Tags (id) ON DELETE CASCADE
);

SELECT uid FROM users WHERE email = $1 OR nickname = $2

INSERT INTO users (uid, email, password, nickname) VALUES ($1,$2,$3,$4)

SELECT * FROM users WHERE email = $1

SELECT * FROM tags  ORDER BY (name) LIMIT 10 OFFSET 1;

SELECT tags.id, tags.creator, tags.name, tags.sortorder, users.nickname, users.uid
FROM tags LEFT OUTER JOIN users on tags.creator = users.uid
ORDER BY (sortorder) LIMIT 100 OFFSET 10;




