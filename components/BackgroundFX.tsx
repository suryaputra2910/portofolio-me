"use client";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid */}
      <div
        className="
          grid-pattern
          absolute inset-0
          opacity-[0.35]
          [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_20%,transparent_75%)]
        "
      />

      {/* Violet glow */}
      <div
        className="
          absolute
          -top-40
          left-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-600/10
          blur-[100px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          absolute
          top-[35%]
          -right-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-500/8
          blur-[110px]
        "
      />

      {/* Indigo glow */}
      <div
        className="
          absolute
          bottom-[5%]
          left-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-indigo-600/8
          blur-[120px]
        "
      />

      {/* Top glow */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[70vh]
          bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(139,92,246,0.12),transparent_70%)]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_35%,rgba(5,5,5,0.8)_100%)]
        "
      />
    </div>
  );
}