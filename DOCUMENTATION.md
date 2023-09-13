# API Documentation

This documentation provides comprehensive information about the Person API, including request/response formats, sample API usage, known limitations, and instructions for setting up and deploying the API locally.

### Table of Contents

1. Dynamic Parameter Handling
2. API Endpoints
3. Request/Response Formats
4. Sample API Usage
5. Limitations and Assumptions
6. Setup and Deployment

---
<br>

## 1. Dynamic Parameter Handling
You can use either the **_id, or the name property** as an identifier to process operations directly in the endpoint as a path parameter.
<br>
Replace the `:user_id` with the name or id of the resource you're targeting in the endpoints below.
<br><br>
Also, the API accepts paths with spaces. The URI component from the browser is then decoded before processing. For example, if you pass in "Mark Essien", as in:
`GET /api/Mark Essien`, the value recieved as `GET /api/Mark%20Essien` is decoded in the api, and all operations can be performed using the name.

---
<br>

## 2. API Endpoints

- **Create a Person**
  - **Endpoint:** `POST /api`
  - **Description:** Create a new person with a name.

- **Get a Person**
  - **Endpoint:** `GET /api/:user_id`
  - **Description:** Retrieve a person by their ID or name.

- **Update a Person**
  - **Endpoint:** `PATCH /api/:user_id`
  - **Description:** Update the name of an existing person by their ID or name.

- **Delete a Person**
  - **Endpoint:** `DELETE /api/:user_id`
  - **Description:** Delete a person by their ID or name.

---
<br>

## 3. Request/Response Formats

### Create a Person (POST)

- **Request Body:**
  - `name` (String, required): The name of the person to create.

- **Response:**
  - `200 OK`:
    ```json
    {
      "_id": "5f74ce84f3f6f129c7c4148d",
      "name": "John Doe",
      "__v": 0
    }
    ```

### Get a Person (GET)

- **Response:**
  - `200 OK`:
    ```json
    {
      "_id": "5f74ce84f3f6f129c7c4148d",
      "name": "John Doe",
      "__v": 0
    }
    ```

### Update a Person (PATCH)

- **Request Body:**
  - `name` (String, required): The updated name for the person.

- **Response:**
  - `200 OK`:
    ```json
    {
      "_id": "5f74ce84f3f6f129c7c4148d",
      "name": "Jane Doe",
      "__v": 0
    }
    ```

### Delete a Person (DELETE)

- **Response:**
  - `200 OK`:
    ```json
    {
      "message": "Person deleted successfully"
    }
    ```

### 3. Sample API Usage

#### Create a Person (POST)

**Request:**

```shell
curl -X POST http://localhost:3000/api/persons \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
