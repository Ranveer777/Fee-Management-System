delimiter //
create trigger update_fees
after insert on student
for each row
begin
INSERT INTO applied_scholarship VALUE (new.stud_id,3,0);
INSERT INTO academic_payment(stud_id) VALUE (new.stud_id);
UPDATE academic_payment NATURAL JOIN fee_structure SET acad_pay_amount=tution_fee+development_fee+university_fee  WHERE stud_id=new.stud_id and category=new.category and year=new.year;
end //
delimiter ;
