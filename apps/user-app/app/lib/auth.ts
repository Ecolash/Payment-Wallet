import prisma from "@repo/db/client"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions ={
    providers:[
        Credentials({
            name:'Credentials',
            credentials:{
                name:{label: "Name",type:"text"},
                phone:{ label: "Phone Number", type:"text", placeholder:"12331313"},
                password:{ label: "Password", type:"password"},
                email:{ label: "Email", type:"email",placeholder:"abcd@emaple.com"},
            },
            async authorize(credentials:any){
                const hashedpassword=await bcrypt.hash(credentials.password,10);
                const existing_user= await prisma.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                });
                if(existing_user ){
                    if(existing_user.password){
                        const passwordValidation=await bcrypt.compare(credentials.password,existing_user.password);
                        if(passwordValidation){
                            return {
                                id: existing_user.id.toString(),
                                name: existing_user.name,
                                email: existing_user.email,
                            }
                        }
                        return null;
                    }
                    return null;
                }
                try {
                    const user = await prisma.user.create({
                        data: {
                            name:credentials.name,
                            number: credentials.phone,
                            password: hashedpassword,
                            email: credentials.email,
                        }
                    });
                
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch(e) {
                    console.error(e);
                }
                return null;
            },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({token,session}:any){
            session.user.id=token.sub;
            return session;
        }
    }
}