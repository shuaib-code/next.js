import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";
import { signInWithFacebook, signInWithGoogle } from "../lib/actions";
import { Button } from "../ui/button";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />

        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-5 pt-2">
          <form action={signInWithGoogle}>
            <Button className="mt-4 w-full justify-center">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign In with Google
            </Button>
          </form>
          <form action={signInWithFacebook}>
            <Button className="mt-4 w-full justify-center">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Sign In with Facebook
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
