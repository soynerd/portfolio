import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(77.59);
  const [lat] = useState(24.26);
  const [zoom] = useState(5);
  const styleUrl = 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL';

  useEffect(() => {
    if (map.current) return; 

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: styleUrl,
      center: [lng, lat],
      zoom: zoom
    });

    const markerEl = document.createElement('div');
    const pulsingDot = document.createElement('div');
    pulsingDot.className = 'pulsing-dot';
    markerEl.appendChild(pulsingDot);

    new maplibregl.Marker({ 
      element: markerEl,
      anchor: 'center' 
    })
      .setLngLat([lng, lat])
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [lng, lat, zoom]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <link href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />
      <style>{`
        .pulsing-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #3b82f6;
          border: 2px solid #ffffff;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
          animation: pulse 2s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }

        @keyframes pulse {
          0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        
        .maplibregl-popup-content {
            background-color: #2d3748;
            color: #f7fafc;
        }
        .maplibregl-popup-close-button {
            color: #f7fafc;
        }
        .maplibregl-ctrl-attrib-inner {
            background: rgba(0, 0, 0, 0.75) !important;
        }
        .maplibregl-ctrl-attrib a {
            color: #a0aec0 !important;
        }
      `}</style>

      <div className="w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
      <div className="mt-4 text-center text-gray-400">
          <p>Displaying a map centered at [{lng}, {lat}]</p>
          <p className="text-sm mt-1">If you want to use a different map provider like MapTiler, remember to get a valid API key.</p>
        </div>
    </div>
  );
}

