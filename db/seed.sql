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

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Brian', 'McLaughlin', 'bcm@email.com', 'bmclaugh', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Kristin', 'Jenkins', 'kj@email.com', 'kjenkins', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Michael', 'Bradford', 'mb@email.com', 'mbradford', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Raquel', 'Acevedo', 'ra@email.com', 'racevedo', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Maddy', 'Shrews', 'ms@email.com', 'mshrews', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Ranjan', 'Biswas', 'rb@email.com', 'rbiswas', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Sabrina', 'Koumoin', 'sk@email.com', 'skoumoin', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, password, createdAt, updatedAt) 
values ('Lawrence', 'Kirk', 'lk@email.com', 'lkirk', 'pwd', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

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
   ('OPEN', 'Caddyshack', 'Golf, gophers', 2, 'http://posterurl.com', 'http://reviewsurl.com', 
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   (select id from club where club_name = 'Brians Club'), 
   (select id from club_member where first_name = 'Brian'));
   
-- club member movie comment 

insert into club_member_movie_comment (comment, createdAt, updatedAt, fk_movie_id, fk_club_id, fk_member_id)
select  
   concat (case 
   when fk_member_id = 1 then 'Brian says: '
   else 'Raquel says: ' 
   end, 'I loved it, it was better than Cats, Id see it again and again and again'),
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   id, 
   fk_club_id, 
   fk_member_id
from club_member_movie where tmdb_id = 1;
   
insert into club_member_movie_comment (comment, createdAt, updatedAt, fk_movie_id, fk_club_id, fk_member_id)
select  
   concat (case 
   when fk_member_id = 1 then 'Brian says: '
   else 'Raquel says: ' 
   end, 'I loved it, it was better than Cats, Id see it again and again and again'),
   CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 
   id, 
   fk_club_id, 
   fk_member_id
from club_member_movie where tmdb_id = 2;
   
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

update club_member_movie set tmdb_id = 2 where title = 'Caddyshack'

alter table club_member add password varchar (16) not null

select * from club 

select * from club_member

update club_member set password = 'pwd'

select * from club_member_map

select * from club_member_movie

select * from club_member_movie_comment

select * from club_comment


select
   cmmc.comment, cmmc.createdAt as comment_dt, 
   cmm.id as movie_id, cmm.movie_status, cmm.title, cmm.tmdb_id, cmm.synopsis, cmm.poster_url, cmm.reviews_url, 
   cmm.fk_member_id, cm.first_name, cm.last_name, concat (cm.first_name, ' ', cm.last_name) as full_name, 
   c.club_name
from 
   club_member_movie_comment cmmc, 
   club c, 
   club_member cm, 
   club_member_movie cmm 
where 
cmmc.fk_movie_id = cmm.id 
and cmmc.fk_member_id = cmm.fk_member_id 
and cmmc.fk_club_id = cmm.fk_club_id 
and c.id = cmm.fk_club_id 
and cm.id = cmm.fk_member_id 
and cmm.tmdb_id = 1 


*/
