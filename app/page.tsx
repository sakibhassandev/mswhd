import Header from "@/app/ui/Header/Header";
import NavLink from "@/app/ui/Header/NavLink";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <NavLink />
        <div className="series-container absolute text-4xl top-[88px] left-[104px] right-0 bottom-0 text-white">
          Hello
        </div>
      </div>
    </>
  );
}
