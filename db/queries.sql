use viewing_party_db; 

-- get all clubs 
select 
   id as club_id,
   club_name, 
   createdat, 
   updatedat 
from club 

-- get all members 
select 
   cm.id as member_id, 
   cm.first_name, 
   cm.last_name, 
   Concat (cm.first_name, ' ', cm.last_name) as full_name, 
   cm.email, 
   cm.user_id
from club_member cm  

select * from club_member_map where fk_member_id = 1

-- get all clubs for a member  
select c.id as club_id, c.club_name, cmm.fk_member_id as member_id, cmm.linked_at
from club c, club_member_map cmm where cmm.fk_club_id = c.id and cmm.fk_member_id = 1

select cm.* from club_member cm, club_member_map cmm 
where cm.id = cmm.fk_member_id and cmm.fk_club_id = 1

-- get all members in a club 
select 
   c.id as club_id, 
   c.club_name, 
   cm.id as member_id, 
   cm.first_name, 
   cm.last_name, 
   Concat (cm.first_name, ' ', cm.last_name) as full_name, 
   cm.email, 
   cm.user_id, 
   cmm.linked_at
from club c, club_member_map cmm, club_member cm  
where cm.id = cmm.fk_member_id and cmm.fk_club_id = c.id and c.id = 2

-- get all movies for a member in a club 
select 
   c.id as club_id, 
   c.club_name, 
   cm.id as member_id, 
   cm.first_name, 
   cm.last_name, 
   Concat (cm.first_name, ' ', cm.last_name) as full_name, 
   cm.email, 
   cm.user_id, 
   cmm.linked_at
from 
   club_member cm left join club_member_movie cmmo on cmmo.fk_member_id = cm.id, 
   club c, 
   club_member_map cmm   
where cm.id = 17 and cm.id = cmm.fk_member_id and cmm.fk_club_id = c.id and c.id = 7

select * from club_comment

delete from club_comment where id in (7,8)
