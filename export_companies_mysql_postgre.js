//this js file exports companies from mysql database and translates it into format for export into postgre database
//Example of export
//INSERT INTO res_partner(name, display_name, company_id, write_uid, create_uid, notify_email, active, id, commercial_partner_id, 
//supplier, is_company, customer, employee) VALUES('K&H GmbH','K&H GmbH',1,1,1,'always','1',228,228,false,false,true,false)
//after that export to txt file and use it in sql client like Dbeaver


const mysql = require('promise-mysql');

const fs = require('fs');

const employees = ['Comp_name', 'Street', 'Postal_code', 'City', 'Phone', 'Fax', 'Cell', 'E-mail', 'Web', 'Business']

const res_partner = ['id', 'name', 'company_id', 'comment', 'function', 'create_date', 'color', 'company_type', 'date',
    'street', 'city', 'display_name', 'zip', 'title', 'country_id', 'parent_id', 'supplier', 'ref',
    'email', 'is_company', 'website', 'customer', 'fax', 'street2',
    'barcode', 'employee', 'credit_limit', 'write_date', 'active', 'tz', 'write_uid',
    'lang', 'create_uid', 'phone, mobile', 'type, use_parent_address', 'user_id',
    'birthdate', 'vat', 'state_id', 'commercial_partner_id', 'notify_email', 'message_last_post',
    'opt_out', 'signup_type', 'signup_expiration', 'signup_token, team_id',
    'last_time_entries_checked', 'debit_limit', 'calendar_last_notif_ack'];

var id = 0;


async function main() {

    try {

        var conn = await mysql.createConnection({
            host: "192.168.0.4", //ip adress
            user: "root", //user of database
            password: "password", //password
            database: "database", //database
            port: 3307 //port of database (MariaDB10)
        })

        let user_info = await conn.query("SELECT ?? from companies", [employees]);

    

        function Ubaci() {




            for (var l = 121, m = 228; l < 1000, m < 1200; l++ , m++) {

                var name = "'" + user_info[l].Comp_name + "',"
                var street = "'" + user_info[l].Street + "',"
                var postal_code = "'" + user_info[l].Postal_code + "',"
                var phone = "'" + user_info[l].Phone + "',"
                var cell = "'" + user_info[l].Fax + "',"
                var e_mail = "'" + user_info[l].E_mail + "',"
                var web = "'" + user_info[l].Web + "',"
                var business = "'" + user_info[l].Business + "'"


                var unesi = "INSERT INTO res_partner(name, display_name, company_id, write_uid, create_uid, notify_email, active, id, commercial_partner_id, supplier, is_company, customer, employee) VALUES("
                var nastavak = name + name + "1,1,1,'always','1',"
                var ide = m + "," + m;
                var nastavaka = ",false,false,true,false"
                var end = ")"

                console.log(unesi + nastavak + ide + nastavaka + end);


                fs.appendFile('export_companies.txt', unesi + nastavak + ide + nastavaka + end +"\n", (err) => {
                    if (err) throw err;

                });




            }



            console.log('The "companies" were appended to file!');




        }

        Ubaci();

    } catch (error) {

        console.error(error)
       

    }

    finally {

    }


}

main();


