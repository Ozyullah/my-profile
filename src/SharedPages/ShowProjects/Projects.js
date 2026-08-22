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




// 2nd

import React, { useRef, useState } from "react";

const AdvancedVideoGallery = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState(
    "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq"
  );

  const [viewMode, setViewMode] = useState("grid");

  // Slider reference
  const sliderRef = useRef(null);

  // =====================================================
  // PLAYLISTS
  // =====================================================

  const playlists = [
    {
      id: "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq",
      name: "Event Highlights | Best Moments",
    },
    {
      id: "PLV6xtTRA4dlQo1w4iDOlMXH_p1BqchhBk",
      name: "Haramain Quran Translation",
    },
    {
      id: "PLV6xtTRA4dlSfPRfSrxqs7NR35FihpKo5",
      name: "Presentations & Performances",
    },
    {
      id: "PLV6xtTRA4dlRCdxXMfd8XWUhmP0rFJO2Z",
      name: "Direct Talks | Talking Head Speeches",
    },
    {
      id: "PLV6xtTRA4dlT5yNp6lvdoeDxDe6hX971P",
      name: "Salah with Translation",
    },
    {
      id: "PLV6xtTRA4dlTOYx7oaCZvGNijftSV9uTE",
      name: "Podcasts",
    },
  ];

  // =====================================================
  // ACTIVE PLAYLIST
  // =====================================================

  const activePlaylist = playlists.find(
    (playlist) => playlist.id === currentPlaylist
  );

  // =====================================================
  // SLIDER SCROLL
  // =====================================================

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const scrollAmount = slider.clientWidth * 0.75;

    slider.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <section className="my-[100px] w-11/12 max-w-7xl mx-auto font-sans text-slate-900">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex flex-col gap-8 mb-10">

        {/* TITLE + VIEW MODE */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-orange-600 uppercase">
              My Works
            </h2>

            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Videos, presentations and creative works
            </p>

          </div>

          {/* GRID / SLIDER */}

          <div className="flex p-1 bg-slate-100 rounded-2xl shadow-inner border border-slate-200">

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-7 py-2.5 rounded-xl font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-white text-red-600 shadow-md"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Grid
            </button>

            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`px-7 py-2.5 rounded-xl font-bold transition-all ${
                viewMode === "slider"
                  ? "bg-white text-red-600 shadow-md"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Slider
            </button>

          </div>

        </div>


        {/* =====================================================
            PLAYLIST BUTTONS
        ====================================================== */}

        <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-6">

          {playlists.map((playlist) => (

            <button
              key={playlist.id}
              type="button"
              onClick={() => setCurrentPlaylist(playlist.id)}
              className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                md:text-base
                font-bold
                border
                transition-all
                duration-300

                ${
                  currentPlaylist === playlist.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.03]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-400 hover:text-sky-600 hover:shadow-md"
                }
              `}
            >
              {playlist.name}
            </button>

          ))}

        </div>

      </div>


      {/* =====================================================
          CURRENT PLAYLIST TITLE
      ====================================================== */}

      <div className="mb-6">

        <h3 className="text-xl md:text-2xl font-bold text-slate-800">
          {activePlaylist?.name}
        </h3>

        <p className="text-sm text-slate-400 mt-1">
          YouTube Playlist
        </p>

      </div>


      {/* =====================================================
          GRID VIEW
      ====================================================== */}

      {viewMode === "grid" && (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* =================================================
              MAIN PLAYER
          ================================================= */}

          <div className="lg:col-span-2">

            <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl border border-slate-200">

              <iframe
                key={currentPlaylist}
                src={`https://www.youtube.com/embed/videoseries?list=${currentPlaylist}&rel=0`}
                title={
                  activePlaylist?.name ||
                  "YouTube Playlist"
                }
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            </div>

          </div>


          {/* =================================================
              PLAYLIST INFORMATION
          ================================================= */}

          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-center">

            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-5 shadow-lg">

              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>

            <h3 className="text-2xl font-black text-slate-800 leading-tight">
              {activePlaylist?.name}
            </h3>

            <p className="text-slate-500 mt-3 leading-relaxed">
              Watch the complete playlist directly from
              YouTube. Use the playlist controls inside the
              video player to browse through all available
              videos.
            </p>

            <a
              href={`https://www.youtube.com/playlist?list=${currentPlaylist}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              Open Playlist on YouTube

              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-current"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>

            </a>

          </div>

        </div>

      )}


      {/* =====================================================
          SLIDER VIEW
      ====================================================== */}

      {viewMode === "slider" && (

        <div className="relative group/video-slider">

          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollSlider("left")}
            aria-label="Previous playlist"
            className="
              absolute
              left-2
              md:-left-5
              top-1/2
              -translate-y-1/2
              z-30

              w-11
              h-11
              md:w-14
              md:h-14

              rounded-full
              bg-white

              border
              border-slate-200

              shadow-xl

              flex
              items-center
              justify-center

              text-slate-800

              hover:bg-slate-900
              hover:text-white

              hover:scale-110
              active:scale-95

              transition-all
              duration-300
            "
          >

            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>

          </button>


          {/* =================================================
              VIDEO SLIDER
          ================================================= */}

          <div
            ref={sliderRef}
            className="
              flex
              overflow-x-auto
              snap-x
              snap-mandatory
              gap-5
              md:gap-6
              pb-6
              px-2

              scroll-smooth

              no-scrollbar
            "
          >

            {playlists.map((playlist) => (

              <div
                key={playlist.id}
                className="
                  min-w-[88%]
                  sm:min-w-[75%]
                  md:min-w-[60%]
                  lg:min-w-[48%]
                  xl:min-w-[40%]

                  snap-start
                "
              >

                <div
                  className={`
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border

                    transition-all
                    duration-300

                    ${
                      currentPlaylist === playlist.id
                        ? `
                          border-slate-900
                          shadow-2xl
                          scale-[1.01]
                        `
                        : `
                          border-slate-100
                          shadow-sm
                          hover:shadow-xl
                        `
                    }
                  `}
                >

                  {/* =========================================
                      YOUTUBE VIDEO
                  ========================================== */}

                  <div className="relative aspect-video bg-black">

                    <iframe
                      key={`${playlist.id}-${currentPlaylist}`}
                      src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}&rel=0`}
                      title={playlist.name}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      loading="lazy"
                      allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share
                      "
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />

                  </div>


                  {/* =========================================
                      PLAYLIST INFORMATION
                  ========================================== */}

                  <div className="p-5 md:p-6">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="
                          font-bold
                          text-lg
                          md:text-xl
                          text-slate-800
                          leading-snug
                        ">
                          {playlist.name}
                        </h3>

                        <p className="
                          text-sm
                          text-slate-400
                          mt-2
                        ">
                          Watch the complete playlist
                        </p>

                      </div>


                      {/* PLAY ICON */}

                      <div className="
                        shrink-0
                        w-10
                        h-10
                        rounded-full
                        bg-red-50
                        text-red-600
                        flex
                        items-center
                        justify-center
                      ">

                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>

                      </div>

                    </div>


                    {/* SELECT BUTTON */}

                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPlaylist(
                          playlist.id
                        )
                      }
                      className={`
                        mt-5
                        px-5
                        py-2.5
                        rounded-xl
                        font-bold
                        text-sm
                        transition-all

                        ${
                          currentPlaylist === playlist.id
                            ? `
                              bg-slate-900
                              text-white
                              shadow-md
                            `
                            : `
                              bg-slate-100
                              text-slate-700
                              hover:bg-red-50
                              hover:text-red-600
                            `
                        }
                      `}
                    >

                      {currentPlaylist === playlist.id
                        ? "✓ Currently Selected"
                        : "Select Playlist"}

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollSlider("right")}
            aria-label="Next playlist"
            className="
              absolute
              right-2
              md:-right-5
              top-1/2
              -translate-y-1/2
              z-30

              w-11
              h-11
              md:w-14
              md:h-14

              rounded-full
              bg-white

              border
              border-slate-200

              shadow-xl

              flex
              items-center
              justify-center

              text-slate-800

              hover:bg-slate-900
              hover:text-white

              hover:scale-110
              active:scale-95

              transition-all
              duration-300
            "
          >

            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>

          </button>

        </div>

      )}


      {/* =====================================================
          CSS
      ====================================================== */}

      <style>
        {`

          /* Hide scrollbar */

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }


          /* Smooth scrolling */

          .no-scrollbar {
            scroll-behavior: smooth;
          }


          /* Prevent iframe selection issues */

          iframe {
            border: 0;
          }

        `}
      </style>

    </section>
  );
};

