import Card from "@/Components/Card";
import { Link } from "@inertiajs/react";
import React from "react";

function ArtistProfile(props) {
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
                        <Card
                            artistName={song.artistName}
                            artistId={song.artistId}
                            songName={song.songName}
                            songImage={`storage/${song.songImagePath.slice(6)}`}
                            songPath={`storage/${song?.songPath?.slice(6)}`}
                        />
                    );
                })}
            </div>
            <Link href="/dashboard">
                {" "}
                <button>back to dashboard</button>
            </Link>
        </div>
    );
}

export default ArtistProfile;
