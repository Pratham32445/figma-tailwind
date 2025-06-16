import React from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const SignUpComp = () => {
  return (
    <div className="w-full">
      <p className="p-4 text-xl font-semibold font-istok">Get Started Now</p>
      <Input
        id="name"
        placeholder="Enter your Name"
        className=" border-0 outline-none border-b-2 border-[#5F7C8D] text-lg lg:text-2xl rounded-none w-full my-8"
      />
      <Input
        id="email"
        placeholder="Enter your Email"
        className=" border-0 outline-none border-b-2 border-[#5F7C8D] text-lg lg:text-2xl rounded-none w-full my-8"
      />
      <Input
        id="password"
        placeholder="Enter your password"
        className=" border-0 outline-none border-b-2 border-[#5F7C8D] text-lg lg:text-2xl rounded-none w-full my-8"
      />
      <div className="flex items-center gap-3 my-4">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to terms and policy</Label>
      </div>
      <Button className="bg-[#3A5B22] p-6 rounded-none w-full text-white text-xl">
        Signup
      </Button>
    </div>
  );
};

export default SignUpComp;
