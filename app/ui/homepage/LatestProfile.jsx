import {latestprofile} from "@/app/ui/varibles";
import Image from "next/image";

const LatestProfile = () => {
  return (
    <section>
        <h1 className="flex justify-center pt-8 pb-2 font-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl">Latest Profile</h1>
        <div className="md:mx-auto container pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:mx-24 xl:mx-32 2xl:mx-44">
                {latestprofile.map((profile, index) => (
                    <div  key={index} className="w-[90%] mx-auto">
                        <Image src={profile.src} className="h-[30vh] w-[100%] rounded-t-md object-cover object-center" alt={profile.alt} />
                        <div className="mb-5 bg-slate-300 px-5 flex flex-col justify-center py-5">
                            <p>User ID:<span className="pl-3">{profile.id}</span></p>
                            <p>Name:<span className="pl-3">{profile.name}</span></p>
                            <p>Qualification:<span className="pl-2">{profile.qualification}</span></p>
                            <p>D.O.B:<span className="pl-3">{profile["D.O.B"]}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default LatestProfile;
