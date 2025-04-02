import { Space_Grotesk } from "next/font/google"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ["400", "700"] })

interface MultipleChoiceProps {
  options: string[]
  onChange?: (selectedOption: string) => void
  selectedOption?: string
}

export default function MultipleChoice(props: MultipleChoiceProps) {
  const handleOptionChange = (option: string) => {
    if (props.onChange) {
      props.onChange(option)
    }
  }

  return (
        <div className="w-full max-w-[750px] mb-6">
            <RadioGroup 
                onValueChange={handleOptionChange} 
                value={props.selectedOption || ""}
            >
                <div className="grid grid-cols-2 gap-4">
                    {props.options.map((option, index) => (
                        <div 
                            key={index} 
                            className="relative rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => handleOptionChange(option)}
                        >
                        <div className={`absolute inset-0 ${
                            props.selectedOption === option ? 'bg-purple-500' : 'bg-slate-300 opacity-40'
                        }`}></div>
                        
                        <div className="relative min-w-[370px] min-h-[200px] z-10 px-6 py-4 flex items-center space-x-3">
                            <RadioGroupItem id={`option-${index}`} value={option} className="z-20 sr-only" />
                            <Label 
                                htmlFor={`option-${index}`} 
                                className={`${SpaceGrotesk.className} text-white text-lg text-center cursor-pointer font-medium`}
                            >
                                {option}
                            </Label>
                        </div>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}