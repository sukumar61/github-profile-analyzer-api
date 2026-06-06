# GitHub Profile Analyzer API

## Overview

A Node.js and Express.js backend application that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.

## Features

* Analyze GitHub profiles by username
* Store profile insights in MySQL
* Prevent duplicate profile analysis
* Fetch all analyzed profiles
* Fetch a specific profile by ID
* Input validation and error handling

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=github_analyzer
```

4. Start the server

```bash
npm run dev
```

## API Endpoints

### Analyze Profile

POST /api/profiles/analyze

Request:

```json
{
  "username": "octocat"
}
```

### Get All Profiles

GET /api/profiles

### Get Profile By ID

GET /api/profiles/:id

## Database Schema

Table: github_profiles

* id
* username
* name
* followers
* following
* public_repos
* avatar_url
* profile_url
* analyzed_at

## Author

Renukuntla Sukumar
