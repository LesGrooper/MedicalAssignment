# MedicalAssignment

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
