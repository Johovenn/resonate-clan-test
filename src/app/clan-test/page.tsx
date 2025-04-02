"use client"

import CustomButton from "@/components/CustomButton"
import MultipleChoice from "@/components/MultipleChoice"
import ProgressBar from "@/components/ProgressBar"
import QuestionBox from "@/components/QuestionBox"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ClanTestPage(){
    const [counter, setCounter] = useState(0)
    const [answers, setAnswers] = useState<string[]>(Array(20).fill(""))

    const questions = [
        {
            question: "Saat menghadapi masalah besar, pendekatan apa yang paling sering Anda pilih?",
            answers: [
                "Menggunakan logika dan analisis untuk memecahkan masalah secara mendalam dan terstruktur.",
                "Berkolaborasi dengan orang lain untuk mencari solusi yang bisa mempersatukan berbagai perspektif.",
                "Menghadapi tantangan secara langsung dengan kekuatan fisik atau keberanian untuk menyelesaikannya.",
                "Menganalisis situasi dengan cermat dan mencari cara untuk memanfaatkan setiap detail kecil yang mungkin terlewatkan.",
            ],
        },
        {
            question: "Apa yang paling Anda hargai dalam hubungan antar individu?",
            answers: [
                "Kecerdasan dan pemahaman yang mendalam antara satu sama lain.",
                "Ikatan emosional yang kuat dan rasa saling mendukung.",
                "Keberanian dan ketegasan dalam menghadapi tantangan bersama.",
                "Kepercayaan yang dibangun melalui pengamatan dan penilaian yang akurat.",
            ],
        },
        {
            question: "Jika Anda diminta untuk memimpin sebuah tim dalam suatu proyek besar, apa yang akan Anda lakukan terlebih dahulu?",
            answers: [
                "Mengumpulkan informasi dan merancang rencana yang sangat rinci untuk memastikan proyek berjalan lancar.",
                "Memastikan semua anggota tim merasa dihargai dan membangun hubungan kuat di antara mereka.",
                "Memberikan instruksi jelas dan memastikan tim siap secara fisik dan mental untuk menghadapi tugas.",
                "Mengamati kondisi dan mencari tahu potensi masalah atau kekuatan yang tersembunyi dalam tim.",
            ],
        },
        {
            question: "Bagaimana Anda mendekati pembelajaran atau pemecahan masalah baru?",
            answers: [
                "Dengan menggali informasi lebih dalam, menganalisis data dan fakta yang ada.",
                "Dengan berdiskusi dan berkolaborasi dengan orang lain untuk melihat berbagai sudut pandang.",
                "Dengan menghadapi tantangan tersebut secara langsung dan belajar dari pengalaman praktis.",
                "Dengan memantau dan mengamati setiap detail, memetakan potensi masalah, dan mencari cara untuk memanfaatkan kelebihan yang ada.",
            ],
        },
        {
            question: "Saat Anda berhadapan dengan situasi penuh tekanan, bagaimana Anda merespons?",
            answers: [
                "Menggunakan strategi dan perencanaan untuk memastikan saya tetap fokus dan mengatasi setiap masalah satu per satu.",
                "Mencari cara untuk menjaga hubungan baik dan membuat tim merasa tenang serta bersatu.",
                "Mengandalkan kekuatan dan ketahanan fisik untuk tetap bertahan dan menyelesaikan tugas.",
                "Menggunakan pengamatan tajam saya untuk melihat ancaman yang tidak terlihat dan mengatur langkah yang tepat.",
            ],
        },
        {
            question: "Apa yang paling Anda nikmati dalam pekerjaan atau aktivitas sehari-hari Anda?",
            answers: [
                "Menghadapi tantangan intelektual dan memecahkan masalah yang membutuhkan pengetahuan mendalam.",
                "Membangun hubungan yang berarti dan menciptakan rasa kebersamaan dengan orang lain.",
                "Menghadapi tantangan fisik dan menggunakan kekuatan tubuh untuk mencapai tujuan.",
                "Mengamati dan merencanakan dengan ketelitian, mencari tahu apa yang tersembunyi atau yang bisa diperbaiki.",
            ],
        },
        {
            question: "Apa yang menurut Anda penting dalam sebuah kemenangan?",
            answers: [
                "Kemenangan yang diperoleh melalui kecerdasan dan perencanaan yang matang.",
                "Kemenangan yang diperoleh dengan menjaga solidaritas dan rasa kebersamaan dalam tim.",
                "Kemenangan yang diperoleh melalui kekuatan fisik dan keteguhan hati dalam bertarung.",
                "Kemenangan yang diperoleh melalui ketajaman indra dan kemampuan untuk melihat peluang yang tersembunyi.",
            ],
        },
        {
            question: "Ketika menghadapi ketidakpastian, bagaimana Anda menghadapinya?",
            answers: [
                "Mengumpulkan data dan informasi sebanyak mungkin untuk merencanakan langkah berikutnya.",
                "Berbicara dengan orang lain untuk menjaga semangat dan memastikan semua orang tetap merasa terhubung.",
                "Menghadapi ketidakpastian dengan keyakinan dan keberanian untuk bertindak meski belum pasti.",
                "Menganalisis situasi dengan seksama dan menunggu momen yang tepat untuk bertindak.",
            ],
        },
        {
            question: "Bagaimana Anda menghadapi tantangan besar yang tiba-tiba muncul?",
            answers: [
                "Saya mulai merencanakan langkah-langkah yang logis dan terperinci untuk mengatasi masalah tersebut.",
                "Saya berusaha mencari dukungan dari orang lain dan bekerja sama untuk menyelesaikannya.",
                "Saya langsung bertindak dan mencari solusi dengan kekuatan fisik atau ketegasan.",
                "Saya mengamati situasi dengan cermat, mencari peluang atau celah yang mungkin ada untuk mengatasi masalah.",
            ],
        },
        {
            question: "Saat berada di sebuah kelompok, apa peran yang biasanya Anda ambil?",
            answers: [
                "Saya sering menjadi orang yang merencanakan dan memberi arahan berdasarkan analisis saya.",
                "Saya berusaha untuk menjaga keharmonisan dan memastikan semua orang merasa nyaman dan dihargai.",
                "Saya cenderung menjadi orang yang langsung bertindak dan memastikan tugas terlaksana dengan baik.",
                "Saya lebih suka mengamati dan mencari celah strategis untuk memperbaiki atau meningkatkan keadaan.",
            ],
        },
        {
            question: "Jika Anda melihat seseorang melakukan kesalahan besar, bagaimana Anda akan bertindak?",
            answers: [
                "Saya akan menganalisis kesalahan mereka dan memberikan solusi yang terperinci untuk memperbaikinya.",
                "Saya akan mendekati mereka dengan empati dan mencari cara untuk membantu mereka belajar dari kesalahan itu.",
                "Saya akan memberitahukan mereka dengan tegas tentang kesalahan tersebut dan memberikan arahan untuk memperbaikinya.",
                "Saya akan melihat lebih dalam untuk mengetahui penyebab kesalahan dan mencari cara untuk mencegahnya terjadi lagi di masa depan.",
            ],
        },
        {
            question: "Dalam hal pengambilan keputusan, apa yang paling penting bagi Anda?",
            answers: [
                "Keputusan yang berbasis logika, bukti, dan analisis yang mendalam.",
                "Keputusan yang mempertimbangkan hubungan antar individu dan dampaknya terhadap komunitas.",
                "Keputusan yang memberikan hasil cepat dan mengandalkan kekuatan untuk mencapai tujuan.",
                "Keputusan yang didasarkan pada pengamatan mendalam dan pemahaman terhadap situasi yang lebih luas.",
            ],
        },
        {
            question: "Apa yang Anda lakukan ketika menghadapi masalah yang tampaknya tidak ada solusinya?",
            answers: [
                "Saya mulai mencari solusi melalui eksperimen atau inovasi baru.",
                "Saya berbicara dengan orang lain untuk mencari cara bersama yang bisa menyelesaikan masalah.",
                "Saya akan terus berusaha secara fisik atau mental untuk menemukan cara keluar dari masalah tersebut.",
                "Saya akan menunggu waktu yang tepat dan mengamati situasi lebih lanjut untuk melihat apakah solusi akan muncul dengan sendirinya.",
            ],
        },
        {
            question: "Apa yang Anda cari dalam sebuah pemimpin?",
            answers: [
                "Pemimpin yang dapat merencanakan dan memberi arahan berdasarkan pengetahuan dan logika.",
                "Pemimpin yang mengutamakan hubungan antar individu dan menjaga semangat tim.",
                "Pemimpin yang tegas dan siap bertindak, menunjukkan kekuatan dan ketahanan dalam menghadapi krisis.",
                "Pemimpin yang cermat, dengan kemampuan untuk melihat setiap detail dan merencanakan langkah-langkah strategis.",
            ],
        },
        {
            question: "Jika Anda sedang merencanakan masa depan, faktor apa yang paling mempengaruhi keputusan Anda?",
            answers: [
                "Analisis mendalam dan data yang dapat mendukung keputusan saya.",
                "Kesejahteraan orang-orang di sekitar saya dan rasa kebersamaan dalam komunitas.",
                "Kekuatan dan kemampuan saya untuk bertahan dan menghadapi tantangan besar.",
                "Kemampuan untuk melihat peluang yang tersembunyi dan memahami gambaran besar.",
            ],
        },
        {
            question: "Saat Anda merasa tertekan, apa yang Anda lakukan untuk meredakan stres?",
            answers: [
                "Saya mencari solusi praktis atau memecahkan masalah yang sedang dihadapi.",
                "Saya mencari cara untuk berbicara dengan orang lain atau menghabiskan waktu dengan teman-teman untuk merasa lebih baik.",
                "Saya berusaha untuk tetap aktif dan mengalihkan perhatian saya pada aktivitas fisik atau tantangan baru.",
                "Saya cenderung menarik diri dan merenung untuk menganalisis situasi secara lebih mendalam.",
            ],
        },
        {
            question: "Saat melihat situasi yang penuh kekacauan, bagaimana reaksi Anda?",
            answers: [
                "Saya mencari cara untuk mengatur dan merencanakan langkah-langkah yang dapat dilakukan untuk mengatasi kekacauan tersebut.",
                "Saya berusaha menjaga hubungan baik dengan semua pihak dan memastikan semua orang merasa stabil.",
                "Saya mengambil inisiatif untuk bertindak mengendalikan situasi dengan kekuatan dan keputusan yang cepat.",
                "Saya mengamati dengan seksama, mencoba memahami perubahan yang terjadi dan mencari peluang untuk bertindak.",
            ],
        },
        {
            question: "Apakah Anda lebih suka bekerja secara individu atau dalam kelompok?",
            answers: [
                "Saya lebih suka bekerja secara individu dan merencanakan dengan rinci sesuai kemampuan saya.",
                "Saya lebih suka bekerja dalam kelompok dan menjaga hubungan antar anggota agar tetap solid.",
                "Saya lebih suka mengambil peran aktif dalam kelompok, menunjukkan kepemimpinan, dan bertindak langsung.",
                "Saya lebih suka bekerja sendiri dengan observasi dan perencanaan yang matang, meskipun masih bisa berkolaborasi jika diperlukan.",
            ],
        },
        {
            question: "Apa yang membuat Anda merasa paling dihargai dalam sebuah tim?",
            answers: [
                "Ketika saya dapat memberikan kontribusi intelektual yang signifikan dan merancang solusi yang efektif.",
                "Ketika saya dapat membangun hubungan yang kuat dan memelihara rasa kebersamaan dalam tim.",
                "Ketika saya bisa menunjukkan kemampuan fisik atau ketangguhan dalam menghadapi tantangan tim.",
                "Ketika saya dapat memberikan wawasan strategis dan membantu tim melihat gambaran besar.",
            ],
        },
        {
            question: "Bagaimana Anda menggambarkan diri Anda dalam satu kata?",
            answers: [
                "Intelek",
                "Empatik",
                "Berani",
                "Pengamat",
            ],
        },
    ]

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

            <QuestionBox question={questions[counter].question} />

            <div className="flex flex-col items-center mt-12">
                <MultipleChoice 
                    options={questions[counter].answers}
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