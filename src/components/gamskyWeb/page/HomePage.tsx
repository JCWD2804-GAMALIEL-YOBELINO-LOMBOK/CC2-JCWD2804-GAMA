import Link from "next/link";
import Image from "next/image";
import Home from "@/components/image/home.jpg";
import Service from "@/components/image/service.png";
import Client from "@/components/image/client.jpg";

const HomePage = () => {
  return (
    // Header
    <main className="bg-blue-200 text-black">
      <section>
        <div className="flex justify-center items-center py-32 px-20">
          <div className="flex-col flex justify-center items-center pr-20 italic">
            <h1 className="text-3xl font-bold text-center">
              Moving Home With Our Teams
            </h1>
            <p>"Moving made easy, one box at a time!"</p>
          </div>
          <Image
            src={Home}
            alt="Pindah Rumah"
            className="rounded-md shadow-2xl shadwor-black"
          />
        </div>
      </section>
      <section className="bg-blue-300 py-10">
        <div className="flex justify-center items-center">
          <div className="px-10 text-center">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="pt-5">
              Once upon a time in the bustling city of Metroville, two friends,
              Alex and Sarah, found themselves amidst the chaos of moving
              apartments. Frustrated by the lack of reliable and affordable
              moving services available, they decided to take matters into their
              own hands. Drawing upon their combined expertise in logistics and
              customer service, they founded SwiftShifters in 2010.
            </p>
            <div className="flex justify-center pt-5 text-xl ">
              <Link
                href="/about"
                className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md shadow-2xl"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-200 text-black py-10 text-center ">
        <div className="text-center px-10">
          <h1 className="font-bold text-3xl">Company Overview</h1>
          <div className="py-5">
            <p>
              Founded in 1999, GAMSKY<sup>Corp</sup> has emerged as a pioneering
              force in tech and logistics. With a rich history rooted in
              innovation and a relentless commitment to excellence, we have
              solidified our position as a leader in tech and logistics
              worldwide.
            </p>
          </div>
          <h1 className="font-bold text-3xl">Company History</h1>
          <div className="py-5">
            <p>
              GAMSKY<sup>Corp</sup> was established with a clear vision to
              making easy to move house. Since our inception, we have embarked
              on a journey marked by milestones and achievements. From humble
              beginnings to becoming a formidable player in the market, our
              history reflects our unwavering dedication to pushing boundaries
              and exceeding expectations.
            </p>
          </div>
          <h1 className="font-bold text-3xl">Company Team</h1>
          <div className="py-5">
            <p>
              At the heart of GAMSKY<sup>Corp</sup> is a dynamic team of
              professionals who embody our core values and drive our success.
              Our team comprises individuals from diverse backgrounds, each
              bringing unique perspectives and expertise to the table. Led by
              visionary leaders and industry veterans, we foster a culture of
              collaboration, creativity, and continuous learning. Every member
              of our team plays a crucial role in shaping the future of our
              company and making a positive impact on the world.
            </p>
          </div>
          <h1 className="font-bold text-3xl">Company Culture</h1>
          <div className="py-5 ">
            <p>
              Customer First: We always put our customers' needs first. <br />
              Teamwork: We work together like a family to get things done.{" "}
              <br />
              Training and Growth: We learn new things to do our job better.{" "}
              <br />
              Safety Matters: We make sure everyone stays safe at work. <br />
              Talk Openly: We talk about problems and ideas openly. <br />
              Say Thanks: We appreciate each other's hard work. <br />
              Balance Life and Work: We make sure everyone has time for their
              personal life. <br />
              Do the Right Thing: We always do what's fair and honest.
              <br />
              Helping Our Community: We like to give back to our community.
              <br />
              Be Creative: We're always looking for new ways to do things
              better.
              <br />
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="bg-blue-300 text-black ">
        <div className="font-bold text-3xl text-center pt-10">
          <h1>Service</h1>
          <p>Package Service</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-10 lg:flex-row">
          <div className="border-8 w-72 h-96 shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
            <div className="text-center font-bold pt-2">
              <p>Gold Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service} alt="Package" />
              <div className="flex justify-center pt-5">
                <Link
                  href="/login"
                  className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
          <div className="border-8 w-72 h-96 shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
            <div className="text-center font-bold pt-2">
              <p>Gold Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service} alt="Package" />
              <div className="flex justify-center pt-5 ">
                <Link
                  href="/login"
                  className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
          <div className="border-8 w-72 h-96 shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
            <div className="text-center font-bold pt-2">
              <p>Gold Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service} alt="Package" />
              <div className="flex justify-center pt-5 ">
                <Link
                  href="/login"
                  className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10 text-xl ">
          <Link
            href="/service"
            className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md shadow-2xl"
          >
            Details
          </Link>
        </div>
      </section>
      <section className="bg-blue-200 text-black">
        <div className="container mx-auto py-10 px-4">
          <div className="py-10 text-center">
            <h1 className="text-4xl font-bold">Testimony</h1>
            <p className="pt-5 text-4xl italic font-bold">
              "What is our client said about GAMSKY<sup>Corp"</sup>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-10 lg:flex-row">
            <div className="border-8 w-auto h-auto shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
              <div className="text-center font-bold pt-5">
                <p>Client 1</p>
              </div>
              <div className="w-auto h-auto p-5">
                <Image src={Client} alt="Review 3" />
              </div>
              <h2 className="text-2xl pb-5">⭐⭐⭐⭐⭐</h2>
            </div>
            <div className="border-8 w-auto h-auto shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
              <div className="text-center font-bold pt-5">
                <p>Client 2</p>
              </div>
              <div className="w-auto h-auto p-5">
                <Image src={Client} alt="Review 3" />
              </div>
              <h2 className="text-2xl pb-5">⭐⭐⭐⭐⭐</h2>
            </div>
            <div className="border-8 w-auto h-auto shadow-2xl m-10 flex justify-center flex-col items-center gap-4">
              <div className="text-center font-bold pt-5">
                <p>Client 3</p>
              </div>
              <div className="w-auto h-auto p-5">
                <Image src={Client} alt="Review 3" />
              </div>
              <h2 className="text-2xl pb-5">⭐⭐⭐⭐⭐</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
