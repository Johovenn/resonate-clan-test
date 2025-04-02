import { Space_Grotesk } from "next/font/google";


const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ["400", "700"] });

interface QuestionBoxProps{
    question: string
}

export default function QuestionBox(props: QuestionBoxProps){
    return(  
    <div className="px-7 w-[750px] h-[200px] rounded-3xl relative flex items-center justify-center text-center border border-white">
        <div className="absolute inset-0 bg-slate-300 opacity-40 rounded-3xl"></div>
        <div className="relative z-10">
            <p className={`${SpaceGrotesk.className} text-white text-2xl font-bold`}>{props.question}</p>
        </div>
    </div>
    )
}