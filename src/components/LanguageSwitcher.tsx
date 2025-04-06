import { useLanguage } from "@/context/languageContext";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-between w-[150px] gap-2">
        <button
            onClick={() => setLanguage("id")}
            className={cn(
            "rounded-md overflow-hidden ring-2 ring-transparent transition-all",
            language === "id" && "ring-purple-500"
            )}
        >
            <Image
                src="/indo-flag.png"
                alt="Indonesian Flag"
                width={50}
                height={80}
            />
        </button>
        <button
            onClick={() => setLanguage("en")}
            className={cn(
            "rounded-md overflow-hidden ring-2 ring-transparent transition-all",
            language === "en" && "ring-purple-500"
            )}
        >
            <Image
                src="/us-flag.png"
                alt="US Flag"
                width={50}
                height={80}
            />
        </button>
    </div>
  );
}
