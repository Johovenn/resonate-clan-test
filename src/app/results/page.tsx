"use client"

import { useClanResult } from "@/context/clanResultContext"


export default function ResultsPage(){
    const {clanResult} = useClanResult()

    return(
        <>
            <p>
                {`Clan Result : ${clanResult}`}
            </p>
        </>
    )
}