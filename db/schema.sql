DROP DATABASE IF EXISTS viewing_party_db;

CREATE DATABASE viewing_party_db;

USE viewing_party_db;

CREATE TABLE club (
  id                 int NOT NULL AUTO_INCREMENT,
  club_name          varchar (255) NOT NULL,
  createdAt          datetime NOT NULL,
  updatedAt          datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE club_member (
  id                 int NOT NULL AUTO_INCREMENT,
  first_name         varchar (128) NOT NULL,
  last_name          varchar (128) NOT NULL,
  email              varchar (128) NOT NULL,
  user_id            varchar (16) NOT NULL,
  `password`		 varchar (16) NOT NULL,
  createdAt          datetime NOT NULL,
  updatedAt          datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `club_member_map` (
  id                 int NOT NULL AUTO_INCREMENT,
  `linked_at`        datetime NOT NULL,
  `fk_club_id`       int NOT NULL,
  KEY `fk_club_idx` (`fk_club_id`),
  CONSTRAINT `fk_cmm_club` FOREIGN KEY (`fk_club_id`) REFERENCES `club` (`id`), 
  `fk_member_id`     int NOT NULL,
  KEY `fk_member_idx` (`fk_member_id`),
  CONSTRAINT `fk_cmm_member` FOREIGN KEY (`fk_member_id`) REFERENCES `club_member` (`id`),
  createdAt          datetime NOT NULL,
  updatedAt          datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; 
   
CREATE TABLE club_member_movie (
  id                 int NOT NULL AUTO_INCREMENT,
  movie_status       varchar (16) NOT NULL,  
  title              varchar (1024), 
  tmdb_id            int NOT NULL, 
  synopsis           varchar (1024), 
  poster_url         varchar (128),
  reviews_url        varchar (128), 
  createdAt          datetime NOT NULL,  
  updatedAt          datetime NOT NULL,  
  `fk_club_id` int NOT NULL,
  KEY `fk_club_idx` (`fk_club_id`),
  CONSTRAINT `fk_cmmo_club` FOREIGN KEY (`fk_club_id`) REFERENCES `club` (`id`), 
  `fk_member_id` int NOT NULL,
  KEY `fk_member_idx` (`fk_member_id`),
  CONSTRAINT `fk_cmmo_member` FOREIGN KEY (`fk_member_id`) REFERENCES `club_member` (`id`), 
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE club_member_movie_comment (
  id                 int NOT NULL AUTO_INCREMENT,
  comment            varchar (1024),
  createdAt          datetime NOT NULL,  
  updatedAt          datetime NOT NULL,  
  `fk_club_id` int NOT NULL,
  KEY `fk_club_idx` (`fk_club_id`),
  CONSTRAINT `fk_cmmc_club` FOREIGN KEY (`fk_club_id`) REFERENCES `club` (`id`), 
  `fk_member_id` int NOT NULL,
  KEY `fk_member_idx` (`fk_member_id`),
  CONSTRAINT `fk_cmmc_member` FOREIGN KEY (`fk_member_id`) REFERENCES `club_member` (`id`), 
  `fk_movie_id` int NOT NULL,
  KEY `fk_movie_idx` (`fk_movie_id`),
  CONSTRAINT `fk_cmmc_member_movie` FOREIGN KEY (`fk_movie_id`) REFERENCES `club_member_movie` (`id`), 
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  
CREATE TABLE club_comment (
  id                 int NOT NULL AUTO_INCREMENT,
  comment            varchar (1024),
  createdAt          datetime NOT NULL,  
  updatedAt          datetime NOT NULL,  
  `fk_club_id` int NOT NULL,
  KEY `fk_club_idx` (`fk_club_id`),
  CONSTRAINT `fk_cc_club` FOREIGN KEY (`fk_club_id`) REFERENCES `club` (`id`), 
  `fk_member_id` int NOT NULL,
  KEY `fk_member_idx` (`fk_member_id`),
  CONSTRAINT `fk_cc_member` FOREIGN KEY (`fk_member_id`) REFERENCES `club_member` (`id`), 
  PRIMARY KEY (id)
)  ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
