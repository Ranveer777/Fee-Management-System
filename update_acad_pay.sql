delimiter //

create trigger update_acad_pay

after update on applied_scholarship
for each row
begin

if(new.scholarship_status = 1) then

	update view13 set acad_pay_amount = acad_pay_amount - scholarship_amount where stud_id = new.stud_id;
end if;

end //
delimiter ;

