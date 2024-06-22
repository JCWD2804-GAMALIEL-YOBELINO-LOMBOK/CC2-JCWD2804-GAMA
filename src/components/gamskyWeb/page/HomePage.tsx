import Link from "next/link";
import Image from "next/image";
import Home from "@/components/image/home.jpg";
import Service1 from "@/components/image/servicehemat.png";
import Service3 from "@/components/image/servicePremium.jpg";
import Service2 from "@/components/image/servicestandar.jpg";
import Client from "@/components/image/client.jpg";
import TeamWork from "@/components/image/teamwork.jpg";
import OpenTalk from "@/components/image/opentalk2.jpg";
import Safety from "@/components/image/safety.jpg";
import Train from "@/components/image/traigrowt.jpg";
import WlifeB from "@/components/image/worklifebalance.jpg";
import Testimonials from "@/dummy/testy.json";

const HomePage = () => {
  return (
    // Header
    <main className="bg-blue-200 text-black">
      <section className="py-10 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-10 md:px-8">
          <div className="md:pr-8 mb-4 md:mb-0 md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Moving Home With Our Teams
            </h1>
            <p className="text-center italic">
              &quot;Moving made easy, one box at a time!&quot;
            </p>
          </div>
          <Image
            src={Home}
            alt="Pindah Rumah"
            className="rounded-md shadow-2xl shadwor-black md:w-1/2"
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
      <section className="bg-blue-200 text- p-10">
        <h1 className="font-bold text-3xl text-center">Company Culture</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={TeamWork}
                alt="Culture"
                width={450}
                height={550}
                className="rounded-full"
              />
            </div>
            <div className="text-center mb-10">
              <h2 className="font-bold">Teamwork:</h2>
              <p className="text-sm">
                We work together like a family to get things done.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={Train}
                alt="Culture"
                width={450}
                height={550}
                className="rounded-full"
              />
            </div>
            <div className="text-center mb-10">
              <h2 className="font-bold">Training and Growth:</h2>
              <p> We learn new things to do our job better.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={OpenTalk}
                alt="Culture"
                width={450}
                height={550}
                className="rounded-full"
              />
            </div>
            <div className="text-center mb-10">
              <h2 className="font-bold">Talk Openly:</h2>
              <p>We talk about problems and ideas openly.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={WlifeB}
                alt="Culture"
                width={450}
                height={550}
                className="rounded-full"
              />
            </div>
            <div className="text-center mb-10">
              <h2 className="font-bold">
                Balance Life and Work: <br />
              </h2>
              <p> We make sure everyone has time for their personal life.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={Safety}
                alt="Safety"
                width={450}
                height={550}
                className="rounded-full"
              />
            </div>
            <div className="text-center mb-10">
              <h2 className="font-bold">
                Safety Matters: <br />
              </h2>
              <p> We make sure everyone stays safe at work.</p>
            </div>
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
              <p>Economic Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service1} alt="Package" />
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
              <p>Standar Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service2} alt="Package" />
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
              <p>Premium Package</p>
            </div>
            <div className="w-auto h-auto p-5">
              <Image src={Service3} alt="Package" />
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
        <div className="container mx-auto py-10 px-4 text-center">
          <h1 className="text-4xl font-bold">Testimony</h1>
          <p className="pt-5 text-4xl italic font-bold">
            'What our clients said about GAMSKY<sup>Corp</sup>'
          </p>
          <div className="flex justify-center items-center flex-col lg:flex-row gap-10 mt-10">
            {Testimonials.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-8 w-full lg:w-96 h-auto shadow-2xl p-4 flex flex-col items-center"
              >
                <div className="font-bold text-xl pt-4">
                  <p>{testimonial.name}</p>
                </div>
                <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden mt-4">
                  <img
                    src={testimonial.image}
                    alt={`Review by ${testimonial.name}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="font-bold text-lg mt-4">
                  <p>Rating</p>
                  <p className="text-2xl">{testimonial.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
