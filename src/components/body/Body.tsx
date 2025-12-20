import "./Body.scss";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <section className="custom-body grow items-center flex flex-col p-5 mt-12 min-h-0 overflow-auto no-scrollbar overflow-x-hidden">
      <Outlet />
    </section>
  );
}
