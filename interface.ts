export interface user{
    id: number;
    name: string;
    age: number;
    address?: string
}
let user1:user={id:1,name:"java",age:2};

interface employee extends user{
    salary: number;
}
let employee1:employee={salary:1000,name:"javaScript",age:22,id:10}


export interface login{
    login():user
}