export default AdvancedVideoGallery;



// 3rd

// import React, { useState } from "react";

// const AdvancedVideoGallery = () => {
//   const [viewMode, setViewMode] = useState("grid");

//   const playlists = [
//     {
//       id: "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq",
//       name: "Event Highlights | Best Moments",
//       description:
//         "Event highlights, memorable moments and special programs.",
//     },
//     {
//       id: "PLV6xtTRA4dlQo1w4iDOlMXH_p1BqchhBk",
//       name: "Haramain Quran Translation",
//       description:
//         "Quran recitation and translation from Haramain programs.",
//     },
//     {
//       id: "PLV6xtTRA4dlSfPRfSrxqs7NR35FihpKo5",
//       name: "Presentations & Performances",
//       description:
//         "Presentations, performances and special events.",
//     },
//     {
//       id: "PLV6xtTRA4dlRCdxXMfd8XWUhmP0rFJO2Z",
//       name: "Direct Talks | Talking Head Speeches",
//       description:
//         "Direct talks, speeches, interviews and discussions.",
//     },
//     {
//       id: "PLV6xtTRA4dlT5yNp6lvdoeDxDe6hX971P",
//       name: "Salah with Translation",
//       description:
//         "Salah videos with translation and explanation.",
//     },
//     {
//       id: "PLV6xtTRA4dlTOYx7oaCZvGNijftSV9uTE",
//       name: "Podcasts",
//       description:
//         "Podcasts, conversations and long-form discussions.",
//     },
//   ];

