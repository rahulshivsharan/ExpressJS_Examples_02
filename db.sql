create table Rahul.Tbl_Employee(
	id number(2) primary key,
	name varchar2(100)
);

create table Rahul.Tbl_Attendance(
	id number(2) primary key,
	log_time Date,
	emp_id number(2) references Rahul.Tbl_Employee (id)	 
);



insert into Rahul.TBL_EMPLOYEE(id,name) values(12,'Venkant Chandran');
insert into Rahul.TBL_EMPLOYEE(id,name) values(14,'Sujoy Ghosh');
insert into Rahul.TBL_EMPLOYEE(id,name) values(24,'Snehal Chavan');
insert into Rahul.TBL_EMPLOYEE(id,name) values(28,'Jigar Patel');


insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(1,to_Date('2019-DEC-22 09:34','YYYY-MON-DD HH24:MI'),12);
insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(2,to_Date('2019-DEC-22 17:00','YYYY-MON-DD HH24:MI'),12);
insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(3,to_Date('2019-DEC-12 09:14','YYYY-MON-DD HH24:MI'),24);
insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(4,to_Date('2019-DEC-12 12:30','YYYY-MON-DD HH24:MI'),24);
insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(5,to_Date('2019-DEC-12 14:00','YYYY-MON-DD HH24:MI'),24);
insert into Rahul.TBL_ATTENDANCE (id,log_time,emp_id) values(6,to_Date('2019-DEC-12 17:30','YYYY-MON-DD HH24:MI'),24);
