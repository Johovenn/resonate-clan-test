import { PT_Sans } from "next/font/google";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import Image from "next/image";

const JetBrains = PT_Sans({ subsets: ['latin'], weight: ["400", "700"] });

interface MultipleChoiceProps {
    options: string[];
    onChange?: (selectedOption: string) => void;
    selectedOption?: string;
}

export default function MultipleChoice(props: MultipleChoiceProps) {
    const handleOptionChange = (option: string) => {
        if (props.onChange) {
            props.onChange(option);
        }
    };

    return (
        <div className="w-full mb-6 overflow-visible">
            <RadioGroup onValueChange={handleOptionChange} value={props.selectedOption || ""}>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row gap-1 sm:gap-4 md:gap-5 lg:gap-6 w-fit mx-auto">
                    {props.options.map((option, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "relative rounded-lg overflow-hidden cursor-pointer transition-all duration-700 \
                                aspect-square w-50 sm:w-60 md:w-70 lg:w-80 shrink-0 bg-cover bg-center",
                                props.selectedOption === option ? "scale-110 lg:scale-125" : "scale-95 md:scale-100"
                            )}
                            onClick={() => handleOptionChange(option)}
                        >
                            <Image
                                src={'/choice-frame.png'}
                                alt="answer frame"
                                width={100}
                                height={100}
                                className="absolute object-cover w-full h-full"
                            />
                            
                            <div className="relative z-10 w-full h-full flex justify-center items-center text-center ">
                                <RadioGroupItem id={`option-${index}`} value={option} className="sr-only" />
                                
                                <Label
                                    htmlFor={`option-${index}`}
                                    className={clsx(
                                        JetBrains.className,
                                        "text-white font-bold leading-tight tracking-widest px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 lg:py-5 text-xs sm:text-sm md:text-md"
                                    )}
                                >
                                    {option}
                                </Label>
                            </div>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
}