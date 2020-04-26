-- cleanup, children first 

delete from club_comment; 
delete from club_member_movie_comment;
delete from club_member_movie;
delete from club_member_map;
delete from club_member; 
delete from club; 

-- club 

insert into club (club_name, createdAt, updatedAt) 
values ('Our First Club', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into club (club_name, createdAt, updatedAt) 
values ('Brians Club', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- member 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Brian', 'McLaughlin', 'bcm@email.com', 'bmclaugh', 'password1', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Kristin', 'Jenkins', 'kj@email.com', 'kjenkins', 'password2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Michael', 'Bradford', 'mb@email.com', 'mbradford', 'password3', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Raquel', 'Acevedo', 'ra@email.com', 'racevedo', 'password4', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Maddy', 'Shrews', 'ms@email.com', 'mshrews', 'password5', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Ranjan', 'Biswas', 'rb@email.com', 'rbiswas', 'password6', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Sabrina', 'Koumoin', 'sk@email.com', 'skoumoin', 'password7', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, `password`, createdAt, updatedAt) 
values ('Lawrence', 'Kirk', 'lk@email.com', 'lkirk', 'password8', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

-- club member map 

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Brian'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP() 
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Kristin'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Raquel'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Michael'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Maddy'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Brian'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Kristin'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Raquel'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Michael'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Maddy'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Sabrina'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Ranjan'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at, createdAt, updatedAt)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Lawrence'),
  CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()
);

-- club member movie 

insert into club_member_movie 
   (movie_status, title, synopsis, tmdb_id, poster_url, reviews_url, createdAt, updatedAt, fk_club_id, fk_member_id)
values
   ('OPEN', 'Titanic', 'Boat misses its ETA', 1, 'http://posterurl.com', 'http://reviewsurl.com', 
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Brian'));
   
insert into club_member_movie 
   (movie_status, title, synopsis, tmdb_id, poster_url, reviews_url, createdAt, updatedAt, fk_club_id, fk_member_id)
values
   ('OPEN', 'Titanic', 'Boat misses its ETA', 1, 'http://posterurl.com', 'http://reviewsurl.com', 
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Raquel'));
   
insert into club_member_movie 
   (movie_status, title, synopsis, tmdb_id, poster_url, reviews_url, createdAt, updatedAt, fk_club_id, fk_member_id)
values
   ('OPEN', 'Caddyshack', 'Golf, gophers', 1, 'http://posterurl.com', 'http://reviewsurl.com', 
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Brian'));
   
-- club member movie comment 

-- club comment 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('Club 1 comment', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Our First Club'), 
   (select id from club_member where first_name = 'Brian')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('Club 1 comment. Can we retrieve this?', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Our First Club'), 
   (select id from club_member where first_name = 'Raquel')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('Club 1 comment. Can we retrieve this?', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Our First Club'), 
   (select id from club_member where first_name = 'Maddy')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('Club 2 comment', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Brian')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('More to say about club 2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Michael')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('More to say about club 2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Maddy')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('More to say about club 2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Raquel')
); 

insert into club_comment (comment, createdAt, updatedAt, fk_club_id, fk_member_id)
values ('More to say about club 2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Kristin')
); 

/* 

select * from club 

select * from club_member

select * from club_member_map

select * from club_member_movie

select * from club_member_movie_comment

select * from club_comment

*/
