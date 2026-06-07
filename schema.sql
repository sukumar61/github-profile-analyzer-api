CREATE TABLE github_profiles (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    avatar_url TEXT,
    profile_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);