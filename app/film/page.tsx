"use client"

import filmSamples from "@/app/lib/film-gallery-data";
import MyHeader from "../lib/my-header";
import MyFooter from "../lib/my-footer";

export default function Film() {

  return (
    <main className="flex flex-col min-h-screen w-screen overflow-y-auto">
      {/* Header */}
      <MyHeader />
      {/* <header className="flex h-12 bg-gray-400">header</header> */}

      {/* Content */}
      <div className="flex flex-grow pt-8 pb-8">
        <div className="w-full sm:columns-2 gap-8 px-8">
          {filmSamples.map( (x, idx) => (
            <div key={idx}>
              <video 
                className="w-full mb-8"
                preload="metadata"
                poster={`${x.thumbnail_path}`}
                controls >
                <source src={`${x.film_path}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <MyFooter />
    </main>
  )
}