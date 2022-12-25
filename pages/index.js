import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="  mt-5 justify-content-center">
      <button className="btn btn-primary  m-1">
        <Link href="/Landingpage1">
          {" "}
          <h3 className="text-white">Landing Page 1</h3>
        </Link>
      </button>{" "}
      <br />
      <button className="btn btn-success m-1">
        <Link href="/Landingpage4">
          <h3 className="text-white">Landing Page 2</h3>
        </Link>
      </button>{" "}
      <br />
      <button className="btn btn-danger m-1">
        <Link href="/Landingpage6">
          <h3 className="text-white">Landing Page 3</h3>
        </Link>
      </button>{" "}
      <br />
      <button className="btn btn-info m-1">
        <Link href="/Landingpage7">
          <h3 className="text-white">Landing Page 4</h3>
        </Link>
      </button>{" "}
      <br />
      <button className="btn btn-dark m-1">
        <Link href="/Landingpage8">
          <h3 className="text-white">Landing Page 5</h3>
        </Link>
      </button>
    </div>
  );
}
