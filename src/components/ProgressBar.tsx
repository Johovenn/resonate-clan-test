import { Press_Start_2P } from "next/font/google";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

interface ProgressBarProps{
    currentProgress: number,
    total: number
}

export default function ProgressBar(props: ProgressBarProps){
    return(
        <div className="w-[150px] flex items-center justify-center gap-5">
            <p className={`${PressStart2P.className} text-white text-md lg:text-lg`}>
                {`${props.currentProgress} / ${props.total}`}
            </p>
        </div>
    )
}