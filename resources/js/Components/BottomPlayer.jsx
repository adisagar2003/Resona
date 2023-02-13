import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
const playerData = router.restore("");
import { Link } from "@inertiajs/react";
import ReactAudioPlayer from "react-audio-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
function BottomPlayer({
    songName,
    artistName,
    songLength,
    imageSource,
    songPath,
}) {
    useEffect(() => {
        console.log("çhanged");
    }, [router.restore("Songs/PlayerData")]);
    console.log(songPath, "Bottom Player");
    var data = router.restore("Songs/PlayerData");
    console.log(data.songPath, "song path");
    console.log(data);
    const [completed, setCompleted] = useState(true);
    const [time, setTime] = useState(0);
    return (
        <div class="fixed bottom-0 w-full">
            <ReactAudioPlayer
                class="bg-white   p-4 pb-6 sm:p-4 lg:p-4 lg:pb-6 xl:p-1 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
                src={`http://127.0.0.1:8000/${data.songPath}`}
                autoPlay
                controls
            />
        </div>
    );
}

export default BottomPlayer;