//   return (
//     <section className="my-[100px] w-11/12 max-w-7xl mx-auto font-sans text-slate-900">

//       {/* =====================================================
//           HEADER
//       ====================================================== */}

//       <div className="flex flex-col gap-8 mb-12">

//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

//           <div>
//             <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-orange-600 uppercase">
//               My Works
//             </h2>

//             <p className="text-slate-400 mt-2">
//               Videos, presentations and creative works
//             </p>
//           </div>

//           {/* GRID / SLIDER */}

//           <div className="flex p-1 bg-slate-100 rounded-2xl shadow-inner border border-slate-200">

//             <button
//               type="button"
//               onClick={() => setViewMode("grid")}
//               className={`px-7 py-2.5 rounded-xl font-bold transition-all ${
//                 viewMode === "grid"
//                   ? "bg-white text-red-600 shadow-md"
//                   : "text-slate-400 hover:text-slate-700"
//               }`}
//             >
//               Grid
//             </button>

//             <button
//               type="button"
//               onClick={() => setViewMode("slider")}
//               className={`px-7 py-2.5 rounded-xl font-bold transition-all ${
//                 viewMode === "slider"
//                   ? "bg-white text-red-600 shadow-md"
//                   : "text-slate-400 hover:text-slate-700"
//               }`}
//             >
//               Slider
//             </button>

//           </div>

//         </div>

//         {/* =====================================================
//             PLAYLIST CATEGORY BUTTONS
//         ====================================================== */}

//         <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-6">

//           {playlists.map((playlist) => (

//             <a
//               key={playlist.id}
//               href={`#playlist-${playlist.id}`}
//               className="px-5 py-2.5 rounded-full text-sm md:text-base font-bold bg-white text-slate-600 border border-slate-200 hover:border-sky-400 hover:text-sky-600 hover:shadow-md transition-all"
//             >
//               {playlist.name}
//             </a>

//           ))}

//         </div>

//       </div>

//       {/* =====================================================
//           GRID VIEW
//       ====================================================== */}

//       {viewMode === "grid" && (

//         <div className="space-y-16">

//           {playlists.map((playlist, index) => (

//             <div
//               key={playlist.id}
//               id={`playlist-${playlist.id}`}
//               className="scroll-mt-24"
//             >

//               {/* ==========================================
//                   PLAYLIST TITLE
//               =========================================== */}

//               <div className="mb-5">

//                 <div className="flex items-start gap-4">

//                   {/* NUMBER */}

//                   <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   <div>

//                     <h3 className="text-2xl md:text-3xl font-black text-slate-800">
//                       {playlist.name}
//                     </h3>

//                     <p className="text-slate-400 mt-1">
//                       {playlist.description}
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* ==========================================
//                   COMPLETE PLAYLIST UNDER TITLE
//               =========================================== */}

