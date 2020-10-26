interface ITask{
    task: string;
    date: string;
}

interface ITasks {
    tasks: Array<ITask>;
}

interface IUserInfo {
    username: string;
    password: string | number;
    todolists: ITasks;
}

interface ICredientialDetails {
    user1: IUserInfo;
    user2: IUserInfo;
    user3: IUserInfo;
};

export const credientialDetails: ICredientialDetails = {
    user1:{
        username:"Raj",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
        }
    },
    user2:{
        username:"Govind",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
            
        }
    },
    user3:{
        username:"Rajesh",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
            
        }
    }
}