"use client"

import MultipleChoice from "@/components/MultipleChoice"
import ProgressBar from "@/components/ProgressBar"
import QuestionBox from "@/components/QuestionBox"
import { Button } from "@/components/ui/button"
import { useClanResult } from "@/context/clanResultContext"
import { useLanguage } from "@/context/languageContext"
import { Check, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const clans = {
    Neuro: 'Neuro',    // For index 0 answers
    Philos: 'Philos',  // For index 1 answers 
    Forte: 'Forte', // For index 2 answers
    Oculus: 'Oculus',  // For index 3 answers
}

export default function ClanTestPage(){
    const router = useRouter()
    const [counter, setCounter] = useState(0)
    const [answers, setAnswers] = useState<string[]>(Array(20).fill(""))
    const [isClient, setIsClient] = useState(false)
    const [clanScores, setClanScores] = useState({
        [clans.Neuro]: 0,
        [clans.Philos]: 0,
        [clans.Forte]: 0,
        [clans.Oculus]: 0
    })
    const [isAllAnswered, setIsAllAnswered] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const {language} = useLanguage()
    const {setClanResult} = useClanResult()

    const questions = [
        {
            indonesian_question: "Apa yang paling Anda hargai dalam hubungan antar individu?",
            english_question: "What do you value most in interpersonal relationships?",
            indonesian_answers: [
                "Kecerdasan dan pemahaman yang mendalam antara satu sama lain.",
                "Ikatan emosional yang kuat dan rasa saling mendukung.",
                "Keberanian dan ketegasan dalam menghadapi tantangan bersama.",
                "Kepercayaan yang dibangun melalui pengamatan dan penilaian yang akurat.",
            ],
            english_answers: [
                "Intelligence and deep mutual understanding.",
                "A strong emotional bond and mutual support.",
                "Courage and decisiveness in facing challenges together.",
                "Trust built through observation and accurate judgment.",
            ],
            clan_mapping: [
                clans.Neuro, 
                clans.Philos, 
                clans.Forte, 
                clans.Oculus,
            ]
        },
        {
            indonesian_question: "Jika Anda diminta untuk memimpin sebuah tim dalam suatu proyek besar, apa yang akan Anda lakukan terlebih dahulu?",
            english_question: "If you were asked to lead a team in a major project, what would you do first?",
            indonesian_answers: [
                "Memastikan semua anggota tim merasa dihargai dan membangun hubungan kuat di antara mereka.",
                "Mengumpulkan informasi dan merancang rencana yang sangat rinci untuk memastikan proyek berjalan lancar.",
                "Mengamati kondisi dan mencari tahu potensi masalah atau kekuatan yang tersembunyi dalam tim.",
                "Memberikan instruksi jelas dan memastikan tim siap secara fisik dan mental untuk menghadapi tugas.",
            ],
            english_answers: [
                "Ensure all team members feel valued and build strong relationships among them.",
                "Gather information and design a very detailed plan to ensure the project runs smoothly.",
                "Observe the conditions and identify potential hidden problems or strengths within the team.",
                "Give clear instructions and ensure the team is physically and mentally ready for the task.",
            ],
            clan_mapping: [
                clans.Philos, 
                clans.Neuro, 
                clans.Oculus,
                clans.Forte, 
            ]
        },
        {
            indonesian_question: "Bagaimana Anda mendekati pembelajaran atau pemecahan masalah baru?",
            english_question: "How do you approach learning or solving a new problem?",
            indonesian_answers: [
                "Dengan menghadapi tantangan tersebut secara langsung dan belajar dari pengalaman praktis.",
                "Dengan berdiskusi dan berkolaborasi dengan orang lain untuk melihat berbagai sudut pandang.",
                "Dengan memantau dan mengamati setiap detail, memetakan potensi masalah, dan mencari cara untuk memanfaatkan kelebihan yang ada.",
                "Dengan menggali informasi lebih dalam, menganalisis data dan fakta yang ada.",
            ],
            english_answers: [
                "By facing the challenge directly and learning through practical experience.",
                "By discussing and collaborating with others to view different perspectives.",
                "By monitoring and observing every detail, mapping potential issues, and finding ways to utilize existing strengths.",
                "By diving deeper into information, analyzing available data and facts.",
            ],
            clan_mapping: [
                clans.Forte, 
                clans.Philos, 
                clans.Oculus,
                clans.Neuro, 
            ]
        },
        {
            indonesian_question: "Ketika menghadapi ketidakpastian, bagaimana Anda menghadapinya?",
            english_question: "When facing uncertainty, how do you deal with it?",
            indonesian_answers: [
                "Berbicara dengan orang lain untuk menjaga semangat dan memastikan semua orang tetap merasa terhubung.",
                "Menghadapi ketidakpastian dengan keyakinan dan keberanian untuk bertindak meski belum pasti.",
                "Mengumpulkan data dan informasi sebanyak mungkin untuk merencanakan langkah berikutnya.",
                "Menganalisis situasi dengan seksama dan menunggu momen yang tepat untuk bertindak.",
            ],
            english_answers: [
                "Talk to others to stay motivated and ensure everyone feels connected.",
                "Face uncertainty with confidence and courage to act despite not knowing the outcome.",
                "Gather as much data and information as possible to plan the next steps.",
                "Analyze the situation carefully and wait for the right moment to act.",
            ],
            clan_mapping: [
                clans.Philos, 
                clans.Forte, 
                clans.Neuro, 
                clans.Oculus,
            ]
        },
        {
            indonesian_question: "Dalam hal pengambilan keputusan, apa yang paling penting bagi-mu?",
            english_question: "What matters the most to you when making a decision?",
            indonesian_answers: [
                "Keputusan yang didasarkan pada pengamatan mendalam dan pemahaman terhadap situasi yang lebih luas.",
                "Keputusan yang mempertimbangkan hubungan antar individu dan dampaknya terhadap komunitas.",
                "Keputusan yang berbasis logika, bukti, dan analisis yang mendalam.",
                "Keputusan yang memberikan hasil cepat dan mengandalkan kekuatan untuk mencapai tujuan.",
            ],
            english_answers: [
                "Decisions based on deep observation and understanding of the broader situation.",
                "Decisions that consider interpersonal relationships and their impact on the community.",
                "Decisions based on logic, evidence, and in-depth analysis.",
                "Decisions that deliver quick results and rely on strength to achieve goals.",
            ],
            clan_mapping: [
                clans.Oculus,
                clans.Philos, 
                clans.Neuro, 
                clans.Forte, 
            ]
        },
        {
            indonesian_question: "Apa yang kamu cari dari seorang pemimpin?",
            english_question: "What do you look for in a leader?",
            indonesian_answers: [
                "Pemimpin yang dapat merencanakan dan memberi arahan berdasarkan pengetahuan dan logika.",
                "Pemimpin yang tegas dan siap bertindak, menunjukkan kekuatan dan ketahanan dalam menghadapi krisis.",
                "Pemimpin yang cermat, dengan kemampuan untuk melihat setiap detail dan merencanakan langkah-langkah strategis.",
                "Pemimpin yang mengutamakan hubungan antar individu dan menjaga semangat tim.",
            ],
            english_answers: [
                "A leader who can plan and provide direction based on knowledge and logic.",
                "A decisive leader who is ready to act, demonstrating strength and resilience in facing crises.",
                "A meticulous leader with the ability to see every detail and plan strategic steps.",
                "A leader who prioritizes interpersonal relationships and maintains team spirit.",
            ],
            clan_mapping: [
                clans.Neuro, 
                clans.Forte, 
                clans.Philos, 
                clans.Oculus,
            ]
        },
        {
            indonesian_question: "Jika kamu sedang merencanakan masa depan, faktor apa yang paling mempengaruhi keputusan-mu?",
            english_question: "When planning for the future, what factor influences your decisions the most?",
            indonesian_answers: [
                "Kekuatan dan kemampuan saya untuk bertahan dan menghadapi tantangan besar.",
                "Kesejahteraan orang-orang di sekitar saya dan rasa kebersamaan dalam komunitas.",
                "Kemampuan untuk melihat peluang yang tersembunyi dan memahami gambaran besar.",
                "Analisis mendalam dan data yang dapat mendukung keputusan saya.",
            ],
            english_answers: [
                "My strength and ability to endure and face major challenges.",
                "The well-being of those around me and a sense of togetherness in the community.",
                "The ability to see hidden opportunities and understand the bigger picture.",
                "In-depth analysis and data that can support my decisions.",
            ],
            clan_mapping: [
                clans.Forte, 
                clans.Philos, 
                clans.Oculus,
                clans.Neuro, 
            ]
        },
        {
            indonesian_question: "Saat melihat situasi yang penuh kekacauan, bagaimana reaksimu?",
            english_question: "When you are in a chaotic situation, how do you react?",
            indonesian_answers: [
                "Saya mencari cara untuk mengatur dan merencanakan langkah-langkah yang dapat dilakukan untuk mengatasi kekacauan tersebut.",
                "Saya mengambil inisiatif untuk bertindak mengendalikan situasi dengan kekuatan dan keputusan yang cepat.",
                "Saya berusaha menjaga hubungan baik dengan semua pihak dan memastikan semua orang merasa stabil.",
                "Saya mengamati dengan seksama, mencoba memahami perubahan yang terjadi dan mencari peluang untuk bertindak.",
            ],
            english_answers: [
                "I look for ways to organize and plan steps that can be taken to overcome the chaos.",
                "I take the initiative to act, controlling the situation with strength and quick decisions.",
                "I try to maintain good relationships with everyone and ensure that everyone feels stable.",
                "I observe carefully, trying to understand the changes happening and look for opportunities to act.",
            ],
            clan_mapping: [
                clans.Neuro, 
                clans.Forte, 
                clans.Philos, 
                clans.Oculus,
            ],
        },
        {
            indonesian_question: " Apakah kamu lebih suka bekerja secara individu atau dalam kelompok?",
            english_question: "Do you prefer to work individually or in a group",
            indonesian_answers: [
                "Saya lebih suka bekerja dalam kelompok dan menjaga hubungan antar anggota agar tetap solid.",
                "Saya lebih suka bekerja sendiri dengan observasi dan perencanaan yang matang, meskipun masih bisa berkolaborasi jika diperlukan.",
                "Saya lebih suka mengambil peran aktif dalam kelompok, menunjukkan kepemimpinan, dan bertindak langsung.",
                "Saya lebih suka bekerja secara individu dan merencanakan dengan rinci sesuai kemampuan saya.",
            ],
            english_answers: [
                "I prefer to work in a group and maintain strong relationships among team members.",
                "I prefer to work alone with thorough observation and planning, although I can still collaborate if needed.",
                "I prefer to take an active role in the group, showing leadership and taking direct action.",
                "I prefer to work individually and plan in detail according to my abilities.",
            ],
            clan_mapping: [
                clans.Philos, 
                clans.Oculus,
                clans.Forte, 
                clans.Neuro, 
            ]
        },
        {
            indonesian_question: "Bagaimana kamu menggambarkan dirimu dalam satu kata?",
            english_question: "What do you do when someone around you is struggling?",
            indonesian_answers: [
                "Pengamat, Saya cermat dalam melihat setiap detail dan merencanakan strategi.",
                "Empatik, Saya peduli dengan hubungan emosional dan saling mendukung.",
                "Tangguh, Saya kuat dan berani menghadapi tantangan.",
                "Intelek, Saya lebih fokus pada pemikiran mendalam dan analisis",
            ],
            english_answers: [
                "Observant, I am meticulous in noticing every detail and planning strategies.",
                "Empathetic, I care about emotional connections and mutual support.",
                "Resilient, I am strong and courageous in facing challenges.",
                "Intellectual, I focus more on deep thinking and analysis.",
            ],
            clan_mapping: [
                clans.Oculus,
                clans.Philos, 
                clans.Forte, 
                clans.Neuro, 
            ]
        },
    ]

    const handleAnswerChange = (selectedOption: string) => {
        const currentAnswersArray = language === 'en' 
            ? questions[counter].english_answers 
            : questions[counter].indonesian_answers
        
        const selectedIndex = currentAnswersArray.indexOf(selectedOption)
        
        // Get previous answer and remove points if needed
        const previousAnswer = answers[counter]
        if (previousAnswer) {
            const previousAnswersArray = language === 'en' 
                ? questions[counter].english_answers 
                : questions[counter].indonesian_answers
            
            const previousIndex = previousAnswersArray.indexOf(previousAnswer)
            
            if (previousIndex !== -1) {
                const previousClanType = questions[counter].clan_mapping[previousIndex]
                
                setClanScores(prevScores => ({
                    ...prevScores,
                    [previousClanType]: prevScores[previousClanType] - 1
                }))
            }
        }
        
        if (selectedIndex !== -1) {
            const clanType = questions[counter].clan_mapping[selectedIndex]
            
            setClanScores(prevScores => ({
                ...prevScores,
                [clanType]: prevScores[clanType] + 1
            }))
        }
        
        const newAnswers = [...answers]
        newAnswers[counter] = selectedOption
        setAnswers(newAnswers)
    }

    useEffect(() => {
        const allAnswered = answers.slice(0, questions.length).every(answer => answer !== "")
        
        if (allAnswered) {
            setIsAllAnswered(true)
        } else {
            setIsAllAnswered(false)
        }
    }, [answers, questions.length])

    const determineTopClan = () => {
        let topClan = clans.Neuro
        let topScore = clanScores[clans.Neuro]
        
        for (const clan in clanScores) {
            if (clanScores[clan] > topScore) {
                topScore = clanScores[clan]
                topClan = clan
            }
        }
        
        // Save to localStorage
        localStorage.setItem('userClanResult', topClan.toLowerCase())
        
        router.push(`/results/${topClan.toLowerCase()}`)
        return setClanResult(topClan)
    }

    if (!isClient) return null
    
    return(
        <div
            className="h-screen w-screen flex flex-col items-center bg-cover bg-center px-2 pt-4 md:px-3 lg:px-6 xl:px-4 xl:py-8"
            style={{ backgroundImage: "url('/background-dark.png')" }}
        >
            <QuestionBox question={language === 'en' ? questions[counter].english_question : questions[counter].indonesian_question} />

            <div className="flex flex-col items-center md:mt-6 lg:mt-8">
                <MultipleChoice 
                    options={language === 'en' ? questions[counter].english_answers : questions[counter].indonesian_answers}
                    onChange={handleAnswerChange}
                    selectedOption={answers[counter]}
                />
            </div>
            
            <div className="space-x-5 flex items-center">
                <Button 
                    onClick={() => setCounter(counter - 1)} 
                    disabled={counter === 0}
                    className="flex items-center gap-3 border-2 border-white"
                >
                    <ChevronsLeft/>
                        <p className="max-md:hidden">
                            {language === 'en' ? 'Previous Question' : 'Pertanyaan Sebelumnya'}
                        </p>
                </Button>
                <ProgressBar 
                    currentProgress={counter + 1}
                    total={questions.length}
                />
                {
                    counter !== 9
                        ?
                    <Button 
                        onClick={() => {
                            setCounter(counter + 1)
                        }} 
                        disabled={counter === questions.length - 1}
                        className="flex items-center gap-3 border-2 border-white"
                    >
                        <p className="max-md:hidden">
                            {language === 'en' ? 'Next Question' : 'Pertanyaan Selanjutnya'}
                        </p>
                        <ChevronsRight/>
                    </Button>
                        :
                    <Button
                        onClick={() => {
                            determineTopClan()
                        }} 
                        disabled={!isAllAnswered}
                        className="flex items-center gap-3 border-2 border-white"
                    >
                        <p className="max-md:hidden">
                            {language === 'en' ? 'Finish Test' : 'Selesaikan Test'}
                        </p>
                        <Check />
                    </Button>
                }
            </div>
        </div>
    )
}