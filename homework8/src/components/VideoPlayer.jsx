import React, { useRef } from 'react'

export default function VideoPlayer() {
  const videoRef = useRef()
    const imgRef = useRef(null);
  
    const handleMouseEnter = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = "scale(1.3)";
        imgRef.current.style.transition = "0.3s ease";
      }
    };
  
    const handleMouseLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = "scale(1)";
      }
    };

  const togglePlayVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const handleChangeTicks = (ticks) => {
    if (!videoRef.current) return
    videoRef.current.playbackRate = ticks
  }

  const handleSkip = (time) => {
    if (!videoRef.current) return
    videoRef.current.currentTime += time
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-900">

  <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
    <video
      ref={videoRef}
      onClick={togglePlayVideo}
      className="w-[600px] rounded-lg cursor-pointer"
      src="https://video.blender.org/static/web-videos/6402b77c-b61f-4a06-96ca-c8420a2becf4-480.mp4"
    />

    <div className="flex flex-wrap gap-3 items-center mt-4">

      <button
        onClick={() => handleChangeTicks(1)}
        className="px-4 py-2 rounded-full bg-gray-800 text-pink-500 hover:bg-gray-700 active:scale-95 transition"
      >
        1x
      </button>

      <button
        onClick={() => handleChangeTicks(2)}
        className="px-4 py-2 rounded-full bg-gray-800 text-pink-500 hover:bg-gray-700 active:scale-95 transition"
      >
        2x
      </button>

      <button
        onClick={() => handleSkip(-15)}
        className="px-4 py-2 rounded-full bg-gray-800 text-pink-500 hover:bg-gray-700 active:scale-95 transition"
      >
        -15s
      </button>

      <button
        onClick={() => handleSkip(15)}
        className="px-4 py-2 rounded-full bg-gray-800 text-pink-500 hover:bg-gray-700 active:scale-95 transition"
      >
        +15s
      </button>

      <div className="flex items-center gap-2 ml-2">
        <span className="text-pink-400 text-sm"></span>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          className="w-40 accent-pink-400 cursor-pointer"
          onChange={(e) => {
            if (!videoRef.current) return;
            videoRef.current.volume = Number(e.target.value);
          }}
        />
      </div>
    </div>
  </div>

   
    <div className="flex justify-center p-7 bg-gray-800 rounded-xl shadow-lg gap-6">
      <img
        ref={imgRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        alt="zoom"
        className="w-50 h-70 object-cover rounded-lg cursor-pointer"
      />
    
  

  <div className="flex flex-col gap-2">
    <p className="text-pink-400 -mt-1">
      <strong className="text-2xl">Big Buck Bunny</strong>
      <br />
      A large and lovable rabbit deals with three tiny bullies, led by the flying squirrel, in his own unique way.
    </p>

    <p className="text-gray-400">genre: Animation, Comedy, Family</p>
    <p className="text-gray-400">release date: 2008</p>
    <p className="text-gray-400">director: Sacha Goedegebure, Vincent Lanore</p>
    <p className="text-gray-400">writer: Sacha Goedegebure, Vincent Lanore</p>
    <p className="text-gray-400">stars: Bunny, Frank, Rinky</p>
  </div>
</div>

    </div>
  )
}