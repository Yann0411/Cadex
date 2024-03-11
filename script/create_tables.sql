BEGIN;

DROP TABLE IF EXISTS name, adjective, complement, verb, sentence CASCADE;

CREATE TABLE name (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE verb (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE complement (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE adjective (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);


CREATE TABLE sentence (
    id SERIAL PRIMARY KEY,
    sentence TEXT NOT NULL ,
    name_id INT NOT NULL REFERENCES name(id),
    verb_id INT NOT NULL REFERENCES verb(id),
    complement_id INT NOT NULL REFERENCES complement(id),
    adjective_id INT NOT NULL REFERENCES adjective(id),
    correction TEXT,
    score INT NOT NULL DEFAULT 0
);


COMMIT;
