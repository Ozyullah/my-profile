// import React, { useState, useEffect, useRef } from "react";

// const AdvancedVideoGallery = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeVideo, setActiveVideo] = useState(null);
//   const [viewMode, setViewMode] = useState("grid");
  
//   // New State for Multi-Playlist Support
//   const [currentPlaylist, setCurrentPlaylist] = useState("PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq");
//   const sliderRef = useRef(null);

//   // Define your Playlists here with friendly names
//   const playlists = [
//     { id: "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq", name: "Event Highlights | Best Moments" },
//     { id: "PLV6xtTRA4dlQo1w4iDOlMXH_p1BqchhBk", name: "Haramain Quran Translation" },
//     { id: "PLV6xtTRA4dlSfPRfSrxqs7NR35FihpKo5", name: "Presentations & Performances" },
//     { id: "PLV6xtTRA4dlRCdxXMfd8XWUhmP0rFJO2Z", name: "Direct Talks | Talking Head Speeches" },
//     { id: "PLV6xtTRA4dlT5yNp6lvdoeDxDe6hX971P", name: "Salah with Translation" },
//     { id: "PLV6xtTRA4dlTOYx7oaCZvGNijftSV9uTE", name: "Podcasts" }
//   ];

//   useEffect(() => {
//     const fetchPlaylistVideos = async () => {
//       setLoading(true); // Show loader when switching playlists
//       try {
//         const response = await fetch(
//           `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?playlist_id=${currentPlaylist}`
//         );
//         const data = await response.json();
        
//         if (data.items) {
//           const formattedVideos = data.items.map((item) => {
//             const videoId = item.link.split("v=")[1]?.split("&")[0];
//             return {
//               id: videoId,
//               title: item.title,
//               thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
//             };
//           });
//           setVideos(formattedVideos);
//         }
//       } catch (error) {
//         console.error("Error fetching Playlist videos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlaylistVideos();
//   }, [currentPlaylist]); // Re-runs whenever currentPlaylist changes

//   const scrollSlider = (direction) => {
//     if (sliderRef.current) {
//       const { scrollLeft, clientWidth } = sliderRef.current;
//       const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
//       sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="my-[100px]  w-11/12 max-w-7xl mx-auto font-sans text-slate-900">
//       {/* Header & Controls */}
//       <div className="flex flex-col gap-8 mb-12">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div>
//             <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-orange-600 uppercase">
//               My Works
//             </h2>
//           </div>

//           {/* Grid/Slider Toggle */}
//           <div className="flex p-1 bg-slate-100 rounded-2xl shadow-inner border border-slate-200">
//             <button 
//               onClick={() => setViewMode("grid")} 
//               className={`px-6 py-2 rounded-xl font-bold transition-all ${viewMode === "grid" ? "bg-white text-red-600 shadow-md" : "text-slate-400"}`}
//             >
//               Grid
//             </button>
//             <button 
//               onClick={() => setViewMode("slider")} 
//               className={`px-6 py-2 rounded-xl font-bold transition-all ${viewMode === "slider" ? "bg-white text-red-600 shadow-md" : "text-slate-400"}`}
//             >
//               Slider
//             </button>
//           </div>
//         </div>

//         {/* PLAYLIST NAVIGATION BUTTONS (The YouTube Style Selector) */}
//         <div className="flex flex-wrap gap-5 border-b border-slate-100 pb-6">
//           {playlists.map((pl) => (
//             <button
//               key={pl.id}
//               onClick={() => setCurrentPlaylist(pl.id)}
//               className={`px-5 py-2 rounded-full text-md font-bold transition-all duration-300 border ${
//                 currentPlaylist === pl.id 
//                 ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105" 
//                 : "bg-white text-slate-600 border-slate-200 motion-safe:animate-bounce hover:border-sky-400 hover:text-sky-600"
//               }`}
//             >
//               {pl.name}
//             </button>
//           ))}
//         </div>
//       </div> 

//       {loading ? (
//         <div className="flex flex-col items-center justify-center min-h-[300px] animate-pulse">
//            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//            <p className="mt-4 text-slate-400 font-medium">Loading playlist videos...</p>
//         </div>
//       ) : (
//         <>
//           {/* GRID VIEW */}
//           {viewMode === "grid" && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {videos.map((video) => (
//                 <div 
//                   key={video.id} 
//                   className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500" 
//                   onClick={() => setActiveVideo(video.id)}
//                 >
//                   <div className="relative aspect-video">
//                     <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                        <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-red-600 shadow-2xl scale-75 group-hover:scale-100 transition-transform">
//                           <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M8 5v14l11-7z"/></svg>
//                        </div>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="font-bold text-slate-800 text-lg leading-snug line-clamp-2">{video.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* SLIDER VIEW */}
//           {viewMode === "slider" && (
//             <div className="relative group/slider">
//               <button onClick={() => scrollSlider("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl w-14 h-14 rounded-full flex items-center justify-center border border-slate-100 hover:bg-red-50 opacity-0 group-hover/slider:opacity-100 transition-all">←</button>
//               <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                 {videos.map((video) => (
//                   <div key={video.id} className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-start group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
//                     <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
//                       <div className="relative aspect-video">
//                         <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
//                       </div>
//                       <div className="p-5">
//                         <p className="font-bold text-slate-700 truncate">{video.title}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button onClick={() => scrollSlider("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl w-14 h-14 rounded-full flex items-center justify-center border border-slate-100 hover:bg-red-50 opacity-0 group-hover/slider:opacity-100 transition-all">→</button>
//             </div>
//           )}
//         </>
//       )}

