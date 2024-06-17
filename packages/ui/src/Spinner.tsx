import { Center } from "./Center"

export const LoadingSpinner=()=>{
    return <div className="flex min-h-screen justify-center">
        <Center><div className="rounded-md h-12 w-12 border-4 border-t-4 bg-navred animate-spin absolute"></div></Center>
    </div>
}