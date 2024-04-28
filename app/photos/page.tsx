"use client"

import Image from "next/image";
import photoSamples from "@/app/lib/photo-gallery-data";
import MyHeader from "../lib/my-header";
import MyFooter from "../lib/my-footer";

export default function Photos() {

  return (
    <main className="flex flex-col min-h-screen w-screen overflow-y-auto">
      {/* Header */}
      <MyHeader />

      {/* Content */}
      <div className="flex flex-grow pt-8 pb-8">
        <div className="w-full columns-xs gap-7 px-7">
          {photoSamples.map( (x, idx) => (
            <div key={idx}>
              <Image
                className="w-full mb-7"
                src={`${x.file_path}`}
                alt={`Image ${idx + 1}`}
                width={800}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <MyFooter />
    </main>
  )
}