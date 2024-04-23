import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 ">
        <Image src={"/hero.svg"} fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center ">
          Learn, practice and master new languages with Duolingo
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            {/* pas encore connecté */}
            <SignedOut>
              {/* pour s'enregistrer */}
              <SignUpButton mode="modal" afterSignUpUrl="/onboarding">
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            {/* connecté */}
            <SignedIn></SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
