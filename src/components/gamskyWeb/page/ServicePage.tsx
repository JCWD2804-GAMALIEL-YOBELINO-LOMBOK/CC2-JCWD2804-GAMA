import Link from "next/link";
import Services from "@/dummy/products.json";
import { Key } from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-screen font-bold text-5xl text-center pt-10 pb-10 bg-blue-200">
      <h2 className="mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Services.Services.map(
          (service: {
            includes: string[];
            id: Key | null | undefined;
            name: string;
            description: string;
            price: number;
            currency: string;
            image: string; // New property for image
          }) => (
            <div
              key={service.id}
              className="bg-blue-300 rounded-lg shadow-lg p-4 text-xl"
            >
              <img
                src={service.image}
                alt={service.name}
                className="rounded-lg mb-4 flex justify-center"
              />
              <h3 className="text-3xl font-bold text-center">{service.name}</h3>
              <p className="text-gray-600 mb-2 text-xl">
                {service.description}
              </p>
              <ul className="list-disc ml-6 text-xl text-left">
                {service.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-bold text-blue-600 text-2xl text-center ">
                Price: {service.price} {service.currency}
              </p>
              <Link
                href={"/login"}
                className="bg-blue-500 hover:bg-blue-200 rounded-md"
              >
                Order Now
              </Link>
            </div>
          )
        )}
      </div>
    </div>

    // <main className="w-full h-full bg-blue-200 text-black ">
    //   <div className="font-bold text-5xl text-center pt-10 pb-10">Service</div>
    //   <div className="sm:flex justify-center items-center">
    //     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-8 w-72 h-96 shadow-2xl m-4 sm:m-6 flex flex-col items-center gap-4">
    //         <div className="text-center font-bold pt-2">
    //           <p>Gold Package</p>
    //         </div>
    //         <div className="w-auto h-auto p-5">
    //           <img
    //             src="https://dutamovers.co.id/wp-content/uploads/2020/06/Pindahan-Rumah-gold.png"
    //             alt="Package"
    //             className="max-w-full max-h-full"
    //           />
    //           <div className="flex justify-center pt-5 ">
    //             <Link
    //               href="/login"
    //               className="bg-sky-200 border-2 p-2 hover:bg-sky-400 rounded-md"
    //             >
    //               Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default ServicePage;
