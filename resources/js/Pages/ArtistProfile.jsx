import Card from "@/Components/Card";
import { Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import BottomPlayer from "@/Components/BottomPlayer";
function ArtistProfile(props) {
    const [stateTrigger, setStateTrigger] = useState(false);
    var data = router.restore("Songs/PlayerData");
    useEffect(() => {
        data = router.restore("Songs/PlayerData");
        console.log("data", data);
    }, [stateTrigger, data]);
    console.log(props.songs);
    console.log(props.artistData);
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <h1 className="mt-10 font-mono font-[1000] text-6xl">
                {props.artistData.name}
            </h1>
            <p className="mt-4 font-sans text-gray-400">
                {props.artistData.created_at.slice(0, 10)}
            </p>
            <div className="mt-10 border-2  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-content-between ">
                {props.songs.map((song) => {
                    return (
                        <div onClick={(e) => setStateTrigger(!stateTrigger)}>
                            <Card
                                artistName={song.artistName}
                                artistId={song.artistId}
                                songName={song.songName}
                                songImage={`storage/${song.songImagePath.slice(
                                    6
                                )}`}
                                songPath={`storage/${song?.songPath?.slice(6)}`}
                            />
                        </div>
                    );
                })}
            </div>
            <Link href="/dashboard">
                {" "}
                <button>back to dashboard</button>
            </Link>

            {data?.isPlaying && (
                <BottomPlayer
                    songName={data.songName}
                    artistName={data.artistName}
                    songLength={data.songLength}
                    imageSource={data.songImage}
                    songPath={``}
                />
            )}
        </div>
    );
}

export default ArtistProfile;
