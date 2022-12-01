import Dashbord from "./Dashbord";
import Header from "./Header";
import Nav from "./Nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl ">
      <div className='grid grid-cols-9 '>
        <Nav />
        <div className='max-h-screen col-span-7 overflow-y-scroll md:col-span-5 scrollbar-hide'>
          <Header />
          <div>{children}</div>
        </div>
        <Dashbord />
      </div>
    </main>
  );
}
