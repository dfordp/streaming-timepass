"use client"

import { FaGoogle } from "react-icons/fa";
import { signInWithPopup} from "firebase/auth";
import {googleProvider, auth} from "@/lib/firebase"





const AuthPage = () => {




    const signInWithGoogle = async () => {
        signInWithPopup(auth,googleProvider).then((result)=>{
          const email = result.user.email;
          if (email) {
            const data = {
              email: email
            }
            console.log(data);
            // sendUserData(data)
          }
        }).catch((error) => {
          console.log(error);
        });
      }

  return (
    <div className="bg-gray-200 w-screen h-screen shadow-lg">
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center min-h-screen">
       <div className="bg-white w-64 h-48 rounded-md">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight flex flex-row justify-center my-8">
              Aarchid
          </h1>
          <div onClick={signInWithGoogle} className="flex flex-row justify-center items-center gap-3 bg-black hover:bg-gray-800 text-white mx-6 py-2 rounded-md">
            <div>
              <FaGoogle/>
            </div>
            <div>
              Sign In With Google
            </div>
          </div>
        </div>          
      </div>
    </div>
  </div>
  )
}

export default AuthPage
