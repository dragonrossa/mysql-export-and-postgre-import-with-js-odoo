//ETL(extract, transform, load) for timesheet export
//What is ETL?
//A properly designed ETL system extracts data from the source systems, enforces data quality and consistency standards,
// conforms data so that separate sources can be used together, and finally delivers data in a presentation-ready format so that application developers
//can build applications and end users can make decisions
//******************************************************* */
//This js file exports timesheet from mysql database and translates it into format for export timesheet into postgre database
//Example of export
//INSERT INTO public.account_analytic_line(create_uid, user_id,account_id,company_id, write_uid,amount,unit_amount,date,create_date,write_date,
//partner_id,name,product_uom_id,amount_currency,is_timesheet) VALUES(1,39,258, 1, 1, 0,'9.45','02/04/2019','02/04/2019','02/04/2019',40,'/', 5, 0, true);
//after that export to txt file and use it in sql client like Dbeaver (just Alt + X to use it as a script)

const mysql = require('promise-mysql');
const fs = require('fs');
const sac_mysql = ['project', 'employee', 'datum', 'razlika', 'task', 'ime', 'projekt']

async function main() {

    try {

        var conn = await mysql.createConnection({
            host: "192.168.0.4",
            user: "root",
            password: "password", //your password
            database: "database", // your database
            port: 32770 // im connecting on database in Docker, I put different port but there is port forwarding on 3306
        })

        let user_info = await conn.query("SELECT ?? from timesheets", [sac_mysql]);



        let razlika_vrijeme2 = await conn.query("select REPLACE(FORMAT((CONVERT(razlika,decimal(8)))/10,4),',', '.')+1 as razlika from timesheets2");



        function Ubaci() {



            for (var i = 0; i < 4064; i++) {

                var project_id = user_info[i].project;
                var employee = user_info[i].employee;
                var datum = user_info[i].datum;
                var razlika = user_info[i].razlika;
                var task = user_info[i].task;
                var ime = user_info[i].ime;
                var projekt = user_info[i].projekt;
                var vrijeme = razlika_vrijeme2[i].razlika;



                var new_company_id = 0;



                // project id,input 12, output 258, this is company_id
                switch (project_id) {
                    case 4:
                        new_company_id = 250;
                        break;
                    case 6:
                        new_company_id = 252;
                        break;
                    case 7:
                        new_company_id = 253;
                        break;
                    case 8:
                        new_company_id = 254;
                        break;
                    case 9:
                        new_company_id = 255;
                        break;
                    case 11:
                        new_company_id = 257;
                        break;
                    case 12:
                        new_company_id = 258;
                        break;
                    case 28:
                        new_company_id = 274;
                        break;
                    case 51:
                        new_company_id = 297;
                        break;
                    case 63:
                        new_company_id = 309;
                        break;
                    case 64:
                        new_company_id = 310;
                        break;
                    case 65:
                        new_company_id = 311;
                        break;
                    case 67:
                        new_company_id = 313;
                        break;
                    case 73:
                        new_company_id = 319;
                        break;
                    case 77:
                        new_company_id = 323;
                        break;
                    case 78:
                        new_company_id = 324;
                        break;
                    case 79:
                        new_company_id = 325;
                        break;
                    case 81:
                        new_company_id = 327;
                        break;
                    case 82:
                        new_company_id = 328;
                        break;
                    case 83:
                        new_company_id = 329;
                        break;
                    case 84:
                        new_company_id = 330;
                        break;
                    case 85:
                        new_company_id = 331;
                        break;
                    case 86:
                        new_company_id = 332;
                        break;
                    case 87:
                        new_company_id = 333;
                        break;
                    case 89:
                        new_company_id = 335;
                        break;
                    case 90:
                        new_company_id = 336;
                        break;
                    case 93:
                        new_company_id = 339;
                        break;
                    case 95:
                        new_company_id = 341;
                        break;
                    case 96:
                        new_company_id = 342;
                        break;
                    case 97:
                        new_company_id = 343;
                        break;
                    case 98:
                        new_company_id = 344;
                        break;
                    case 102:
                        new_company_id = 348;
                        break;
                    case 103:
                        new_company_id = 349;
                        break;
                    case 104:
                        new_company_id = 350;
                        break;
                    case 105:
                        new_company_id = 351;
                        break;
                    case 106:
                        new_company_id = 352;
                        break;
                    case 107:
                        new_company_id = 353;
                        break;
                    case 108:
                        new_company_id = 354;
                        break;
                    case 110:
                        new_company_id = 356;
                        break;
                    case 111:
                        new_company_id = 357;
                        break;
                    case 112:
                        new_company_id = 358;
                        break;
                    case 113:
                        new_company_id = 359;
                        break;
                    case 114:
                        new_company_id = 360;
                        break;
                    default:
                        console.log("Not working")
                }






                var new_employee_id = 0;
                var new_user_id = 0;

                switch (employee) { //to je id zaposlenika odnosno partner_id


                    case 1:
                        new_employee_id = 58
                        new_user_id = 57
                        break;
                    case 2:
                        new_employee_id = 59;
                        new_user_id = 58;
                        break;
                    case 3:
                        new_employee_id = 60;
                        new_user_id = 59;
                        break;
                    case 4:
                        new_employee_id = 61;
                        new_user_id = 60;
                        break;
                    case 5:
                        new_employee_id = 62;
                        new_user_id = 61;
                        break;
                    case 6:
                        new_employee_id = 64;
                        new_user_id = 63
                        break;
                    case 7:
                        new_employee_id = 66;
                        new_user_id = 65
                        break;
                    case 8:
                        new_employee_id = 67;
                        new_user_id = 66
                        break;
                    case 9:
                        new_employee_id = 34;
                        new_user_id = 33
                        break;
                    case 10:
                        new_employee_id = 73;
                        new_user_id = 72
                        break;
                    case 11:
                        new_employee_id = 52;
                        new_user_id = 51
                        break;
                    case 12:
                        new_employee_id = 74;
                        new_user_id = 73
                        break;
                    case 13:
                        new_employee_id = 75;
                        new_user_id = 74
                        break;
                    case 14:
                        new_employee_id = 76;
                        new_user_id = 75
                        break;
                    case 15:
                        new_employee_id = 77;
                        new_user_id = 76
                        break;
                    case 16:
                        new_employee_id = 78;
                        new_user_id = 77
                        break;
                    case 17:
                        new_employee_id = 81;
                        new_user_id = 80
                        break;
                    case 18:
                        //here was user but he has no record in postgres
                        break;
                    case 19:
                        new_employee_id = 82;
                        new_user_id = 81
                        break;
                    case 20:
                        new_employee_id = 83;
                        new_user_id = 82
                        break;
                    case 21:
                        new_employee_id = 85;
                        new_user_id = 84
                        break;
                    case 22:
                        new_employee_id = 89;
                        new_user_id = 88
                        break;
                    case 23:
                        new_employee_id = 90;
                        new_user_id = 89
                        break;
                    case 24:
                       
                        new_employee_id = 91;
                        new_user_id = 90
                        break;
                    case 25:
                        new_employee_id = 92;
                        new_user_id = 91
                        break;
                    case 26:
                        new_employee_id = 93;
                        new_user_id = 92
                        break;
                    case 27:
                        new_employee_id = 94;
                        new_user_id = 93
                        break;
                    case 28:
                        new_employee_id = 13;
                        new_user_id = 12
                        break;
                    case 29:
                        new_employee_id = 14;
                        new_user_id = 13
                        break;
                    case 30:
                        new_employee_id = 15;
                        new_user_id = 14
                        break;
                    case 31:
                        new_employee_id = 16;
                        new_user_id = 15
                        break;
                    case 32:
                        new_employee_id = 20;
                        new_user_id = 19
                        break;
                    case 33:
                        new_employee_id = 21;
                        new_user_id = 20
                        break;
                    case 34:
                        new_employee_id = 23;
                        new_user_id = 22
                        break;
                    case 35:
                        new_employee_id = 25;
                        new_user_id = 24
                        break;
                    case 36:
                        new_employee_id = 27;
                        new_user_id = 26
                        break;
                    case 37:
                        new_employee_id = 28;
                        new_user_id = 27
                        break;
                    case 38:  
                        new_employee_id = 97;
                        new_user_id = 96
                        break;
                    case 39:
                        new_employee_id = 29;
                        new_user_id = 28
                        break;
                    case 40:
                        new_employee_id = 95;
                        new_user_id = 94
                        break;
                    case 41:
                        new_employee_id = 31;
                        new_user_id = 30
                        break;
                    case 42:
                        new_employee_id = 32;
                        new_user_id = 31
                        break;
                    case 43:
                        new_employee_id = 33;
                        new_user_id = 32
                        break;
                    case 44:
                        new_employee_id = 99;
                        new_user_id = 98
                        break;
                    case 45:
                        new_employee_id = 35;
                        new_user_id = 34
                        break;
                    case 46:
                        new_employee_id = 36;
                        new_user_id = 35
                        break;
                    case 47:
                        new_employee_id = 37;
                        new_user_id = 36
                        break;
                    case 48:
                        new_employee_id = 38;
                        new_user_id = 37
                        break;
                    case 49:
                        new_employee_id = 39;
                        new_user_id = 38
                        break;
                    case 50:
                        new_employee_id = 40;
                        new_user_id = 39;
                        break;
                    case 51:
                        new_employee_id = 41;
                        new_user_id = 40
                        break;
                    case 52:
                        new_employee_id = 42;
                        new_user_id = 41
                        break;
                    case 53:
                        new_employee_id = 43;
                        new_user_id = 42
                        break;
                    case 54:
                        new_employee_id = 44;
                        new_user_id = 43
                        break;
                    case 55:
                        new_employee_id = 46;
                        new_user_id = 45
                        break;
                    case 56:
                        new_employee_id = 49;
                        new_user_id = 48
                        break;
                    case 57:
                        new_employee_id = 51;
                        new_user_id = 50
                        break;
                    case 58:
                        new_employee_id = 56;
                        new_user_id = 55
                        break;
                    case 59:
                        new_employee_id = 57;
                        new_user_id = 56
                        break;
                    case 60:
                        new_employee_id = 98;
                        new_user_id = 97
                        break;
                    case 61:
                        new_employee_id = 12;
                        new_user_id = 11
                        break;
                    case 62:
                        new_employee_id = 8;
                        new_user_id = 7
                        break;
                    case 63:
                        new_employee_id = 108;
                        new_user_id = 107
                        break;
                    case 64:
                        new_employee_id = 72;
                        new_user_id = 71
                        break;
                    case 65:
                         //here was user but he has no record in postgres
                        break;
                    case 66:
                        //here was user but he has no record in postgres
                        break;
                    case 67: 
                        new_employee_id = 69;
                        new_user_id = 68
                        break;
                    case 68:
                          //here was user but he has no record in postgres
                        break;
                    case 69:
                         //here was user but he has no record in postgres
                        break;
                    case 70:
                          //here was user but he has no record in postgres
                        break;
                    case 71:
                         //here was user but he has no record in postgres
                        break;
                    case 72:
                       //here was user but he has no record in postgres
                        break;
                    case 73:
                        new_employee_id = 6;
                        new_user_id = 1
                        break;
                    case 74:
                        new_employee_id = 68;
                        new_user_id = 67
                        break;
                    case 75:
                       //here was user but he has no record in postgres
                        break;
                    case 76:
                        new_employee_id = 908
                        new_user_id = 109
                        break;
                    case 77:
                        new_employee_id = 54;
                        new_user_id = 53;
                        break;
                    case 78:
                        new_employee_id = 24;
                        new_user_id = 23
                        break;
                    case 79:
                        new_employee_id = 10;
                        new_user_id = 9
                        break;
                    case 80:
                        new_employee_id = 20;
                        new_user_id = 19
                        break;
                    case 81:
                        new_employee_id = 18;
                        new_user_id = 17
                        break;
                    case 83:
                        new_employee_id = 26;
                        new_user_id = 25
                        break;
                    case 84:
                        new_employee_id = 45;
                        new_user_id = 44
                        break;
                    case 85:
                        new_employee_id = 47;
                        new_user_id = 46
                        break;
                    case 86:
                        new_employee_id = 30;
                        new_user_id = 29
                        break;
                    case 87:
                        new_employee_id = 53;
                        new_user_id = 52
                        break;
                    case 89:
                        new_employee_id = 50;
                        new_user_id = 49
                        break;
                    case 90:
                        new_employee_id = 7;
                        new_user_id = 6
                        break;
                    case 91:
                        new_employee_id = 9;
                        new_user_id = 8
                        break;
                    case 93:
                        new_employee_id = 11;
                        new_user_id = 10
                        break;
                    case 94:
                        new_employee_id = 17;
                        new_user_id = 16
                        break;
                    case 96:
                        new_employee_id = 19;
                        new_user_id = 18
                        break;
                    case 97:
                        new_employee_id = 22;
                        new_user_id = 21
                        break;
                    case 98:
                        new_employee_id = 55;
                        new_user_id = 54
                        break;
                    case 99:
                        new_employee_id = 48;
                        new_user_id = 47
                        break;
                    case 100:
                          //here was user but he has no record in postgres
                        break;
                    case 101:
                        new_employee_id = 70;
                        new_user_id = 69
                        break;
                    case 102:
                        new_employee_id = 79;
                        new_user_id = 78
                        break;
                    case 103:
                        new_employee_id = 100;
                        new_user_id = 99
                        break;
                    case 104:
                        new_employee_id = 101;
                        new_user_id = 100
                        break;
                    case 105:
                        new_employee_id = 102;
                        new_user_id = 101
                        break;
                    case 106:
                        new_employee_id = 103;
                        new_user_id = 102
                        break;
                    case 107:
                        new_employee_id = 104;
                        new_user_id = 103
                        break;
                    case 108:
                        new_employee_id = 71;
                        new_user_id = 70
                        break;
                    case 109:
                        new_employee_id = 105;
                        new_user_id = 104
                        break;
                    case 110:
                        new_employee_id = 106;
                        new_user_id = 105
                        break;
                    case 111:
                        new_employee_id = 107;
                        new_user_id = 106
                        break;
                }


                var user1 = "INSERT INTO public.account_analytic_line(create_uid, user_id,account_id,company_id, write_uid,amount,unit_amount,date,create_date,write_date, partner_id,name,product_uom_id,amount_currency,is_timesheet) VALUES("
                var user2 = "1," + new_user_id + "," + new_company_id + ", 1, 1, 0,'" + vrijeme + "','" + datum + "','" + datum + "','" + datum + "'," + new_employee_id + "," + "'/', 5, 0, true"
                var end = ");"

                console.log(user1 + user2 + end)


                fs.appendFile('export_timesheet.txt', user1 + user2 + end + "\n", (err) => {
                    if (err) throw err;

                });

            }


            console.log('The "timesheets" were appended to file!');



        }

        Ubaci();

    } catch (error) {

        console.error(error)


    }

    finally {

    }


}

main();


