import Navbar from "../../components/NavBar";

export default function Layout({children}:{children:React.ReactNode;}):JSX.Element{
    return (
    <div className="w-auto h-auto">
        <Navbar/>
        <div className="pt-4 pb-14 md2:px-4 md2:pt-14 flex content-start">
          {children}
        </div>
    </div>
    );
}
