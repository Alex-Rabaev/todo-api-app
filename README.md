
# TODO API App

A minimal backend API for managing tasks using Node.js, TypeScript, Express, Drizzle ORM, and SQLite.

## 🛠 Setup Instructions

### Run with Docker

1. Build the Docker image:

   ```bash
   docker build -t todo-api-app .
   ```

2. Start the container:

   ```bash
   docker run -p 3000:3000 todo-api-app
   ```

The API will be available at: `http://localhost:3000`

---

## 📌 API Endpoints

### ➕ Create a Task

* **Method:** `POST`
* **URL:** `http://localhost:3000/tasks`
* **Request Body:**

```json
{
  "text": "Buy groceries",
  "status": "in progress"
}
```

* **Response:** `201 Created`

```json
{
  "id": 1,
  "text": "Buy groceries",
  "status": "in progress"
}
```

---

### ✅ Update Task Status

* **Method:** `PUT`
* **URL:** `http://localhost:3000/tasks/1`
* **Request Body:**

```json
{
  "status": "completed"
}
```

* **Response:**
  * `200 OK` on success
  * `404 Not Found` if task does not exist

```json
{
  "message": "Updated"
}
```
or
```json
{
  "error": "Not found"
}
```

---

### ❌ Delete a Task

* **Method:** `DELETE`

* **URL:** `http://localhost:3000/tasks/1`

* **Response:**

  * `200 OK` on success
  * `404 Not Found` if task does not exist

```json
{
  "message": "Deleted"
}
```
or
```json
{
    "error": "Not found"
}
```


---

### 📄 Get All Tasks or by Status

* **Method:** `GET`

* **URL (all tasks):** `http://localhost:3000/tasks`

* **URL (by status):**
  `http://localhost:3000/tasks?status=in%20progress`
  or
  `http://localhost:3000/tasks?status=completed`

* **Response:** `200 OK`

```json
[
  {
    "id": 1,
    "text": "Buy groceries",
    "status": "completed"
  },
  {
    "id": 2,
    "text": "Do laundry",
    "status": "in progress"
  }
]
```

---

## ✅ Valid Status Values

* `"in progress"`
* `"completed"`

Any other value will return `400 Bad Request`.
