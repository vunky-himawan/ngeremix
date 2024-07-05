import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen bg-[#141614] flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-5xl font-cabinet">
        Hallo Dunia
      </h1>
      <p className="text-white">
        Coba Explore Remix |{" "}
        <Link to={`https://vunkyh.my.id`} className="underline">
          Vunky Himawan
        </Link>
      </p>
    </div>
  );
}
