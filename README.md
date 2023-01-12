# MedicalAssignment

## Dokumentasi API

| No | Route                  | Keterangan                                                                         |
|----|------------------------|------------------------------------------------------------------------------------|
| 1  | /                      | Menampilkan Halaman Home                                                           |
| 2  | /patients              | Menampilkan Halaman Patient dan list dari ListPatient                              |
| 3  | /patients/detail/:id   | Menampilkan Halaman DetailPatient yang didalamnya berupa Form detail data.         |
| 4  | /patients/update/:id   | Menampilkan Halaman EditPatient yang didalamnya berupa Form untuk merubah data.    |
| 5  | /patients/create       | Menampilkan Halaman CreatePatient yang didalamnya berupa Form untuk tambah data.   |
| 6  | /patients/delete/:id   | Parameter yang menghapus salah satu data.                                          |
| 7  | /doctors               | Menampilkan Halaman Doctor dan list dari ListDoctor                                |
| 8  | /doctors/detail/:id    | Menampilkan Halaman DetailDoctor yang didalamnya berupa Form detail data.          |
| 9  | /doctors/update/:id    | Menampilkan Halaman EditDoctor yang didalamnya berupa Form untuk merubah data.     |
| 10 | /doctors/create        | Menampilkan Halaman CreateDoctor yang didalamnya berupa Form untuk tambah data.    |
| 11 | /doctors/delete/:id    | Parameter yang menghapus salah satu data.                                          |
| 12 | /wards                 | Menampilkan Halaman Ward dan list dari ListWard                                    |
| 13 | /wards/detail/:id      | Menampilkan Halaman DetailWard yang didalamnya berupa Form detail data.            |
| 14 | /doctors/update/:id    | Menampilkan Halaman EditWard yang didalamnya berupa Form untuk merubah data.       |
| 15 | /wards/create          | Menampilkan Halaman CreateWard yang didalamnya berupa Form untuk tambah data.      |
| 16 | /wards/delete/:id      | Parameter yang menghapus salah satu data.                                          |
| 17 | /assistants            | Menampilkan Halaman Assistant dan list dari ListAssistant                          |
| 18 | /assistans/detail/:id  | Menampilkan Halaman DetailAssistant yang didalamnya berupa Form detail data.       |
| 19 | /assistants/update/:id | Menampilkan Halaman EditAssistant yang didalamnya berupa Form untuk merubah data.  |
| 20 | /assistants/create     | Menampilkan Halaman CreateAssistant yang didalamnya berupa Form untuk tambah data. |
| 21 | /assistants/delete/:id | Parameter yang menghapus salah satu data.                                          |

## Script DB

> Patient
>
>> ```
>>  npx sequelize-cli model:generate --name Patient --attributes name:string,address:string,age:integer
>> ```


> Ward
>
>> ```
>> npx sequelize-cli model:generate --name Ward --attributes name:string,category:string,availability:boolean,assistantId:integer
>> ```


> Assistant
>
>> ```
>> npx sequelize-cli model:generate --name Assistant --attributes name:string,password:string,address:string
>> ```


> Doctor
>
>> ```
>> npx sequelize-cli model:generate --name Doctor --attributes name:string,address:string,experties:integer
>> ```

> PatientMedicate
>
>> ```
>> npx sequelize-cli model:generate --name PatientMedicate --attributes seen_by:date,patientId:integer,doctorId:integer
>> ```

> PatientTreat
>
>> ```
>> npx sequelize-cli model:generate --name PatientTreat --attributes medicine:string,patientId:integer,assistantId:integer,wardId:integer
>> ```
