import { JetBrains_Mono } from "next/font/google";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import Image from "next/image";

const JetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ["400", "700"] });

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
                <div className="flex gap-6 w-fit mx-auto py-4">
                    {props.options.map((option, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "relative rounded-lg overflow-hidden cursor-pointer transition-all duration-700 w-90 h-90 shrink-0 bg-cover bg-center",
                                props.selectedOption === option ? "scale-125" : "scale-100"
                            )}
                            onClick={() => handleOptionChange(option)}
                        >
                            <Image
                                src={'/choice-frame.png'}
                                alt="answer frame"
                                width={100}
                                height={100}
                                className="absolute object-cover w-full"
                            />
                            
                            <div className="relative z-10 w-full h-full flex justify-center items-center text-center">
                                <RadioGroupItem id={`option-${index}`} value={option} className="sr-only" />
                                
                                <Label
                                    htmlFor={`option-${index}`}
                                    className={clsx(
                                        JetBrains.className,
                                        "text-white text-lg font-bold leading-relaxed px-12"
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