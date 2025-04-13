"use client"

import Image from "next/image"
import logo from "../../../public/FadaClubLogoWithoutBG.png"
import darklogo from "../../../public/Fada Club LogoDark.png"
import { Button } from "../ui/button"
import { ModeToggle } from "../ui/toggle-button"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <Image src={logo} alt="logo" className="w-10 dark:hidden"/>
        <Image src={darklogo} alt="logo" className="w-10 hidden dark:block"/>
      </div>
      {/* <div className="gap-3 flex flex-row font-semibold">
        <div>
          About Us
        </div>
        <div>
          Goals
        </div>
      </div> */}
      <div className="gap-3 flex flex-row justify-center">
        <div>
          <ModeToggle/>
        </div>
        <Button onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLScGo9bMtgXijlCIuIJzf6qYMX6Kq4aAcpNqpsgyFKcx3WWvxA/viewform?pli=1', '_blank'); }}>
          Join Now
        </Button>
      </div>
    </div>
  )
}

export default Header
