import { Press_Start_2P } from "next/font/google"
import { ReactNode } from "react"

interface CustomButtonProps {
    children: ReactNode | string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

const PressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"] });

export default function CustomButton(props: CustomButtonProps) {
    return (
        <button
            className={`
                ${PressStart2P.className} px-7 py-3 bg-gradient-to-tr from-purple-600 via-purple-800 to-purple-700
                ${!props.disabled && 'hover:from-purple-700 hover:via-purple-900 hover:to-purple-800'}
                transition-all duration-300 ease-in-out outline-2 outline-white text-white rounded-md text-sm
                ${props.className} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
                shadow-[0_0_20px_2px_rgba(128,0,128,0.7)]  shadow-purple-600
                hover:shadow-[0_0_30px_5px_rgba(128,0,128,0.7)] 
            `}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
