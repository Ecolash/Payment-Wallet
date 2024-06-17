
import Sidebar from "../../components/ui/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="w-auto h-auto">
      <Sidebar />
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
        {children}
      </div>
    </div>
  );
}
