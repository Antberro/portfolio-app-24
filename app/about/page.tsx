"use client"

import Image from "next/image";
import aboutData from "@/app/lib/about-data";
import MyHeader from "../lib/my-header";
import MyFooter from "../lib/my-footer";

export default function About() {

  return (
    <main className="flex flex-col h-screen w-screen">
      {/* Header */}
      <MyHeader />

      {/* Content */}
      {/* Set height to 100vh - [height of header (3.5rem) + height of footer(6rem)] */}
      <div className="flex flex-grow lg:h-[calc(100vh-9.5rem)]">
        {/* Column A */}
        <div className="flex justify-center items-center w-0 lg:w-1/2">
          <Image
            src="/headshot.jpg"
            alt="Antonio Berrones"
            width={3805}
            height={5708}
            style={{ width: "auto", height: "90%" }}
            priority
          />
        </div>

        {/* Column B */}
        <div className="flex flex-col w-full lg:w-1/2 overflow-y-auto">
          {/* Bio section */}
          <div className="flex flex-grow flex-col px-10 pt-8 pb-12">
            <div className="primary-ff mb-6">BIO</div>
            <div className="tertiary-ff">{aboutData.bio}</div>
          </div>

          {/* Experience section */}
          <div className="flex flex-grow flex-col px-10">
            <div className="primary-ff mb-6">EXPERIENCE</div>
            <ul>
              {aboutData.experience.map((x, idx) => (
                <li key={idx} className="mb-10">
                  <h2 className="tertiary-ff text-sm text-gray-800">{x.duration}</h2>
                  <h1 className="secondary-ff text-lg">{x.title}</h1>
                  <p className="tertiary-ff">{x.desc}</p>

                  {/* Tags container */}
                  <div className="flex flex-row flex-wrap pt-2">
                    {x.tags.map((t, tidx) => (
                      <div className="skill-tag rounded-xl px-2 mb-1 mr-1 text-[0.8rem]" key={tidx}>{t}</div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Links section */}
          <div className="flex flex-col px-10 secondary-ff pb-14">
            <div>See full <a className="underline" href="https://drive.google.com/file/d/1ceu8rvkAhIU0wB_VZjzztoG7LItdsIdQ/view?usp=share_link">resume</a> ↗️</div>
            <div>Email me at <a className="underline" href="mailto:antonioberrones.ab@gmail.com">antonioberrones.ab@gmail.com</a></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <MyFooter />
    </main>
  )
}
