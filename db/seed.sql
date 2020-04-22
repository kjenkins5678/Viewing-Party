-- cleanup, children first 

delete from club_comment; 
delete from club_member_movie_comment;
delete from club_member_movie;
delete from club_member_map;
delete from club_member; 
delete from club; 

-- club 

insert into club (club_name, created_at, updated_at) 
values ('Our First Club', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into club (club_name, created_at, updated_at) 
values ('Brians Club', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- member 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Brian', 'McLaughlin', 'bcm@email.com', 'bmclaugh', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Kristin', 'Jenkins', 'kj@email.com', 'kjenkins', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Michael', 'Bradford', 'mb@email.com', 'mbradford', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Raquel', 'Acevedo', 'ra@email.com', 'racevedo', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Maddy', 'Shrews', 'ms@email.com', 'mshrews', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Ranjan', 'Biswas', 'rb@email.com', 'rbiswas', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Sabrina', 'Koumoin', 'sk@email.com', 'skoumoin', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

insert into club_member (first_name, last_name, email, user_id, created_at, updated_at) 
values ('Lawrence', 'Kirk', 'lk@email.com', 'lkirk', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); 

-- club member map 

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Brian'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Kristin'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Raquel'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Michael'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Our First Club'),
  (select id from club_member where first_name = 'Maddy'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Brian'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Kristin'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Raquel'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Michael'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Maddy'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Sabrina'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Ranjan'),
  CURRENT_TIMESTAMP()
);

insert into club_member_map (fk_club_id, fk_member_id, linked_at)
values (
  (select id from club where club_name = 'Brians Club'),
  (select id from club_member where first_name = 'Lawrence'),
  CURRENT_TIMESTAMP()
);