//               <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

//                 <iframe
//                   src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}&rel=0`}
//                   title={playlist.name}
//                   className="absolute inset-0 w-full h-full"
//                   frameBorder="0"
//                   loading="lazy"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 />

//               </div>

//               {/* YOUTUBE LINK */}

//               <div className="flex justify-end mt-4">

//                 <a
//                   href={`https://www.youtube.com/playlist?list=${playlist.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all shadow-md"
//                 >
//                   Watch on YouTube

//                   <svg
//                     viewBox="0 0 24 24"
//                     className="w-5 h-5 fill-none stroke-current"
//                     strokeWidth="2"
//                   >
//                     <path d="M7 17L17 7" />
//                     <path d="M7 7h10v10" />
//                   </svg>

//                 </a>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       {/* =====================================================
//           SLIDER VIEW
//       ====================================================== */}

//       {viewMode === "slider" && (

//         <div className="space-y-14">

//           {playlists.map((playlist, index) => (

//             <div
//               key={playlist.id}
//               id={`playlist-slider-${playlist.id}`}
//               className="scroll-mt-24"
//             >

//               {/* TITLE */}

//               <div className="mb-5 flex items-center gap-4">

//                 <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 <div>

//                   <h3 className="text-2xl md:text-3xl font-black text-slate-800">
//                     {playlist.name}
//                   </h3>

//                   <p className="text-slate-400 text-sm mt-1">
//                     {playlist.description}
//                   </p>

//                 </div>

//               </div>

//               {/* PLAYLIST */}

//               <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

//                 <iframe
//                   src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}&rel=0`}
//                   title={playlist.name}
//                   className="absolute inset-0 w-full h-full"
//                   frameBorder="0"
//                   loading="lazy"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 />

//               </div>

//               {/* LINK */}

//               <div className="flex justify-end mt-4">

//                 <a
//                   href={`https://www.youtube.com/playlist?list=${playlist.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all"
//                 >
//                   Open Full Playlist
//                 </a>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       {/* =====================================================
//           STYLE
//       ====================================================== */}

//       <style>
//         {`
//           html {
//             scroll-behavior: smooth;
//           }
//         `}
//       </style>

//     </section>
//   );
// };

// export default AdvancedVideoGallery;


// 4th

// import React, { useEffect, useRef, useState } from "react";

// // ============================================================
// // YOUTUBE API KEY
// // ============================================================
// // Create this from Google Cloud Console.
// // IMPORTANT: Restrict this key to your website domain.
// // ============================================================

// const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY";


// // ============================================================
// // PLAYLISTS
// // ============================================================

// const playlists = [
//   {
//     id: "event",
//     playlistId: "PLV6xtTRA4dlS2Y7NracUidSNRN-DEaGLq",
//     name: "Event Highlights | Best Moments",
//   },

//   {
//     id: "quran",
//     playlistId: "PLV6xtTRA4dlQo1w4iDOlMXH_p1BqchhBk",
//     name: "Haramain Quran Translation",
//   },

//   {
//     id: "presentations",
//     playlistId: "PLV6xtTRA4dlSfPRfSrxqs7NR35FihpKo5",
//     name: "Presentations & Performances",
//   },

//   {
//     id: "talks",
//     playlistId: "PLV6xtTRA4dlRCdxXMfd8XWUhmP0rFJO2Z",
//     name: "Direct Talks | Talking Head Speeches",
//   },

//   {
//     id: "salah",
//     playlistId: "PLV6xtTRA4dlT5yNp6lvdoeDxDe6hX971P",
//     name: "Salah with Translation",
//   },

//   {
//     id: "podcasts",
//     playlistId: "PLV6xtTRA4dlTOYx7oaCZvGNijftSV9uTE",
//     name: "Podcasts",
//   },
// ];


// // ============================================================
// // COMPONENT
// // ============================================================

// const AdvancedVideoGallery = () => {
//   const [currentPlaylist, setCurrentPlaylist] = useState(
//     playlists[0].id
//   );

//   const [videos, setVideos] = useState([]);

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");

//   const [activeVideo, setActiveVideo] = useState(null);

//   const [viewMode, setViewMode] = useState("grid");

//   const sliderRef = useRef(null);


//   // ============================================================
//   // ACTIVE PLAYLIST
//   // ============================================================

