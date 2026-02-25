import { properties, teamMembers } from "@/lib/data";

export function ImageTest() {
  const localImages = [
    { name: "Hero Image", path: "/images/hero-luxury-home.png" },
    { name: "About Office", path: "/images/about-office.png" },
  ];

  const externalImages = [
    ...properties.map(p => ({ name: p.title, path: p.image })),
    ...teamMembers.map(m => ({ name: m.name, path: m.image })),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Local Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {localImages.map((img) => (
              <div key={img.path} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2">{img.name}</h3>
                <img 
                  src={img.path} 
                  alt={img.name}
                  className="w-full h-48 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.style.border = "2px solid red";
                    console.error(`Failed to load: ${img.path}`);
                  }}
                  onLoad={() => console.log(`Loaded: ${img.path}`)}
                />
                <p className="text-sm text-gray-500 mt-2">{img.path}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">External Images (Unsplash)</h2>
          <div className="grid grid-cols-3 gap-4">
            {externalImages.map((img, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2 text-sm">{img.name}</h3>
                <img 
                  src={img.path} 
                  alt={img.name}
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.style.border = "2px solid red";
                    console.error(`Failed to load: ${img.path}`);
                  }}
                  onLoad={() => console.log(`Loaded: ${img.name}`)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
