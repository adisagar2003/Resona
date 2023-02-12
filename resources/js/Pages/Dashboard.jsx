import BottomPlayer from '@/Components/BottomPlayer';
import Card from '@/Components/Card';
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {router} from '@inertiajs/react';
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard(props, { user, auth }) {
    console.log(props.songs, "HELLO THERE USER HERE HOW ARE YOU");
    const [bottomPlayerData, setBottomPlayerData] = useState({
        isPlaying: false,
    });
    const [triggerCard, setTriggerCard] = useState(Math.random() * 10000);
    var data = router.restore("Songs/PlayerData");

    useEffect(() => {
        console.log(data);
        console.log("data changed");
    }, [triggerCard]);

    function changeData(a) {
        console.log(a);
    }
    return (
        <div>
            {props.user ? (
                <AuthenticatedLayout
                    auth={props.auth}
                    errors={props.errors}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Dashboard
                        </h2>
                    }
                >
                    <Head title="Welcome back" className="mt-1" />

                    <div
                        className="py-12"
                        onClick={() => {
                            setTriggerCard(Math.random() * 1000);
                        }}
                    >
                        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 flex space-between">
                            <div
                                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                                onClick={() => {
                                    setTriggerCard(Math.random() * 1000);
                                }}
                            >
                                {props.songs.map((song) => {
                                    console.log(song.songPath, "SONG PATH");
                                    return (
                                        <Card
                                            artistName={song.artistName}
                                            artistId={song.artistId}
                                            songName={song.songName}
                                            songImage={`storage/${song.songImagePath.slice(
                                                6
                                            )}`}
                                            songPath={`storage/${song?.songPath?.slice(
                                                6
                                            )}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {data?.isPlaying && (
                        <BottomPlayer
                            songName={data.songName}
                            artistName={data.artistName}
                            songLength={data.songLength}
                            imageSource={data.songImage}
                        />
                    )}
                </AuthenticatedLayout>
            ) : (
                <div className="overflow-hidden ">
                    <div className="overflow-hidden w-screen z-[1] fixed h-screen bg-gradient-to-t from-zinc-800/90 ..." />
                    <div className="w-screen h-screen   grid fixed place-items-center">
                        <h1 className="md:text-6xl grid place-items-center font-[1000] z-[1000] text-slate-800 p-6 ">
                            Unlock 100+ Tracks on the go
                        </h1>
                    </div>

                    <div className="max-w-7xl overflow-y-hidden mx-auto overflow-hidden  sm:px-6 lg:px-8 flex space-between">
                        <div
                            className="grid overflow-y-hidden grid-cols-1 z-[0.1] gap-6 md:grid-cols-2 lg:grid-cols-4"
                            onClick={() => {
                                setTriggerCard(Math.random() * 1000);
                            }}
                        >
                            {props.songs.map((song) => {
                                console.log(song.songPath, "SONG PATH");
                                return (
                                    <Card
                                        artistName={song.artistName}
                                        songName={song.songName}
                                        songImage={`storage/${song.songImagePath.slice(
                                            6
                                        )}`}
                                        songPath={`storage/${song?.songPath?.slice(
                                            6
                                        )}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center absolute w-screen gap-20 bottom-0 z-[99] items-center">
                        <Link href="/login">
                            {" "}
                            <button className=" z-0  bottom-0 z-[99] p-4 rounded-lg bg-slate-300 mb-3 ">
                                Sign In
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className=" z-0  bottom-0 z-[99] p-4 rounded-lg bg-slate-300 mb-3 ">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
