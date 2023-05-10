CREATE TABLE Tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  description TEXT,
  due_date DATE,
  is_completed BOOLEAN
);

CREATE TABLE Categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE Task_categories (
  task_id INTEGER REFERENCES Tasks(id),
  category_id INTEGER REFERENCES Categories(id),
  PRIMARY KEY (task_id, category_id)
);

