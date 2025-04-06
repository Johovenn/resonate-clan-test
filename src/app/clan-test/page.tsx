"use client"

import CustomButton from "@/components/CustomButton"
import MultipleChoice from "@/components/MultipleChoice"
import ProgressBar from "@/components/ProgressBar"
import QuestionBox from "@/components/QuestionBox"
import { useLanguage } from "@/context/languageContext"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ClanTestPage(){
    const [counter, setCounter] = useState(0)
    const [answers, setAnswers] = useState<string[]>(Array(20).fill(""))

    const {language} = useLanguage()

    const questions = [
        {
            indonesian_question: "Saat menghadapi masalah besar, pendekatan apa yang paling sering Anda pilih?",
            english_question: "When facing a major problem, which approach do you most often choose?",
            indonesian_answers: [
                "Menggunakan logika dan analisis untuk memecahkan masalah secara mendalam dan terstruktur.",
                "Berkolaborasi dengan orang lain untuk mencari solusi yang bisa mempersatukan berbagai perspektif.",
                "Menghadapi tantangan secara langsung dengan kekuatan fisik atau keberanian untuk menyelesaikannya.",
                "Menganalisis situasi dengan cermat dan mencari cara untuk memanfaatkan setiap detail kecil yang mungkin terlewatkan.",
            ],
            english_answers: [
                "Using logic and analysis to solve the problem thoroughly and systematically.",
                "Collaborating with others to find a solution that unites different perspectives.",
                "Facing the challenge head-on with physical strength or courage to overcome it.",
                "Carefully analyzing the situation and finding ways to leverage every small overlooked detail.",
            ],
        },
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
        },
        {
            indonesian_question: "Jika Anda diminta untuk memimpin sebuah tim dalam suatu proyek besar, apa yang akan Anda lakukan terlebih dahulu?",
            english_question: "If you were asked to lead a team in a major project, what would you do first?",
            indonesian_answers: [
                "Mengumpulkan informasi dan merancang rencana yang sangat rinci untuk memastikan proyek berjalan lancar.",
                "Memastikan semua anggota tim merasa dihargai dan membangun hubungan kuat di antara mereka.",
                "Memberikan instruksi jelas dan memastikan tim siap secara fisik dan mental untuk menghadapi tugas.",
                "Mengamati kondisi dan mencari tahu potensi masalah atau kekuatan yang tersembunyi dalam tim.",
            ],
            english_answers: [
                "Gather information and design a very detailed plan to ensure the project runs smoothly.",
                "Ensure all team members feel valued and build strong relationships among them.",
                "Give clear instructions and ensure the team is physically and mentally ready for the task.",
                "Observe the conditions and identify potential hidden problems or strengths within the team.",
            ],
        },
        {
            indonesian_question: "Bagaimana Anda mendekati pembelajaran atau pemecahan masalah baru?",
            english_question: "How do you approach learning or solving a new problem?",
            indonesian_answers: [
                "Dengan menggali informasi lebih dalam, menganalisis data dan fakta yang ada.",
                "Dengan berdiskusi dan berkolaborasi dengan orang lain untuk melihat berbagai sudut pandang.",
                "Dengan menghadapi tantangan tersebut secara langsung dan belajar dari pengalaman praktis.",
                "Dengan memantau dan mengamati setiap detail, memetakan potensi masalah, dan mencari cara untuk memanfaatkan kelebihan yang ada.",
            ],
            english_answers: [
                "By diving deeper into information, analyzing available data and facts.",
                "By discussing and collaborating with others to view different perspectives.",
                "By facing the challenge directly and learning through practical experience.",
                "By monitoring and observing every detail, mapping potential issues, and finding ways to utilize existing strengths.",
            ],
        },
        {
            indonesian_question: "Saat Anda berhadapan dengan situasi penuh tekanan, bagaimana Anda merespons?",
            english_question: "When you face a high-pressure situation, how do you respond?",
            indonesian_answers: [
                "Menggunakan strategi dan perencanaan untuk memastikan saya tetap fokus dan mengatasi setiap masalah satu per satu.",
                "Mencari cara untuk menjaga hubungan baik dan membuat tim merasa tenang serta bersatu.",
                "Mengandalkan kekuatan dan ketahanan fisik untuk tetap bertahan dan menyelesaikan tugas.",
                "Menggunakan pengamatan tajam saya untuk melihat ancaman yang tidak terlihat dan mengatur langkah yang tepat.",
            ],
            english_answers: [
                "Using strategy and planning to stay focused and tackle each issue one by one.",
                "Finding ways to maintain good relationships and keep the team calm and united.",
                "Relying on strength and physical endurance to push through and complete the task.",
                "Using sharp observation to spot hidden threats and plan the right course of action.",
            ],
        },
        {
            indonesian_question: "Apa yang paling Anda nikmati dalam pekerjaan atau aktivitas sehari-hari Anda?",
            english_question: "What do you enjoy most in your work or daily activities?",
            indonesian_answers: [
                "Menghadapi tantangan intelektual dan memecahkan masalah yang membutuhkan pengetahuan mendalam.",
                "Membangun hubungan yang berarti dan menciptakan rasa kebersamaan dengan orang lain.",
                "Menghadapi tantangan fisik dan menggunakan kekuatan tubuh untuk mencapai tujuan.",
                "Mengamati dan merencanakan dengan ketelitian, mencari tahu apa yang tersembunyi atau yang bisa diperbaiki.",
            ],
            english_answers: [
                "Facing intellectual challenges and solving problems that require deep knowledge.",
                "Building meaningful relationships and creating a sense of togetherness with others.",
                "Facing physical challenges and using body strength to achieve goals.",
                "Observing and planning carefully, identifying what's hidden or can be improved.",
            ],
        },
        {
            indonesian_question: "Apa yang menurut Anda penting dalam sebuah kemenangan?",
            english_question: "What do you consider important in a victory?",
            indonesian_answers: [
                "Kemenangan yang diperoleh melalui kecerdasan dan perencanaan yang matang.",
                "Kemenangan yang diperoleh dengan menjaga solidaritas dan rasa kebersamaan dalam tim.",
                "Kemenangan yang diperoleh melalui kekuatan fisik dan keteguhan hati dalam bertarung.",
                "Kemenangan yang diperoleh melalui ketajaman indra dan kemampuan untuk melihat peluang yang tersembunyi.",
            ],
            english_answers: [
                "Victory gained through intelligence and well-thought-out planning.",
                "Victory achieved by maintaining solidarity and a sense of togetherness in the team.",
                "Victory achieved through physical strength and mental resilience in battle.",
                "Victory earned through sharp senses and the ability to spot hidden opportunities.",
            ],
        },
        {
            indonesian_question: "Ketika menghadapi ketidakpastian, bagaimana Anda menghadapinya?",
            english_question: "When facing uncertainty, how do you deal with it?",
            indonesian_answers: [
                "Mengumpulkan data dan informasi sebanyak mungkin untuk merencanakan langkah berikutnya.",
                "Berbicara dengan orang lain untuk menjaga semangat dan memastikan semua orang tetap merasa terhubung.",
                "Menghadapi ketidakpastian dengan keyakinan dan keberanian untuk bertindak meski belum pasti.",
                "Menganalisis situasi dengan seksama dan menunggu momen yang tepat untuk bertindak.",
            ],
            english_answers: [
                "Gather as much data and information as possible to plan the next steps.",
                "Talk to others to stay motivated and ensure everyone feels connected.",
                "Face uncertainty with confidence and courage to act despite not knowing the outcome.",
                "Analyze the situation carefully and wait for the right moment to act.",
            ],
        },
        {
            indonesian_question: "Bagaimana Anda menghadapi tantangan besar yang tiba-tiba muncul?",
            english_question: "How do you handle a sudden major challenge?",
            indonesian_answers: [
                "Saya mulai merencanakan langkah-langkah yang logis dan terperinci untuk mengatasi masalah tersebut.",
                "Saya berusaha mencari dukungan dari orang lain dan bekerja sama untuk menyelesaikannya.",
                "Saya langsung bertindak dan mencari solusi dengan kekuatan fisik atau ketegasan.",
                "Saya mengamati situasi dengan cermat, mencari peluang atau celah yang mungkin ada untuk mengatasi masalah.",
            ],
            english_answers: [
                "I start planning logical and detailed steps to solve the problem.",
                "I try to get support from others and work together to solve it.",
                "I act immediately and find solutions using physical strength or firmness.",
                "I observe the situation carefully and look for opportunities or gaps to overcome the issue.",
            ],
        },
        {
            indonesian_question: "Saat berada di sebuah kelompok, apa peran yang biasanya Anda ambil?",
            english_question: "When you're in a group, what role do you usually take?",
            indonesian_answers: [
                "Saya sering menjadi orang yang merencanakan dan memberi arahan berdasarkan analisis saya.",
                "Saya berusaha untuk menjaga keharmonisan dan memastikan semua orang merasa nyaman dan dihargai.",
                "Saya cenderung menjadi orang yang langsung bertindak dan memastikan tugas terlaksana dengan baik.",
                "Saya lebih suka mengamati dan mencari celah strategis untuk memperbaiki atau meningkatkan keadaan.",
            ],
            english_answers: [
                "I'm usually the one who plans and gives direction based on my analysis.",
                "I try to maintain harmony and make sure everyone feels comfortable and appreciated.",
                "I'm the type to take direct action and ensure the task gets done well.",
                "I prefer to observe and look for strategic gaps to improve or enhance the situation.",
            ],
        },
        {
            indonesian_question: "Apa yang membuat Anda merasa paling puas setelah menyelesaikan sebuah proyek?",
            english_question: "What makes you feel most satisfied after completing a project?",
            indonesian_answers: [
                "Melihat bagaimana rencana saya berjalan sesuai analisis dan perhitungan.",
                "Melihat tim saya bekerja bersama dengan harmonis dan saling mendukung.",
                "Mengetahui bahwa saya menghadapi tantangan besar dan berhasil melewatinya.",
                "Menemukan bahwa solusi saya mengandalkan kecermatan dalam memperhatikan hal-hal kecil.",
            ],
            english_answers: [
                "Seeing how my plan worked out based on my analysis and calculations.",
                "Seeing my team work together harmoniously and support each other.",
                "Knowing I faced a big challenge and overcame it.",
                "Discovering that my solution relied on attentiveness to small details.",
            ]
        },
        {
            indonesian_question: "Bagaimana Anda menggambarkan gaya komunikasi Anda?",
            english_question: "How would you describe your communication style?",
            indonesian_answers: [
                "Langsung, terstruktur, dan berdasarkan logika.",
                "Hangat, penuh empati, dan membangun koneksi.",
                "Tegas, bersemangat, dan memotivasi.",
                "Tenang, observatif, dan berdasarkan fakta yang diamati.",
            ],
            english_answers: [
                "Direct, structured, and logical.",
                "Warm, empathetic, and connection-oriented.",
                "Assertive, energetic, and motivating.",
                "Calm, observant, and based on observed facts.",
            ]
        },
        {
            indonesian_question: "Apa hal pertama yang Anda lakukan ketika memasuki lingkungan baru?",
            english_question: "What's the first thing you do when entering a new environment?",
            indonesian_answers: [
                "Mempelajari sistem dan aturan yang berlaku.",
                "Membangun hubungan dan memahami orang-orang di sekitar.",
                "Menguji batasan dan mencoba menantang diri.",
                "Mengamati dengan teliti sebelum bertindak.",
            ],
            english_answers: [
                "Study the systems and rules in place.",
                "Build relationships and understand the people around.",
                "Test limits and try to challenge myself.",
                "Observe carefully before taking action.",
            ]
        },
        {
            indonesian_question: "Apa peran yang biasanya Anda ambil dalam tim?",
            english_question: "What role do you usually take in a team?",
            indonesian_answers: [
                "Perencana dan pemikir strategis.",
                "Penyemangat dan penjaga keharmonisan tim.",
                "Pemimpin yang menggerakkan dan memotivasi.",
                "Pengamat yang memberi masukan tepat waktu.",
            ],
            english_answers: [
                "Planner and strategic thinker.",
                "Encourager and team harmonizer.",
                "Leader who drives and motivates.",
                "Observer who provides timely input.",
            ]
        },
        {
            indonesian_question: "Hal apa yang paling memotivasi Anda untuk terus maju?",
            english_question: "What motivates you most to keep moving forward?",
            indonesian_answers: [
                "Keinginan untuk memahami dan memecahkan sesuatu yang kompleks.",
                "Kebutuhan untuk mendukung dan merasa terhubung dengan orang lain.",
                "Dorongan untuk menang, mengatasi tantangan, dan membuktikan diri.",
                "Keingintahuan terhadap hal-hal yang tersembunyi dan tidak terduga.",
            ],
            english_answers: [
                "Desire to understand and solve something complex.",
                "Need to support and feel connected to others.",
                "Drive to win, overcome challenges, and prove myself.",
                "Curiosity about hidden and unexpected things.",
            ]
        },
        {
            indonesian_question: "Apa yang Anda lakukan ketika seseorang di sekitar Anda merasa kesulitan?",
            english_question: "What do you do when someone around you is struggling?",
            indonesian_answers: [
                "Memberi saran logis dan membantu mereka menyusun rencana.",
                "Mendengarkan dengan penuh empati dan memberikan dukungan emosional.",
                "Menyemangati mereka dan membantu secara aktif menyelesaikan masalah.",
                "Mengamati situasi dan memberi bantuan yang tepat saat dibutuhkan.",
            ],
            english_answers: [
                "Offer logical advice and help them create a plan.",
                "Listen empathetically and provide emotional support.",
                "Encourage them and actively help solve the problem.",
                "Observe the situation and offer the right help when needed.",
            ]
        },
        {
            indonesian_question: "Bagaimana Anda biasanya menghadapi kegagalan?",
            english_question: "How do you usually deal with failure?",
            indonesian_answers: [
                "Menganalisis kesalahan dan belajar darinya.",
                "Mencari dukungan emosional dan berbagi perasaan.",
                "Bangkit kembali dengan semangat dan mencoba lagi lebih kuat.",
                "Merenung diam-diam dan menyusun strategi baru.",
            ],
            english_answers: [
                "Analyze the mistakes and learn from them.",
                "Seek emotional support and share feelings.",
                "Bounce back with enthusiasm and try harder.",
                "Quietly reflect and form a new strategy.",
            ]
        },
        {
            indonesian_question: "Hal apa yang membuat Anda merasa paling nyaman saat bekerja?",
            english_question: "What makes you feel most comfortable at work?",
            indonesian_answers: [
                "Adanya struktur, sistem, dan kejelasan peran.",
                "Lingkungan yang mendukung dan penuh kolaborasi.",
                "Tantangan yang membuat saya terus berkembang.",
                "Kebebasan untuk mengamati dan bekerja mandiri.",
            ],
            english_answers: [
                "Having structure, systems, and role clarity.",
                "A supportive and collaborative environment.",
                "Challenges that push me to grow.",
                "Freedom to observe and work independently.",
            ]
        },
        {
            indonesian_question: "Apa pendekatan Anda terhadap perubahan besar dalam hidup?",
            english_question: "What is your approach to major life changes?",
            indonesian_answers: [
                "Merencanakannya secara matang dan menganalisis semua risiko.",
                "Berbicara dengan orang terdekat dan mencari dukungan emosional.",
                "Menghadapinya dengan keberanian dan semangat petualangan.",
                "Menyesuaikan diri secara perlahan sambil mengamati kondisi sekitar.",
            ],
            english_answers: [
                "Plan it thoroughly and analyze all risks.",
                "Talk to close people and seek emotional support.",
                "Face it with courage and a sense of adventure.",
                "Adapt slowly while observing the surroundings.",
            ]
        },
        {
            indonesian_question: "Apa yang biasanya Anda lakukan setelah mencapai suatu keberhasilan?",
            english_question: "What do you usually do after achieving a success?",
            indonesian_answers: [
                "Mengevaluasi proses dan mencari cara untuk lebih baik lagi.",
                "Berbagi kebahagiaan bersama orang-orang terdekat.",
                "Merayakan kemenangan dan bersiap untuk tantangan berikutnya.",
                "Merefleksikan perjalanan dan memikirkan pelajaran yang didapat.",
            ],
            english_answers: [
                "Evaluate the process and find ways to improve.",
                "Share the happiness with close people.",
                "Celebrate the victory and prepare for the next challenge.",
                "Reflect on the journey and think about the lessons learned.",
            ]
        }
    ];
      
    const handleAnswerChange = (selectedOption: string) => {
        const newAnswers = [...answers]
        newAnswers[counter] = selectedOption
        setAnswers(newAnswers)
    }
    
    return(
        <div
            className="h-screen w-screen flex flex-col items-center bg-cover bg-center px-4 py-8"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <div className="relative w-[900px] mb-12">
                <ProgressBar 
                    currentProgress={counter + 1}
                    total={20}
                />
            </div>

            <QuestionBox question={language === 'en' ? questions[counter].english_question : questions[counter].indonesian_question} />

            <div className="flex flex-col items-center mt-12">
                <MultipleChoice 
                    options={language === 'en' ? questions[counter].english_answers : questions[counter].indonesian_answers}
                    onChange={handleAnswerChange}
                    selectedOption={answers[counter]}
                />
            </div>
            
            <div className="space-x-5">
                <CustomButton onClick={() => setCounter(counter - 1)} disabled={counter === 0}><ArrowLeft/></CustomButton>
                <CustomButton onClick={() => setCounter(counter + 1)} disabled={counter === 19}><ArrowRight/></CustomButton>
            </div>
        </div>
    )
}