import { firaCode } from "@/app/ui/fonts";
import { auth } from "@/auth";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default async function AcmeLogo() {
  const session = await auth();

  return (
    <div
      className={`${firaCode.className} flex flex-row items-center leading-none text-white`}
    >
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name || "User Profile Image"}
          width={35}
          height={35}
          className="rounded-full"
        />
      ) : (
        <GlobeAltIcon className="text-white h-12 w-12 rotate-[15deg]" />
      )}
      <p className="text-[44px] pl-2">Acme</p>
    </div>
  );
}