//   const activePlaylist = playlists.find(
//     (playlist) => playlist.id === currentPlaylist
//   );


//   // ============================================================
//   // FETCH ALL PLAYLIST VIDEOS
//   // ============================================================

//   const fetchPlaylistVideos = async (playlistId) => {
//     setLoading(true);
//     setError("");
//     setVideos([]);

//     try {
//       if (
//         !YOUTUBE_API_KEY ||
//         YOUTUBE_API_KEY === "YOUR_YOUTUBE_API_KEY"
//       ) {
//         throw new Error(
//           "YouTube API key is missing."
//         );
//       }


//       let allVideos = [];

//       let nextPageToken = "";


//       // ========================================================
//       // PAGINATION
//       // ========================================================

//       do {
//         const url =
//           `https://www.googleapis.com/youtube/v3/playlistItems` +
//           `?part=snippet,contentDetails` +
//           `&playlistId=${playlistId}` +
//           `&maxResults=50` +
//           `&key=${YOUTUBE_API_KEY}` +
//           (nextPageToken
//             ? `&pageToken=${nextPageToken}`
//             : "");


//         const response = await fetch(url);


//         const data = await response.json();


//         console.log(
//           "YouTube API response:",
//           data
//         );


//         if (!response.ok) {
//           throw new Error(
//             data?.error?.message ||
//               "YouTube API request failed."
//           );
//         }


//         if (data.error) {
//           throw new Error(
//             data.error.message ||
//               "YouTube API error."
//           );
//         }


//         const formattedVideos =
//           (data.items || [])
//             .map((item) => {

//               const videoId =
//                 item?.contentDetails?.videoId;


//               const snippet =
//                 item?.snippet;


//               if (!videoId || !snippet) {
//                 return null;
//               }


//               // Skip deleted/private videos
//               if (
//                 snippet.title ===
//                   "Deleted video" ||
//                 snippet.title ===
//                   "Private video"
//               ) {
//                 return null;
//               }


//               return {
//                 id: videoId,

//                 title:
//                   snippet.title ||
//                   "YouTube Video",

//                 description:
//                   snippet.description ||
//                   "",

//                 thumbnail:
//                   snippet.thumbnails?.maxres?.url ||
//                   snippet.thumbnails?.high?.url ||
//                   snippet.thumbnails?.medium?.url ||
//                   `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,

//                 publishedAt:
//                   snippet.publishedAt,

//                 position:
//                   snippet.position,
//               };
//             })
//             .filter(Boolean);


//         allVideos = [
//           ...allVideos,
//           ...formattedVideos,
//         ];


//         nextPageToken =
//           data.nextPageToken || "";


//       } while (nextPageToken);


//       console.log(
//         `Loaded ${allVideos.length} videos`
//       );


//       setVideos(allVideos);


//     } catch (err) {

//       console.error(
//         "YouTube playlist error:",
//         err
//       );


//       setError(
//         err.message ||
//           "Unable to load YouTube videos."
//       );


//     } finally {

//       setLoading(false);

//     }
//   };


//   // ============================================================
//   // LOAD PLAYLIST WHEN BUTTON CHANGES
//   // ============================================================

//   useEffect(() => {

//     if (!activePlaylist) return;

//     fetchPlaylistVideos(
//       activePlaylist.playlistId
//     );

//   }, [currentPlaylist]);


//   // ============================================================
//   // OPEN VIDEO
//   // ============================================================

//   const openVideo = (videoId) => {

//     setActiveVideo(videoId);

//   };


//   // ============================================================
//   // CLOSE VIDEO
//   // ============================================================

//   const closeVideo = () => {

//     setActiveVideo(null);

//   };


//   // ============================================================
//   // SLIDER
//   // ============================================================

//   const scrollSlider = (direction) => {

//     if (!sliderRef.current) return;


//     const amount =
//       sliderRef.current.clientWidth *
//       0.85;


//     sliderRef.current.scrollBy({

//       left:
//         direction === "left"
//           ? -amount
//           : amount,

//       behavior: "smooth",

//     });

//   };


//   // ============================================================
//   // VIDEO CARD
//   // ============================================================

//   const VideoCard = ({
//     video,
//     index,
//   }) => {

//     return (

