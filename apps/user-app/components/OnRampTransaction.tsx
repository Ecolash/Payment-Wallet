import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"


export const OnRampTransactions=({
    transactions
}:{
    transactions: {
        time:Date,
        amount:number,
        status:string,
        provider:string
    }[]
})=>{
    if(!transactions.length){
        return <Card title="Recent Transactions">
            <Center>
                No Recent Transactions
            </Center>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t=><div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount/100}
                </div>
            </div>
            )}
        </div>
    </Card>
}