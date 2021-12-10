import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center space-y-10 p-20 min-h-screen">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <a
                href="#_"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                {provider.name} 로그인
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Login;
