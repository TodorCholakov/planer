import React from "react";
import Image from "next/image";

export default function aboutUs() {
  return (
  <div className="flex justify-center w-full bg-[url('/background.svg')] bg-no-repeat bg-cover">
    <div className="flex justify-center">
       
      <div className="card glass max-w-7xl  mt-10 mb-20">
        <figure>
          <Image width="200" height="200" src="/logo.png" alt="Shoes" className="mt-10"/>
        </figure>
        <div className="card-body">
          <h1 className="card-title text-center w-full">About us</h1>
          <p>
            At ArtEcho, we're passionate about making creativity accessible to
            all. We understand that in today's fast-paced world, people are
            seeking not only beautiful designs but also practical solutions that
            enhance their daily lives. That's why we offer a diverse range of
            digital products, from artistic planner reffils and calendar
            templates to web design resources, all available to you free of
            charge.
          </p>
          <h2 className="card-title">Our Vision</h2>
          <p>
            Our vision is to empower individuals with tools that inspire both
            creativity and productivity. We believe that aesthetics and
            functionality can coexist harmoniously. Our mission is to provide
            you with meticulously crafted digital resources that not only spark
            your artistic side but also streamline your day-to-day activities.
          </p>
          <h2 className="card-title">What Sets Us Apart</h2>
          <p>
            What truly sets us apart is our commitment to delivering
            value-driven design. Our team of talented artists and designers pour
            their creativity into every product we offer. Whether you're looking
            for a beautifully designed planner refill to organize your thoughts
            or a web design template that reflects your brand's essence, we've
            got you covered.
          </p>
          <h2 className="card-title">Empowering Your Journey</h2>
          <p>
            We're dedicated to being a reliable companion on your creative
            journey. Our products are designed with your needs in mind, enabling
            you to express yourself artistically while staying organized and
            efficient. We encourage you to explore our offerings, infuse your
            unique touch, and make them a seamless part of your lifestyle.
          </p>
          <h2 className="card-title">Our Promise</h2>
          <p>
            Transparency and integrity are at the core of our values. When you
            use our products, you can trust that they are genuinely free of
            charge, crafted with care, and aimed at enhancing your creative
            journey. Thank you for choosing ArtEcho as your creative
            ally. Together, let's embark on a journey of artistic exploration
            and practical innovation. 
            <br />Warm regards, The ArtEcho Team
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
