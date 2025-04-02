import { Press_Start_2P } from "next/font/google";
import { Progress } from "./ui/progress";

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

interface ProgressBarProps{
    currentProgress: number,
    total: number
}

export default function ProgressBar(props: ProgressBarProps){
    return(
        <div className="w-full flex items-center justify-between gap-5">
            <Progress value={props.currentProgress * 5} className="w-[80%]"></Progress>
            <p className={`${PressStart2P.className} text-white text-lg`}>
                {`${props.currentProgress} / ${props.total}`}
            </p>
        </div>
    )
}