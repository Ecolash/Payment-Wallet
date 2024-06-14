import React from "react";

export const Center=({ children }: { children: React.ReactNode })=>{
    return <div className="flex justify-center flex-col w-screen h-screen">
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}