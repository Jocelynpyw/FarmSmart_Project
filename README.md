# FarmSmart
farmsmart is an api that allows us to build and e-learning application for the farmer

## Stack

using python in backend

## EndPoints

- Student Endpoint
  *  post method
    ```
    users/register/student
    ```
       {
        "id": id,
        "birthDate":birth,
        "phone":phone,
        "user":{
            "id":id,
            "first_name":first_name,
            "email":email,
            "password":password,
            "is_lecturer":false,
            "is_superuser":false,
            "is_student":True"
        }
    }
  * delete method
  ```
  users/student/1/delete
  ```
  * update method
  ```
  users/update/1/student
  ```
  * get method list 
  ```
  users/student
  ```
  * get method detail on a student
  ```
  users/student/1
  ```

- Lecturer Endpoint
  *  post method
    ```
    users/register/lecturer
    ```
       {
        "registration": id,
        "adress":adress,
        "birthDate":birth,
        "phone":phone,
        "user":{
            "id":id,
            "first_name":first_name,
            "email":email,
            "password":password,
            "is_lecturer":True,
            "is_superuser":False,
            "is_student":False
        }
    }
  * delete method
  ```
  users/delete/1/lecturer
  ```
  * update method
  ```
  users/update/1/lecturer
  ```
  * get method list 
  ```
  users/lecturer
  ```
  * get method detail on a lecturer
  ```
  users/lecturer/1
  ```
  
  - Course Endpoint
  *  post method
    ```
    {
            "id":id,
            "lecturer":1,
        }
    /register/course
    ```
  * delete method
  ```
  /course/1/delete
  ```
  * update method
  ```
  /course/1/update
  ```
  * get method list 
  ```
  /
  ```
  * get method detail on a student
  ```
  /1/detail
  ```

## Deployement
  - [FarmSmart.com](https://farm-smart.onrender.com)


## Social network
- [linkedin](https://linkedin.com/in/jeanpetit)

## Authors

@jeanpetitt