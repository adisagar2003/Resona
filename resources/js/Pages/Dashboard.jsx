import BottomPlayer from '@/Components/BottomPlayer';
import Card from '@/Components/Card';
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {router} from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard(props) {
    const [bottomPlayerData, setBottomPlayerData] = useState({isPlaying:false});
    const [triggerCard,setTriggerCard ] = useState(Math.random()*10000);
    var data = router.restore('Songs/PlayerData');

    useEffect(()=>{
        console.log(data);
        console.log('data changed');
    },[triggerCard])
    
    function changeData(a){
        console.log(
            a
        )
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Welcome back" className="mt-1" />

            <div className="py-12" onClick={()=>{setTriggerCard(Math.random()*1000)}}>
                <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 flex space-between">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" onClick={()=>{setTriggerCard(Math.random()*1000)}}>
                <Card artistName='Devilish Trio'  changeData={changeData}  songImage='https://i.scdn.co/image/ab67616d0000b2735fa79126b8c8b464059ff615' songName='Smoked out killaz' songLength={3.00} />
                
                </div>

                </div>
            </div>
            
            {data?.isPlaying && <BottomPlayer songName={data.songName} artistName={data.artistName} songLength={data.songLength} imageSource={data.songImage} artistName={data.artistName} />}
        </AuthenticatedLayout>
    );
}