//       <article
//         onClick={() =>
//           openVideo(video.id)
//         }
//         className="
//           group
//           cursor-pointer
//           bg-white
//           rounded-3xl
//           overflow-hidden
//           border
//           border-slate-100
//           shadow-sm
//           hover:shadow-2xl
//           hover:-translate-y-1
//           transition-all
//           duration-500
//         "
//       >

//         {/* ==================================================
//             THUMBNAIL
//         =================================================== */}

//         <div
//           className="
//             relative
//             aspect-video
//             overflow-hidden
//             bg-slate-200
//           "
//         >

//           <img
//             src={video.thumbnail}
//             alt={video.title}
//             loading="lazy"
//             className="
//               w-full
//               h-full
//               object-cover
//               group-hover:scale-110
//               transition-transform
//               duration-700
//             "
//             onError={(e) => {

//               e.currentTarget.src =
//                 `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

//             }}
//           />


//           {/* DARK OVERLAY */}

//           <div
//             className="
//               absolute
//               inset-0
//               bg-black/45
//               flex
//               items-center
//               justify-center
//               opacity-0
//               group-hover:opacity-100
//               transition-opacity
//               duration-300
//             "
//           >

//             {/* PLAY BUTTON */}

//             <div
//               className="
//                 w-16
//                 h-16
//                 bg-white
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 text-red-600
//                 shadow-2xl
//                 scale-75
//                 group-hover:scale-100
//                 transition-transform
//               "
//             >

//               <svg
//                 viewBox="0 0 24 24"
//                 className="
//                   w-8
//                   h-8
//                   fill-current
//                 "
//               >

//                 <path d="M8 5v14l11-7z" />

//               </svg>

//             </div>

//           </div>


//           {/* VIDEO NUMBER */}

//           <div
//             className="
//               absolute
//               top-3
//               left-3
//               bg-black/75
//               text-white
//               px-3
//               py-1
//               rounded-full
//               text-xs
//               font-bold
//             "
//           >

//             #{index + 1}

//           </div>


//           {/* YOUTUBE BADGE */}

//           <div
//             className="
//               absolute
//               bottom-3
//               left-3
//               bg-red-600
//               text-white
//               px-3
//               py-1
//               rounded-full
//               text-xs
//               font-bold
//             "
//           >

//             YouTube

//           </div>

//         </div>


//         {/* ==================================================
//             TITLE
//         =================================================== */}

//         <div className="p-5">

//           <h3
//             className="
//               font-bold
//               text-slate-800
//               text-base
//               md:text-lg
//               leading-snug
//               line-clamp-2
//             "
//           >

//             {video.title}

//           </h3>


//           <p
//             className="
//               text-xs
//               text-slate-400
//               mt-2
//             "
//           >

//             Click to watch

//           </p>

//         </div>

//       </article>

//     );
//   };


//   // ============================================================
//   // RETURN
//   // ============================================================

//   return (

//     <section
//       className="
//         my-[100px]
//         w-11/12
//         max-w-7xl
//         mx-auto
//         font-sans
//         text-slate-900
//       "
//     >

//       {/* ======================================================
//           HEADER
//       ======================================================= */}

//       <div
//         className="
//           flex
//           flex-col
//           gap-8
//           mb-12
//         "
//       >

//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row
//             justify-between
//             items-start
//             md:items-center
//             gap-6
//           "
//         >

//           {/* TITLE */}

//           <div>

//             <h2
//               className="
//                 text-4xl
//                 md:text-5xl
//                 font-black
//                 tracking-tight
//                 text-transparent
//                 bg-clip-text
//                 bg-gradient-to-r
//                 from-sky-600
//                 to-orange-600
//                 uppercase
//               "
//             >

//               My Works

//             </h2>


//             <p
//               className="
//                 text-slate-400
//                 mt-2
//               "
//             >

//               Videos, presentations and creative works

//             </p>

//           </div>


//           {/* GRID / SLIDER */}

//           <div
//             className="
//               flex
//               p-1
//               bg-slate-100
//               rounded-2xl
//               shadow-inner
//               border
//               border-slate-200
//             "
//           >

//             <button
//               type="button"
//               onClick={() =>
//                 setViewMode("grid")
//               }
//               className={`
//                 px-6
//                 py-2
//                 rounded-xl
//                 font-bold
//                 transition-all

//                 ${
//                   viewMode === "grid"
//                     ? "bg-white text-red-600 shadow-md"
//                     : "text-slate-400"
//                 }
//               `}
//             >

