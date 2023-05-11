CREATE TABLE priorities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  priority_id INTEGER REFERENCES priorities(id),
  category_id INTEGER REFERENCES categories(id),
  user_id INTEGER REFERENCES users(id)
);

-- Insert priority
INSERT INTO priorities (name)
VALUES ('high');

-- Insert category
INSERT INTO categories (name)
VALUES ('study');

-- Insert user
INSERT INTO users (username, password)
VALUES ('Igor Vereshchagin', 'mypassword');

-- Insert task
INSERT INTO tasks (description, due_date, completed, priority_id, category_id, user_id)
VALUES ('Make the to-do list database', '2023-05-11', FALSE, 1, 1, 1);