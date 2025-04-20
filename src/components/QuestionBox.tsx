import { JetBrains_Mono } from "next/font/google";
const JetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["400", "700", "800"] });

interface QuestionBoxProps {
  question: string;
}

export default function QuestionBox(props: QuestionBoxProps) {
    return (
        <div 
            className="relative w-[80%] py-8 md:py-12 flex items-center justify-center text-center overflow-hidden mt-2 bg-gradient-to-b from-[#34036c] to-[#4535cd] border-white border-4"
        >
            <div className="relative z-10 px-7">
                <p className={`${JetBrains.className} text-white text-sm md:text-md lg:text-lg xl:text-3xl font-bold text-shadow-amber-200 text-shadow px-5`}>
                    {props.question.toUpperCase()}
                </p>
            </div>
        </div>
    );
}