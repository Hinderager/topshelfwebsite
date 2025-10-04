export function SectionDivider() {
  return (
    <div className="relative py-0 bg-gradient-to-b from-blue-50/30 to-slate-100/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-1 h-0.5 bg-[#1e3a5f]"></div>

          {/* Text Badge */}
          <div className="relative -my-5 mx-4 px-10 py-4 bg-white border-[3px] border-[#1e3a5f] rounded-2xl shadow-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a90e2] whitespace-nowrap italic" style={{ fontFamily: 'Georgia, serif' }}>
              Smart Moving & Removing
            </h2>
          </div>

          {/* Right Line */}
          <div className="flex-1 h-0.5 bg-[#1e3a5f]"></div>
        </div>
      </div>
    </div>
  )
}
