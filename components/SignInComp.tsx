import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignInComp = () => {
  return (
    <div className="mt-6 lg:mt-10 w-full">
      <Input
        placeholder="Enter your email"
        className="my-6 lg:my-10 p-4 lg:p-6 border-0 outline-none border-b-2 border-[#5F7C8D] text-lg lg:text-2xl rounded-none w-full"  
      />
      <Input
        placeholder="Enter Password"
        type="password"
        className="my-6 lg:my-10 p-4 lg:p-6 border-0 outline-none border-b-2 border-[#5F7C8D] text-lg lg:text-2xl rounded-none w-full"
      />
      <Button className="cursor-pointer my-6 w-full text-lg lg:text-xl p-4 lg:p-6 bg-[#4B687A] rounded-none font-istok hover:bg-[#5c87a1] transition-colors">
        Login
      </Button>
    </div>
  );
};

export default SignInComp;