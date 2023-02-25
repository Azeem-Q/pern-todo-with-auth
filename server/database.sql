CREATE DATABASE authtodolist;

-- users

CREATE Table
    users(
        user_id UUID DEFAULT uuid_generate_v4(),
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL UNIQUE,
        user_password VARCHAR(255) NOT NULL,
        PRIMARY KEY (user_id)
    );

-- todos

CREATE TABLE
    todos(
        todo_id SERIAL,
        user_id UUID,
        description VARCHAR(255) NOT NULL,
        PRIMARY KEY (todo_id),
        Foreign Key (user_id) REFERENCES users(user_id)
    );

-- fake users data

INSERT INTO
    users (
        user_name,
        user_email,
        user_password
    )
VALUES (
        'Jacob',
        'jacob@gmail.com',
        'kthl8822'
    );

-- fake todos data

INSERT INTO
    todos (user_id, description)
VALUES (
        '21ae1a7f-45db-4333-b017-2770fd0a62ba',
        'clean room'
    );