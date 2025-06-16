"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInComp from "@/components/SignInComp";
import SignUpComp from "@/components/SignUpComp";

const SignIn = () => {
  const [selectedTab, setSelectedTab] = useState("signin");
  return (
    <section className="flex flex-col md:flex-row p-4 gap-8 md:gap-20">
      <div className="w-full md:w-auto flex-shrink-0">
        <Image
          src={"/auth.jpg"}
          className="rounded-md"
          width={470}
          height={450}
          alt="Authentication illustration"
          priority
        />
      </div>
      <div className="flex-1">
        <div className="mt-8 md:mt-20">
          <p className="text-4xl sm:text-5xl md:text-[64px] text-[#7A999C] font-bold font-istok">
            Hello,{" "}
            <span className="text-3xl sm:text-4xl md:text-[48px] font-normal font-istok">
              Guyss!
            </span>
          </p>
          <div className="my-5">
            <Tabs
              defaultValue="signin"
              className="w-full max-w-[600px] bg-transparent shadow-none"
            >
              <TabsList className="bg-transparent shadow-none">
                <TabsTrigger
                  className="text-xl sm:text-2xl md:text-3xl bg-transparent font-istok font-bold shadow-none"
                  value="signin"
                  onClick={() => setSelectedTab("signin")}
                  style={{
                    color: selectedTab == "signin" ? "#5F7C8D" : "#5F7C8D63",
                  }}
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="text-xl sm:text-2xl md:text-3xl font-istok bg-transparent shadow-none"
                  onClick={() => setSelectedTab("signup")}
                  style={{
                    color: selectedTab == "signup" ? "#5F7C8D" : "#5F7C8D63",
                  }}
                >
                  SignUp
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <SignInComp />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpComp />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
