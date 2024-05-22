"use client";

import { Toaster } from '@/components/ui/toaster';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from '../(home)/logo';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { Plus } from 'lucide-react';

const navigation = [
    { name: 'داشبورد', href: '/dashboard', current: false },
]

const queryClient = new QueryClient()

export function subItem1() {
    const { data: session, status } = useSession()

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
                <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-teal-600 p-1 text-teal-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
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

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <div className="min-h-full bg-gray-50">
                <Disclosure as="nav" className="bg-teal-600">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                                                <Logo className='h-10 w-auto' />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={cn(
                                                            item.current
                                                                ? 'bg-teal-700 text-white'
                                                                : 'text-white hover:bg-teal-500 hover:bg-opacity-75',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <SessionProvider>
                                        <div className="hidden md:block">
                                            <div className="mr-4 flex items-center gap-4 md:mr-6">
                                                <Link
                                                    href={'/dashboard/leagues/add'}
                                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                                >
                                                    <Plus className="w-4 h-4 inline-block ml-2" />
                                                    ثبت پاسخ
                                                </Link>

                                                {/* Profile dropdown */}
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
                                                            <span className="absolute -inset-1.5" />
                                                            <span className="sr-only">Open user menu</span>
                                                            <img className="h-8 w-8 bg-white/60 rounded-full" src={"https://robohash.org/YOUR-TEXT.png"} alt="" />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>
                                                                <a
                                                                    onClick={() => signOut({ callbackUrl: '/' })}
                                                                    className={cn(
                                                                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                                    )}
                                                                >
                                                                    خروج
                                                                </a>
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                        </div>
                                    </SessionProvider>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-teal-600 p-2 text-teal-200 hover:bg-teal-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={cn(
                                                item.current
                                                    ? 'bg-teal-700 text-white'
                                                    : 'text-white hover:bg-teal-500 hover:bg-opacity-75',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <SessionProvider>
                                    <subItem1 />
                                </SessionProvider>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <h1 className="text-lg font-semibold leading-6 text-gray-900">داشبورد مسابقه</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6">
                        <SessionProvider>
                            <Toaster />
                            <QueryClientProvider client={queryClient}>
                                <div>{children}</div>
                            </QueryClientProvider>
                        </SessionProvider>
                    </div>
                </main>
            </div>
        </>
    )
}