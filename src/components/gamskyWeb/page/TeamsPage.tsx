import { getUsers } from "@/api/apiTest";
import { UserState, User } from "@/utils/type";
import Image from "next/image";

const TeamsPage = async () => {
  const user: UserState = await getUsers();

  return (
    <main className="w-full h-full bg-blue-200 text-black">
      <div className="text-center pt-10 font-bold text-5xl">Our Teams</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center p-10 gap-5">
        {user?.results?.map((item: User, index: any) => {
          return (
            <ul key={index} className="text-center w-fit">
              <Image
                src={item?.picture.thumbnail}
                width={300}
                height={300}
                alt={"Picture"}
                className="mx-auto p-1 h-80"
              />
              <li>
                {item?.name?.first} {item?.name?.last}
              </li>
              <li>{item?.location.street.coordinates}</li>
              <li>{item?.cell}</li>
              <li>{item?.email}</li>
              <li>{item?.gender}</li>
            </ul>
          );
        })}
      </div>
    </main>
  );
};

export default TeamsPage;
