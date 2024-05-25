import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cttd, persianDateFormatOptions } from "@/lib/utils";
import { Check, DownloadCloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AnswerCard(leagueAnswer: LeagueAnswer) {
    const [loading, setLoading] = useState(false)

    // async function makeFinal() {
    //     setLoading(true)
    //     try {
            
    //         const res = await fetch(`https://atc.irotagh.com/api/auth/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         if (res.ok) {
    //             const data = await res.json()
    //             if (data.success) {
    //                 alert('پاسخ با موفقیت به عنوان پاسخ نهایی انتخاب شد')
    //             } else {
    //                 alert('خطا در انتخاب پاسخ نهایی')
    //             }
    //         } else {
    //             alert('خطا در انتخاب پاسخ نهایی')
    //         }
    //     } catch (error) {
    //         alert('خطا در انتخاب پاسخ نهایی')
    //     }
    //     setLoading(false)
    // }

    return (<div
        className="group relative flex flex-col items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:border-gray-300 transition-all gap-3"
    >
        <div className='w-full flex items-center justify-between'>
            <p className="text-base font-bold text-gray-900 uppercase font-mono">{leagueAnswer.code.name}</p>

            <div className='flex items-center justify-end gap-5'>
                <p className="text-xs text-gray-900 uppercase">{new Date(cttd(leagueAnswer.created_at)).toLocaleDateString('fa-IR', persianDateFormatOptions)}</p>

                {/* <TooltipProvider>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <button
                                className="cursor-pointer block"
                            >
                                <Check className={`w-6 h-6 text-gray-400 group-hover:text-teal-500 transition-all cursor-pointer ${(leagueAnswer.final == true ? 'text-green-500' : 'text-gray-400')}`} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>انتخاب به عنوان پاسخ نهایی</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}

                <Link href={leagueAnswer.code.original_url} download target='_blank'>
                    <DownloadCloud className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all cursor-pointer" />
                </Link>
            </div>
        </div>

        <div className="w-full grid grid-cols-3 rounded-lg gap-5">
            <div className='w-full col-span-3 md:col-span-1 flex items-center justify-between bg-gray-100 rounded-lg p-3'>
                <p className='font-semibold text-sm'>بازده</p>
                <p className='font-normal text-sm font-mono' dir='ltr'>{leagueAnswer.return}</p>
            </div>
            <div className='w-full col-span-3 md:col-span-1 flex items-center justify-between bg-gray-100 rounded-lg p-3'>
                <p className='font-semibold text-sm'>نسبت شارپ</p>
                <p className='font-normal text-sm font-mono' dir='ltr'>{leagueAnswer.sharpe_ratio}</p>
            </div>
            <div className='w-full col-span-3 md:col-span-1 flex items-center justify-between bg-gray-100 rounded-lg p-3'>
                <p className='font-semibold text-sm'>بیشینه کاهش</p>
                <p className='font-normal text-sm font-mono' dir='ltr'>{leagueAnswer.max_drawdown}</p>
            </div>
        </div>

    </div>)
}