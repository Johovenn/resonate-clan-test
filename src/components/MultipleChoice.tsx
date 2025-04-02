import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ["400", "700"] });

interface MultipleChoiceProps {
  options: string[];
  onChange?: (selectedOption: string) => void;
}

export default function MultipleChoice(props: MultipleChoiceProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    if (props.onChange) {
      props.onChange(option);
    }
  };

  return (
    <div className="w-full max-w-[750px] mb-6">
        <RadioGroup onValueChange={handleOptionChange} value={selectedOption || ""}>
            <div className="grid grid-cols-2 gap-4">
                {props.options.map((option, index) => (
                    <div 
                        key={index} 
                        className="relative rounded-xl overflow-hidden cursor-pointer"
                        onClick={() => handleOptionChange(option)}
                    >
                    <div className={`absolute inset-0 ${
                        selectedOption === option ? 'bg-gradient-to-tr from-purple-600 via-purple-800 to-purple-700' : 'bg-slate-300 opacity-40'
                    }`}></div>
                    
                    <div className="relative z-10 px-6 py-4 min-h-[200px] min-w-[370px] flex items-center space-x-3">
                        <RadioGroupItem id={`option-${index}`} value={option} className="z-20 sr-only"/>
                        <Label 
                            htmlFor={`option-${index}`} 
                            className={`${SpaceGrotesk.className} text-white text-lg text-center cursor-pointer`}
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