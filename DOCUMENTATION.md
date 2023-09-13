# API Documentation

This documentation provides comprehensive information about the Person API, including request/response formats, sample API usage, known limitations, and instructions for setting up and deploying the API locally.

### Table of Contents

1. Dynamic Parameter Handling
2. API Endpoints
4. Sample API Usage & Response Formats
5. Limitations and Assumptions
6. Local Setup

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

## 3. Sample API Usage & Response Formats

### Create a Person (POST)
- **Request:**
  - `shell`:
      ```shell
      curl -X POST http://localhost:4000/api \
      -H "Content-Type: application/json" \
      -d '{"name": "John Doe"}'
      ```
    
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
---
<br>

### Get a Person (GET)
- **Request:**
  - `shell`:
      ```shell
      curl http://localhost:4000/api/5f74ce84f3f6f129c7c4148d
      ```

- **Response:**
  - `200 OK`:
    ```json
    {
      "_id": "5f74ce84f3f6f129c7c4148d",
      "name": "John Doe",
      "__v": 0
    }
    ```
---
<br>

### Update a Person (PATCH)
- **Request:**
  - `shell`:
      ```shell
      curl -X PATCH http://localhost:4000/api/5f74ce84f3f6f129c7c4148d \
      -H "Content-Type: application/json" \
      -d '{"name": "Jane Doe"}'
      ```
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
---
<br>


### Delete a Person (DELETE)
- **Request:**
  - `shell`:
      ```shell
      curl -X DELETE http://localhost:4000/api/5f74ce84f3f6f129c7c4148d
      ```
- **Response:**
  - `200 OK`:
    ```json
    {
      "message": "Person deleted successfully"
    }
    ```
---
<br>

### Get a Person (with name instead of id) 
for all of the examples above, you can use the name as well as id in the request.
- **Request:**
  - `shell`:
      ```shell
      curl http://localhost:4000/api/John%20Doe
      ```
- **Response:**
  - `200 OK`:
    ```json
    {
      "_id": "5f74ce84f3f6f129c7c4148d",
      "name": "John Doe",
      "__v": 0
    }
    ```
---
<br>

## 4. Limitations and Assumptions
In the event that there are multiple Person objects with the same name, and you are trying to perform an operation while using the name as an identifier, only one of the Objects will be affected.

 ---
<br>

## 5. Local Setup
This section is already included in the [README.md](https://github.com/Topman-14/hng_stage_two/blob/main/README.md)

1. Clone the repository:
   
    ```
   git clone https://github.com/Topman-14/hng_stage_two.git
2. Navigate to the project directory:
   
    ```
    cd hng_stage_two
3. Install dependencies:
   
   ```
   npm install
4. Create a .env file and configure the MongoDB connection and port number:
   
    ```.env
    PORT=4000
    MONGO_URI="<your_connection_string>"
5. Start the server:
   ```shell
   npm start

The API will be accessible at http://localhost:4000/api/
