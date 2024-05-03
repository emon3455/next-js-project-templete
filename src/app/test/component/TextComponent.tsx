"use client"
import { useGetUserQuery } from '@/Redux/Features/auth/Auth-api-slice';
import Loading from '@/app/loading';
import React from 'react';

const TextComponent = () => {

    const  { isLoading, isSuccess, data: todos, isError, error: todosError }= useGetUserQuery({});
    console.log(todos?.result);
    

    if(isLoading) return <Loading/>

    return (
        <div>
            {
                todos?.result.map((user:any,index:number)=><h1 key={index}>{user.name}</h1>)
            }
        </div>
    );
};

export default TextComponent;