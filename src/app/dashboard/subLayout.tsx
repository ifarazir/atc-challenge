"use client";

import { Disclosure } from "@headlessui/react";
import { BellIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function SubItem1() {
    const { data: session, status } = useSession()
    const router = useRouter();

    return (
        <div className="border-t border-teal-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={`https://robohash.org/YOUR-TEXT.png`} alt="" />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium text-white">{session?.user?.first_name + ' ' + session?.user?.last_name}</div>
                    <div className="text-sm font-medium text-teal-300">{session?.user?.mobile}</div>
                </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                    as="a"
                    onClick={() => router.push('/dashboard/profile/change-password')}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75"
                >
                    تغییر رمز عبور
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75"
                >
                    خروج
                </Disclosure.Button>
            </div>
        </div>
    )
}