import { Suspense } from "react";
import Navbar from "../../components/NavBar";
import Loading from "./loading";

export default function Layout({children}:{children:React.ReactNode;}):JSX.Element{
    return (
    <div className="w-auto h-auto">
        <Navbar/>
        <Suspense fallback={<Loading />}>
        <div className="pt-4 pb-14 md2:px-4 md2:pt-14 flex content-start">
          {children}
        </div>
        </Suspense>
    </div>
    );
}
