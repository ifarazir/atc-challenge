"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function Alert() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 50);
    }, []);

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger></DialogTrigger>
                <DialogContent>
                    <DialogHeader className="text-destructive">
                        <DialogTitle className="text-xl mb-3 font-semibold">اطلاعیه فوری</DialogTitle>
                        <DialogDescription className="text-sm leading-8">
                            <p className="mb-3">
                                با توجه با استقبال چشم‌گیر شرکت‌کنندگان در مسابقه و تقاضا برای تمدید و فرصت آشنایی بیشتر با روش‌های الگوریتمی در بازارهای مالی، تصمیم گرفته شد مسابقه به تاریخ ۱۱ تیرماه تعویق بیافتد. در این فاصله شرکت‌کنندگان می‌توانند الگوریتم‌های خود را تست کنند.
                            </p>

                            <p>
                                با توجه‌ به اینکه تعداد زیادی از تریدر‌های حرفه‌ای با بک‌تستینگ آشنایی نداشتند، دوره‌ها و کارگاه‌های آموزشی آشنایی با معاملات الگوریتمیک و بک‌تستینگ برای شرکت کنندگان توسط برترین دانشجویان دکترا و دانش‌آموختگان دانشگاه صنعتی امیرکبیر برگزار خواهد شد.
                            </p>

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}