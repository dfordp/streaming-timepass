"use client"

import {signIn, useSession} from "next-auth/react"
import {useRouter} from "next/navigation"
import { toast } from 'react-hot-toast';


const Authentication = () => {

  const session = useSession();
  const router = useRouter()

  const socialAction = (provider : string)   => {
    signIn(provider, { redirect: false })
    .then((callback) => {
      if (callback?.error) {
        toast.error('Invalid credentials!');
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Logged in!')
      }
    })
  }

  return (
    <div className="flex flex-col justify-center gap-4">
            <div className="bg-black text-white px-8 py-2 rounded-md" onClick={()=>{socialAction("google")}}>
               Continue with Google
            </div>
            <div className="bg-black text-white px-8 py-2 rounded-md" onClick={()=>{socialAction("github")}}>
               Continue with Github
            </div>
    </div>
  )
}

export default Authentication