//       {/* MODAL PLAYER */}
//       {activeVideo && (
//         <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
//           <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
//             <button onClick={() => setActiveVideo(null)} className="absolute -top-14 right-0 text-white/70 hover:text-white font-bold flex items-center gap-2">
//               EXIT <span className="text-4xl">×</span>
//             </button>
//             <iframe 
//               width="100%" 
//               height="100%" 
//               src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
//               title="YouTube video player" 
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}

//       <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; }` }} />
//     </div>
//   );
// };

// export default AdvancedVideoGallery;

import React, { useState, useEffect, useRef } from "react";

const AdvancedVideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const [currentPlaylist, setCurrentPlaylist] = useState("PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq");
  const [reloadKey, setReloadKey] = useState(0); // bump to force a refetch of the same playlist
  const sliderRef = useRef(null);
  const requestIdRef = useRef(0); // guards against stale/out-of-order responses

  const playlists = [
    { id: "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq", name: "Event Highlights | Best Moments" },
    { id: "PLV6xtTRA4dlQo1w4iDOlMXH_p1BqchhBk", name: "Haramain Quran Translation" },
    { id: "PLV6xtTRA4dlSfPRfSrxqs7NR35FihpKo5", name: "Presentations & Performances" },
    { id: "PLV6xtTRA4dlRCdxXMfd8XWUhmP0rFJO2Z", name: "Direct Talks | Talking Head Speeches" },
    { id: "PLV6xtTRA4dlT5yNp6lvdoeDxDe6hX971P", name: "Salah with Translation" },
    { id: "PLV6xtTRA4dlTOYx7oaCZvGNijftSV9uTE", name: "Podcasts" }
  ];

  useEffect(() => {
    const thisRequestId = ++requestIdRef.current;

    const fetchPlaylistVideos = async () => {
      setLoading(true);
      setError(null);

      // The inner YouTube feed URL MUST be encoded, otherwise its own "?"
      // and "&" get parsed as top-level params by rss2json and playlist_id
      // is silently dropped.
      const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${currentPlaylist}`;
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Ignore this result if the user has since switched playlists again
        if (thisRequestId !== requestIdRef.current) return;

        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error(data.message || "Feed returned no items");
        }

        const formattedVideos = data.items
          .map((item) => {
            const videoId = item.link?.split("v=")[1]?.split("&")[0];
            if (!videoId) return null;
            return {
              id: videoId,
              title: item.title,
              // maxresdefault.jpg 404s for a lot of videos — hqdefault always exists
              thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            };
          })
          .filter(Boolean);

        setVideos(formattedVideos);
      } catch (err) {
        if (thisRequestId !== requestIdRef.current) return;
        console.error("Error fetching playlist videos:", err);
        setError("Couldn't load this playlist right now. Please try again in a moment.");
        setVideos([]);
      } finally {
        if (thisRequestId === requestIdRef.current) setLoading(false);
      }
    };

    fetchPlaylistVideos();
  }, [currentPlaylist, reloadKey]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="my-[100px] w-11/12 max-w-7xl mx-auto font-sans text-slate-900">
      {/* Header & Controls */}
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-orange-600 uppercase">
              My Works
            </h2>
          </div>

          <div className="flex p-1 bg-slate-100 rounded-2xl shadow-inner border border-slate-200">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${viewMode === "grid" ? "bg-white text-red-600 shadow-md" : "text-slate-400"}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("slider")}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${viewMode === "slider" ? "bg-white text-red-600 shadow-md" : "text-slate-400"}`}
            >
              Slider
            </button>
          </div>
        </div>

        {/* Playlist selector */}
        <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-6">
          {playlists.map((pl) => (
            <button
              key={pl.id}
              onClick={() => setCurrentPlaylist(pl.id)}
              disabled={loading && currentPlaylist === pl.id}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                currentPlaylist === pl.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-sky-400 hover:text-sky-600"
              }`}
            >
              {pl.name}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-400 font-medium">Loading playlist videos...</p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
          <p className="text-slate-500 font-medium">{error}</p>
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && videos.length === 0 && (
        <div className="flex items-center justify-center min-h-[200px] text-slate-400 font-medium">
          No videos found in this playlist yet.
        </div>
      )}

      {!loading && !error && videos.length > 0 && (
        <>
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <div className="relative aspect-video bg-slate-100">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        // last-resort fallback if hqdefault ever fails too
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-red-600 shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-800 text-lg leading-snug line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === "slider" && (
            <div className="relative group/slider">
              <button onClick={() => scrollSlider("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl w-14 h-14 rounded-full flex items-center justify-center border border-slate-100 hover:bg-red-50 opacity-0 group-hover/slider:opacity-100 transition-all">←</button>
              <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {videos.map((video) => (
                  <div key={video.id} className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-start group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                      <div className="relative aspect-video bg-slate-100">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-bold text-slate-700 truncate">{video.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollSlider("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl w-14 h-14 rounded-full flex items-center justify-center border border-slate-100 hover:bg-red-50 opacity-0 group-hover/slider:opacity-100 transition-all">→</button>
            </div>
          )}
        </>
      )}

      {/* Modal player */}
      {activeVideo && (
        <div className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-14 right-0 text-white/70 hover:text-white font-bold flex items-center gap-2">
              EXIT <span className="text-4xl">×</span>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; }` }} />
    </div>
  );
};

export default AdvancedVideoGallery;