import Image from "next/image";
import Link from "next/link";

const HomeScreen = ({ session: { user } = { user: null } }) => {
  return (
    <>
      <div id="home" className="bg-gradient-to-bl from-black via-gray-950 to-red-900/20 relative pt-28 md:pt-40 pb-20 lg:pt-44 min-h-screen">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6 lg:pl-16">
          <h1 className="lg:pr-80 leading-[3rem] sm:mx-auto sm:w-10/12 md:w-2/3 text-4xl text-center clash sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl text-white">
            The Next Gen <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-tr from-red-300 via-red-400 to-red-500">
              Payment Gateway
            </span>
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-300 lg:w-11/12">
                A payment gateway that is designed to be the best companion for
                transactions and payments. Also, storing their data and finances
                securely. With the best integrations, it is the best choice for
                your personal budgeting.
              </p>
              <span className="block font-semibold text-gray-400">
                The best companion for{" "}
                <span className="text-white">
                  Transactions, Payments, and Budgeting
                </span>
                .
              </span>

              <div className="flex gap-6 mt-4 z-50 flex-col-reverse justify-center lg:justify-start sm:flex-row px-5 sm:px-0">
                <Link
                  className="inline-flex backdrop-blur-sm items-center justify-center whitespace-nowrap rounded-md text-sm text-gray-100 hover:bg-[#262626]/80 h-11 px-8 font-semibold"
                  href="/about"
                  style={{ background: "rgb(57 57 57 / 25%)" }}
                >
                  About
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-move-right ml-2 pt-1 hover:-rotate-30"
                  >
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </Link>
                <Link
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm bg-gradient-to-bl from-red-500 to-[#de122e] text-gray-100 hover:bg-gradient-to-tr duration-300 ease-in-out transition-all h-11 px-8 font-semibold"
                  href={user ? "/dashboard" : "/api/auth/signin"}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:absolute -right-9 lg:w-5/12 -top-[5%] hover:-rotate-6 duration-300 transition-all ease-in-out">
              <div className="relative w-full flex justify-center items-center lg:block">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-red-500 to-orange-300 blur-3xl"
                ></div>
                <Image
                  src="https://i.postimg.cc/YqF2r0x5/who-let-him-cook-1.png"
                  //On hover tilt the image to the right
                  className="relative lg:w-full w-[500px] saturate-150/0"
                  alt="wath illustration"
                  loading="lazy"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
