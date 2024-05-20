import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function RegisterDrawerDialog({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children || <Button variant="outline">ثبت نام</Button>}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>ثبت نام در مسابقه</DialogTitle>
                        <DialogDescription>
                            جهت ثبت نام در مسابقه از طریق راه‌های ارتباطی زیر اقدام کنید.
                        </DialogDescription>
                    </DialogHeader>
                    <RegisterWays />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {children || <Button variant="outline">ثبت نام</Button>}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-right">
                    <DialogTitle>ثبت نام در مسابقه</DialogTitle>
                    <DialogDescription>
                        جهت ثبت نام در مسابقه از طریق راه‌های ارتباطی زیر اقدام کنید.
                    </DialogDescription>
                </DrawerHeader>
                <RegisterWays className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">بستن</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function RegisterWays({ className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("grid items-start gap-4 py-3", className)}>
            <Link href="https://t.me/ActingDirecting" className="w-full" target="_blank">
                <Button className="w-full bg-[#24A1DE] hover:bg-[#1e92ca] py-6">ارسال پیام به تلگرام <span dir="ltr" className="pr-1">@ActingDirecting</span></Button>
            </Link>
            <Link href="mailto:atchallange@gmail.com" className="w-full" target="_blank">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6">ارسال ایمیل به آدرس ATchallange@gmail.com</Button>
            </Link>
        </div>
    )
}
