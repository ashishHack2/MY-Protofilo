import React, { useState, useEffect } from 'react';

export default function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Slight delay before loading iframe to prioritize other content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50 md:opacity-100 flex items-center justify-center">
      {/* Background gradient mesh as fallback/loading state */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#231942]/30 to-[#0D1117]" />
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />
      
      {isLoaded && (
        <div className="w-full h-[120%] -translate-y-[10%]">
          <iframe 
            src="https://my.spline.design/nexbotrobotcharacterconcept-SdCNNA6sw4fw8Li5ngLpoe9N/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="3D Background"
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'auto' }}
          ></iframe>
        </div>
      )}
      
      {/* Gradient overlays to blend edges */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D1117] to-transparent z-10" />
    </div>
  );
}
