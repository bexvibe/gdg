const areas = [
  "Silverdale","Stillwater","Milldale","Millwater","Orewa",
  "Hibiscus Coast","Whangaparaoa","Puhoi","Warkworth","Snells Beach",
  "Matakana","Omaha","Point Wells","Leigh","Pakiri",
  "Wellsford","Mangawhai","Langs Beach","Kaiwaka",
];

export default function ServiceAreaList() {
  return (
    <section className="bg-[#0D1B2A] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#C8291D] font-semibold mb-3">Service area</p>
        <h2 className="font-display text-display-md text-white mb-2">We cover all of North Auckland</h2>
        <p className="text-gray-400 text-sm mb-8">From the Harbour Bridge up to Mangawhai — and everywhere in between.</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {areas.map((area) => (
            <span key={area}
              className="bg-white/10 hover:bg-white/20 text-gray-300 text-sm px-3 py-1.5 rounded-full transition-colors cursor-default">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
