'use client';
import Image from "next/image";
import Slider from "@/components/Slider";
import HScroll from "@/components/HScroll";

export default function Page(){
  return (
    <main id="top">
      {/* HERO */}
      <section className="container section grid md:grid-cols-2 gap-6 items-center">
        <div>
          <span className="kicker">Premium Mandate Services</span>
          <h1>Luxury. Trust. Results.</h1>
          <p className="lead mt-3">With 18+ years of expertise, Pinecliff Realty delivers end-to-end mandate sales, marketing and transaction management for developers and property owners across Pune, Mumbai & Navi Mumbai.</p>
          <div className="sep" />
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card hover-raise"><div className="kicker">Mandate Focus</div><h3>Exclusive Sales</h3><p className="text-black/70 mt-1">Dedicated, high-performance execution.</p></div>
            <div className="card hover-raise"><div className="kicker">Branding</div><h3>Marketing Engine</h3><p className="text-black/70 mt-1">Billboards, influencer, society campaigns, radio & digital.</p></div>
            <div className="card hover-raise"><div className="kicker">Lifecycle</div><h3>Transaction Management</h3><p className="text-black/70 mt-1">From listing to closing, seamless experience.</p></div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card border border-black/10 hover-zoom">
          <Image src="/gallery/page_01.png" alt="Hero" width={1600} height={900}/>
        </div>
      </section>
      


      {/* ABOUT */}
      <section id="about" className="container section">
        <div className="kicker">Company</div>
        <h2>About Pinecliff Realty</h2>
        <p className="lead mt-2">Trusted leader in mandate services delivering exceptional results across Pune, Mumbai and Navi Mumbai through excellence, personalized service, and innovative solutions.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="card hover-raise"><h3>Mission</h3><p>We are committed to being a growth-focused company with a “make-it-happen” mindset, dedicated to delivering exceptional results and contributing positively to the real estate landscape.</p></div>
          <div className="card hover-raise"><h3>Vision</h3><p>To set a new benchmark in integrated solutions for real estate, becoming the go-to choice for mandate projects across regions and beyond.</p></div>
        </div>
        <div className="sep" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border hover-zoom">
            {/* PROFILE CARDS */}
<div className="grid md:grid-cols-2 gap-6 mt-6">
  {/* Swapnil sir*/}
  <div className="card hover-raise text-center">
    <div className="mx-auto h-28 w-28 rounded-full overflow-hidden ring-2 ring-gold/30 mb-3">
      <img src="/team/swapnil_sir.jpg" alt="Swapnil Tambe" className="w-full h-full object-cover" />

    </div>
    <h3 className="text-2xl">Swapnil Tambe</h3>
    <p className="text-black/70">Director / Founder</p>
  </div>

  {/* Shivraj sir */}
  <div className="card hover-raise text-center">
    <div className="mx-auto h-28 w-28 rounded-full overflow-hidden ring-2 ring-gold/30 mb-3">
      <img src="/team/image.png" alt="Shivraj Patade" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl">Shivraj Patade</h3>
    <p className="text-black/70">Director / Founder</p>
  </div>
</div>

          </div>
          <div className="card hover-raise">
            <h3>Values</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Professionalism","Trust","Innovative Vision","Integrity","Responsibility","Forward-Thinking","Teamwork","Customer Centricity"].map(x=>(
                <span key={x} className="px-3 py-1 rounded-full border text-sm">{x}</span>
              ))}
            </div>
            <p className="mt-4 text-black/70"><strong>Leadership:</strong> Mr. Swapnil Tambe (Director / Founder) · Mr. Shivraj Patade (Director / Founder).</p>
          </div>
        </div>
      </section>
     
       <section id="marketing" className="container section">
        <div className="kicker">Awards</div>
        <h2>Lokmat Professionals Icons of Pune</h2>
       
        <div className="mt-6">
          <HScroll images={[
            "/Awards/1.jpg",
            "/Awards/2.jpg",
            "/Awards/3.jpg",
            "/Awards/4.jpg",
            "/Awards/5.jpg",
            "/Awards/6.jpg",
            
          ]} />
        </div>
        
      </section>        

      {/* PROJECTS */}
      <section id="projects" className="container section">
        <div className="kicker">Projects</div>
        <h2>Featured & Recent Projects</h2>

        <div className="grid grid-cols-1 gap-6 mt-6">
          <Slider title="Sidhi Aspire" images={[
            "/projects/sidhi-aspire/1.jpg",
            "/projects/sidhi-aspire/2.jpg",
            "/projects/sidhi-aspire/3.jpg",
            "/projects/sidhi-aspire/4.jpg",
            "/projects/sidhi-aspire/5.jpg",
            "/projects/sidhi-aspire/6.jpg",
            "/projects/sidhi-aspire/7.jpg",
          ]} />

          <Slider title="Airvat Elevation" images={[
            "/projects/airvat-elevation/1.jpg",
            "/projects/airvat-elevation/2.jpg",
            "/projects/airvat-elevation/3.jpg",
            "/projects/airvat-elevation/4.jpg",
            "/projects/airvat-elevation/5.jpg",
          ]} />

          <Slider title="Ivory Vista" images={[
            "/projects/ivory-vista/1.jpg",
            "/projects/ivory-vista/2.jpg",
            "/projects/ivory-vista/3.jpg",
            "/projects/ivory-vista/4.jpg",
            "/projects/ivory-vista/5.jpg",
          ]} />
        </div>
       {/* Developers */}
      <section id="marketing" className="container section">
        <div className="kicker">Developers</div>
        <h2>collaboration</h2>
       
        <div className="mt-6">
          <HScroll images={[
            "/developers/1.jpg",
            "/developers/2.jpg",
            "/developers/3.jpg",
            "/developers/4.jpg",
            "/developers/5.jpg",
            
          ]} />
        </div>
        
      </section>    
        
      </section>
      <section id="marketing" className="container section">
        <div className="kicker">Marketing Strategy</div>
        <h2>Brand & Digital Rollouts</h2>
       
        <div className="mt-6">
          <HScroll images={[
            "/gallery/1.png",
            "/gallery/2.png",
            "/gallery/3.png",
            "/gallery/4.png",
            "/gallery/5.png",
            "/gallery/6.png",
            "/gallery/7.png",
            "/gallery/8.png",
            "/gallery/9.png",
          ]} />
        </div>
        
      </section>
     

     
       <section id="marketing" className="container section">
        <div className="kicker">Dedicated Sales Team</div>
        <h2>The Team That Drives Growth</h2>
       
        <div className="mt-6">
          <HScroll images={[
            "/sales/1.JPG",
            "/sales/2.JPG",
            "/sales/3.jpeg",
            "/sales/4.JPG",
            "/sales/5.jpeg",
      
          ]} />
        </div>
        
      </section>


      {/* CONTACT */}
      <section id="contact" className="container section">
        <div className="kicker">Connect</div>
        <h2>Let’s talk mandates & growth</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card hover-raise">
            <h3>Contact</h3>
            <p className="lead">
              Phone: <a href="tel:+917028605156" className="underline">+91 7028605156</a><br/>
              Email: <a href="mailto:pinecliffrealty@gmail.com" className="underline">pinecliffrealty@gmail.com</a><br/>
              Instagram: <a href="https://instagram.com/pinecliffrealty_" className="underline">@pinecliffrealty_</a><br/>
              Website: <a href="https://www.pinecliffrealty.com" className="underline">www.pinecliffrealty.com</a>
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border hover-zoom h-72">
            <iframe src="https://maps.google.com/maps?q=Pune&t=&z=12&ie=UTF8&iwloc=&output=embed" className="w-full h-full" />
          </div>
        </div>
      </section>
    

    </main>
  )
}
