import React, { useState } from 'react'
import { router } from '@inertiajs/react'
const playerData = router.restore('');
import {Link} from "@inertiajs/react";
function BottomPlayer({songName,artistName,songLength,imageSource}) {

    const [completed,setCompleted] = useState(true);
    const [time,setTime] = useState(0);
  return (
    <div class="fixed bottom-0 w-full">
        <div class="bg-white   p-4 pb-6 sm:p-4 lg:p-4 lg:pb-6 xl:p-1 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
  <div class="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
    <img src={imageSource} alt="" width="160" height="160" class="flex-none w-20 h-20 rounded-lg bg-gray-100" />
    <div class="min-w-0 flex-auto space-y-0.5">
  
      <h2 class="text-black  text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
       {songName}
      </h2>
      <Link to="/artist/id">
      <p class="text-gray-500  text-base sm:text-lg lg:text-base xl:text-lg font-medium">
       {artistName}
      </p>
      </Link>
    </div>
  </div>
  <div class="space-y-2">
    <div class="bg-gray-200 rounded-full overflow-hidden">
      <div class="bg-lime-500 w-1/2 h-1.5" role="progressbar" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
    </div>
    <div class="text-gray-500  flex justify-between text-sm font-medium tabular-nums">
      <div>0:00</div>
      <div>{songLength}</div>
    </div>
  </div>
</div>
<div class="bg-gray-50 text-black lg:rounded-b-xl py-4 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 items-center">
  <button type="button" class="mx-auto">
    <svg width="24" height="24" fill="none">
      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  </button>
  <button type="button" class="hidden sm:block lg:hidden xl:block mx-auto">
    <svg width="17" height="18">
      <path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
    </svg>
  </button>
  <button type="button" class="mx-auto">
    <svg width="34" height="39" fill="none">
      <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
      <path d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6" stroke="currentColor" stroke-width="1.5" />
      <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
    </svg>
  </button>
  <button type="button" class="mx-auto">
    <svg width="50" height="50" fill="none">
      <circle class="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24" stroke="currentColor" stroke-width="1.5" />
      <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
    </svg>
  </button>
  <button type="button" class="mx-auto">
    <svg width="34" height="39" fill="none">
      <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
      <path d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6" stroke="currentColor" stroke-width="1.5" />
      <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
    </svg>
  </button>
  <button type="button" class="hidden sm:block lg:hidden xl:block mx-auto">
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
      <path d="M17 0H15V18H17V0Z" fill="currentColor" />
      <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
    </svg>
  </button>
  
</div>
    </div>
  )
}

export default BottomPlayer