//               Grid

//             </button>


//             <button
//               type="button"
//               onClick={() =>
//                 setViewMode("slider")
//               }
//               className={`
//                 px-6
//                 py-2
//                 rounded-xl
//                 font-bold
//                 transition-all

//                 ${
//                   viewMode === "slider"
//                     ? "bg-white text-red-600 shadow-md"
//                     : "text-slate-400"
//                 }
//               `}
//             >

//               Slider

//             </button>

//           </div>

//         </div>


//         {/* ====================================================
//             PLAYLIST BUTTONS
//         ===================================================== */}

//         <div
//           className="
//             flex
//             flex-wrap
//             gap-3
//             border-b
//             border-slate-100
//             pb-6
//           "
//         >

//           {playlists.map(
//             (playlist) => (

//               <button
//                 key={playlist.id}
//                 type="button"
//                 onClick={() =>
//                   setCurrentPlaylist(
//                     playlist.id
//                   )
//                 }
//                 className={`
//                   px-5
//                   py-2.5
//                   rounded-full
//                   text-sm
//                   md:text-base
//                   font-bold
//                   border
//                   transition-all
//                   duration-300

//                   ${
//                     currentPlaylist ===
//                     playlist.id
//                       ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
//                       : "bg-white text-slate-600 border-slate-200 hover:border-sky-400 hover:text-sky-600"
//                   }
//                 `}
//               >

//                 {playlist.name}

//               </button>

//             )
//           )}

//         </div>

//       </div>


//       {/* ======================================================
//           PLAYLIST TITLE
//       ======================================================= */}

//       <div className="mb-8">

//         <h3
//           className="
//             text-2xl
//             md:text-3xl
//             font-black
//             text-slate-800
//           "
//         >

//           {activePlaylist?.name}

//         </h3>


//         <div
//           className="
//             mt-3
//             w-20
//             h-1
//             rounded-full
//             bg-gradient-to-r
//             from-sky-500
//             to-orange-500
//           "
//         />

//       </div>


//       {/* ======================================================
//           LOADING
//       ======================================================= */}

//       {loading && (

//         <div
//           className="
//             min-h-[300px]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-12
//               h-12
//               border-4
//               border-red-600
//               border-t-transparent
//               rounded-full
//               animate-spin
//             "
//           />


//           <p
//             className="
//               mt-5
//               text-slate-400
//               font-medium
//             "
//           >

//             Loading videos...

//           </p>

//         </div>

//       )}


//       {/* ======================================================
//           ERROR
//       ======================================================= */}

//       {!loading && error && (

//         <div
//           className="
//             min-h-[300px]
//             rounded-3xl
//             border
//             border-red-100
//             bg-red-50
//             flex
//             flex-col
//             items-center
//             justify-center
//             text-center
//             p-8
//           "
//         >

//           <div className="text-5xl mb-4">
//             ⚠️
//           </div>


//           <h4
//             className="
//               text-xl
//               font-bold
//               text-red-600
//             "
//           >

//             Unable to load videos

//           </h4>


//           <p
//             className="
//               mt-2
//               text-red-400
//               max-w-xl
//             "
//           >

//             {error}

//           </p>


//           <button
//             type="button"
//             onClick={() =>
//               fetchPlaylistVideos(
//                 activePlaylist.playlistId
//               )
//             }
//             className="
//               mt-6
//               px-6
//               py-3
//               bg-slate-900
//               text-white
//               rounded-xl
//               font-bold
//               hover:bg-slate-700
//               transition
//             "
//           >

//             Try Again

//           </button>

//         </div>

//       )}


//       {/* ======================================================
//           NO VIDEOS
//       ======================================================= */}

//       {!loading &&
//         !error &&
//         videos.length === 0 && (

//           <div
//             className="
//               min-h-[300px]
//               rounded-3xl
//               border
//               border-dashed
//               border-slate-300
//               flex
//               flex-col
//               items-center
//               justify-center
//               text-center
//               p-10
//             "
//           >

//             <div className="text-5xl mb-4">
//               🎬
//             </div>


//             <h4
//               className="
//                 text-xl
//                 font-bold
//                 text-slate-700
//               "
//             >

//               No videos found

//             </h4>


//             <p
//               className="
//                 text-slate-400
//                 mt-2
//               "
//             >

//               This playlist may be empty or private.

