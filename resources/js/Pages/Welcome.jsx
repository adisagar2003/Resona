import ApplicationLogo from "@/Components/ApplicationLogo";
import React from "react";
import { Link } from "@inertiajs/react";

function Welcome() {
    return (
        <div class="flex flex-col justify-center gap-24  mt-10 items-center">
            <ApplicationLogo />
            <div class="flex flex-col gap-10 ">
                <h1 class="md:text-3xl text-gray-600   font-[600] font-mono">
                    The minimalist approach to music.
                </h1>
                <div className="flex gap-10 w-full justify-between">
                    <Link href="/login">
                        <button className="p-5 hover:bg-slate-300 rounded-lg">
                            Sign In
                        </button>
                    </Link>
                    <Link href="/dashboard">
                        <button
                            href="/dashboard"
                            className="p-5 hover:bg-slate-300 rounded-lg"
                        >
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
