"use client"

export default function ParallaxSection() {
  return (
    <div
      className="relative h-[500px] overflow-hidden"
      style={{
        backgroundImage: "url('/parallax.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />

      <div className="relative z-10 flex items-center justify-center h-full">
      </div>
    </div>
  )
}
