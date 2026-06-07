# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, and MySQL. It integrates with the GitHub Public API to analyze GitHub user profiles, extract useful insights, and store them in a relational database for future retrieval.

## Features

* Analyze GitHub profiles using username
* Fetch data from GitHub Public API
* Store profile insights in MySQL
* Prevent duplicate profile analysis
* Retrieve all analyzed profiles
* Retrieve a specific profile by ID
* Input validation
* Error handling for invalid users and requests

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub Public API

## Project Structure

```text
github-profile-analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── profileController.js
│
├── routes/
│   └── profileRoutes.js
│
├── .env
├── app.js
├── server.js
└── package.json
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd github-profile-analyzer
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=*********
DB_NAME=github_analyzer
```

### Run Application

```bash
npm run dev
```

Server will start at:

```text
http://localhost:5000
```

## API Endpoints

### Analyze GitHub Profile

```http
POST /api/profiles/analyze
```

Request Body:

```json
{
  "username": "octocat"
}
```

Success Response:

```json
{
  "success": true,
  "message": "Profile analyzed successfully"
}
```

### Get All Profiles

```http
GET /api/profiles
```

### Get Profile By ID

```http
GET /api/profiles/:id
```

## Database Schema

Table: `github_profiles`

| Column       | Type      |
| ------------ | --------- |
| id           | INT       |
| username     | VARCHAR   |
| name         | VARCHAR   |
| followers    | INT       |
| following    | INT       |
| public_repos | INT       |
| avatar_url   | TEXT      |
| profile_url  | TEXT      |
| analyzed_at  | TIMESTAMP |

## Error Handling

* Invalid GitHub username
* Duplicate profile analysis
* Invalid profile ID
* Profile not found
* Internal server errors

## Future Improvements

* Repository analytics
* Most starred repository tracking
* Pagination for profile listing
* Update existing profile data

## Author

Renukuntla Sukumar
