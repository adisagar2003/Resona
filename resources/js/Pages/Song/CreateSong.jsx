import React from "react";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

function CreateSong(props) {
    const [file, setFile] = useState(null);
    const [songFile, setSongFile] = useState(null);
    const { data, setData, post, processing, errors, progress } = useForm({
        songName: "",
        songImage: null,
        artistName: props.user.name,
        songFile: null,
        songImagePath: "Storage/images/",
        songPath: "Storage/songs/",
        remember: false,
        artistId: props.user.id,
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    function submit(e) {
        e.preventDefault();
        router.post("/songs", data, {
            forceFormData: true,
        });
    }

    return (
        <form
            onSubmit={submit}
            enctype="multipart/form-data"
            class="p-10 md:grid md:grid-cols-3 md:gap-6"
        >
            {/* <input
                type="text"
                onChange={(e) => {
                    setData("songName", e.target.value);
                }}
            /> */}

            <TextInput
                handleChange={(e) => setData("songName", e.target.value)}
            />
            <InputLabel
                forInput="name"
                value="Name"
                onChange={(e) => {
                    setData("songName", e.target.value);
                }}
            />
            {errors.email && <div>{errors.email}</div>}
            <input
                type="file"
                name="song"
                onChange={(e) => setData("songFile", e.target.files[0])}
            />
            <input
                type="file"
                name="image"
                ml-5
                rounded-md
                border
                border-gray-300
                bg-white
                py-2
                px-3
                text-sm
                font-medium
                leading-4
                text-gray-700
                shadow-sm
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
                onChange={(e) => setData("songImage", e.target.files[0])}
            />
            {progress && (
                <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                </progress>
            )}

            <button
                type="submit"
                className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={processing}
            >
                Upload Song
            </button>
        </form>
    );
}

export default CreateSong;
