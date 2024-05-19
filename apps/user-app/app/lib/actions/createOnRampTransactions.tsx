"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(provider:string,amount:number){
    const session=await getServerSession(authOptions);
    if(!session.user || !session.user.id){
        return{
            message:"Unauthorized"
        }
    }
    const token=(Math.random()*1000).toString();
    await prisma.onRampTransaction.create({
        data:{
            provider,
            status:"Processing",
            token:token,
            amount:amount*100,
            startTime:new Date(),
            userId:Number(session.user.id)
        }
    });
    return {
        message:"Done"
    }
}