//             </p>

//           </div>

//         )}


//       {/* ======================================================
//           GRID
//       ======================================================= */}

//       {!loading &&
//         !error &&
//         videos.length > 0 &&
//         viewMode === "grid" && (

//           <div
//             className="
//               grid
//               grid-cols-1
//               sm:grid-cols-2
//               lg:grid-cols-3
//               gap-7
//             "
//           >

//             {videos.map(
//               (video, index) => (

//                 <VideoCard
//                   key={video.id}
//                   video={video}
//                   index={index}
//                 />

//               )
//             )}

//           </div>

//         )}


//       {/* ======================================================
//           SLIDER
//       ======================================================= */}

//       {!loading &&
//         !error &&
//         videos.length > 0 &&
//         viewMode === "slider" && (

//           <div className="relative">

//             {/* LEFT */}

//             <button
//               type="button"
//               onClick={() =>
//                 scrollSlider("left")
//               }
//               className="
//                 absolute
//                 -left-5
//                 top-1/2
//                 -translate-y-1/2
//                 z-20
//                 w-12
//                 h-12
//                 rounded-full
//                 bg-white
//                 shadow-2xl
//                 border
//                 border-slate-200
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 hover:bg-red-50
//                 hover:text-red-600
//                 transition
//               "
//             >

//               ←

//             </button>


//             {/* VIDEOS */}

//             <div
//               ref={sliderRef}
//               className="
//                 flex
//                 gap-6
//                 overflow-x-auto
//                 snap-x
//                 snap-mandatory
//                 no-scrollbar
//                 pb-6
//               "
//             >

//               {videos.map(
//                 (video, index) => (

//                   <div
//                     key={video.id}
//                     className="
//                       min-w-[85%]
//                       sm:min-w-[60%]
//                       md:min-w-[45%]
//                       lg:min-w-[32%]
//                       snap-start
//                     "
//                   >

//                     <VideoCard
//                       video={video}
//                       index={index}
//                     />

//                   </div>

//                 )
//               )}

//             </div>


//             {/* RIGHT */}

//             <button
//               type="button"
//               onClick={() =>
//                 scrollSlider("right")
//               }
//               className="
//                 absolute
//                 -right-5
//                 top-1/2
//                 -translate-y-1/2
//                 z-20
//                 w-12
//                 h-12
//                 rounded-full
//                 bg-white
//                 shadow-2xl
//                 border
//                 border-slate-200
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 hover:bg-red-50
//                 hover:text-red-600
//                 transition
//               "
//             >

//               →

//             </button>

//           </div>

//         )}


//       {/* ======================================================
//           VIDEO MODAL
//       ======================================================= */}

//       {activeVideo && (

//         <div
//           className="
//             fixed
//             inset-0
//             z-[9999]
//             bg-black/95
//             flex
//             items-center
//             justify-center
//             p-4
//           "
//           onClick={closeVideo}
//         >

//           <div
//             className="
//               relative
//               w-full
//               max-w-6xl
//             "
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             {/* CLOSE */}

//             <button
//               type="button"
//               onClick={closeVideo}
//               className="
//                 absolute
//                 -top-14
//                 right-0
//                 text-white
//                 text-4xl
//                 font-bold
//                 hover:text-red-400
//                 transition
//               "
//             >

//               ×

//             </button>


//             {/* PLAYER */}

//             <div
//               className="
//                 relative
//                 aspect-video
//                 bg-black
//                 rounded-2xl
//                 md:rounded-3xl
//                 overflow-hidden
//                 shadow-2xl
//               "
//             >

//               <iframe
//                 key={activeVideo}
//                 src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
//                 title="YouTube Video"
//                 className="
//                   absolute
//                   inset-0
//                   w-full
//                   h-full
//                 "
//                 frameBorder="0"
//                 allow="
//                   accelerometer;
//                   autoplay;
//                   clipboard-write;
//                   encrypted-media;
//                   gyroscope;
//                   picture-in-picture;
//                   web-share
//                 "
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//               />

//             </div>

//           </div>

//         </div>

//       )}


//       {/* ======================================================
//           SCROLLBAR
//       ======================================================= */}

//       <style>
//         {`
//           .no-scrollbar::-webkit-scrollbar {
//             display: none;
//           }

//           .no-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>

//     </section>

//   );
// };


// export default AdvancedVideoGallery;


