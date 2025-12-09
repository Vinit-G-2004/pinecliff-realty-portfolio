import Image from "next/image";
export default function Navbar(){
  return (
    <div className="navbar">
      <div className="container flex items-center justify-between py-3 gap-6">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-widest">
          <Image src="/logo.png" width={36} height={36} alt="Pinecliff Realty" className="rounded-lg"/>
          <span>PINECLIFF REALTY</span>
        </a>
      </div>
    </div>
  )
}