"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './logo'
import { RegisterDrawerDialog } from './register-modal'
import Link from 'next/link'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white flex flex-col">

            <header className="absolute inset-x-0 top-0 z-50">
                <div className="w-full flex items-center justify-between gap-x-6 bg-red-800 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
                    <p className="text-sm leading-6 text-white">
                        <a href="#">
                            <strong className="font-semibold">اطلاعیه</strong>
                            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            ضمن پوزش به دلیل اختلال در سرور و اینترنت دانشگاه، سیستم آپلود و تست کد ها با تاخیر از هم‌اکنون در دسترس قرار گرفت.
                        </a>
                    </p>
                </div>
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                            <Logo className='h-10 w-auto' />
                            <div className='flex items-start flex-col'>
                                <p className='text-sm font-bold'>مسابقه الگوریتم تریدینگ</p>
                                <p className='text-xs font-light'>رقابتی برای تسلط بر بازار‌ها</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <Link
                            href={"/#faq"}
                            className="px-5 py-2.5 text-sm font-semibold text-black"
                        >
                            سوالات متداول
                        </Link>
                        <Link
                            href={'/auth/login'}
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        >
                            ورود
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
                        <Link
                            href={"/#faq"}
                            className="px-5 py-2.5 text-sm font-semibold text-black"
                        >
                            سوالات متداول
                        </Link>
                        <Link
                            href={'/auth/login'}
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        >
                            ورود
                        </Link>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        ورود
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate pt-14">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a2bba9] to-[#ebbc74] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-light text-gray-900 sm:text-4xl mb-2">
                                دانشگاه صنعتی امیرکبیر
                            </h2>
                            <h1 className="text-4xl font-black text-gray-900 sm:text-6xl">
                                مسابقه الگوریتم تریدینگ
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                مسابقه الگوریتم تریدینگ امیرکبیر اولین رویداد با موضوع پیش‌بینی بازارهای سرمایه در ایران است. این موضوع یک چالش جدی در حوزه معاملات الگوریتمی است. شرکت‌کنندگان در این مسابقه باید استراتژی‌های معاملاتی خود را پیاده‌سازی و با کمک داده های داده شده به مسابقه بگذارند.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    اطلاعات بیشتر <span aria-hidden="true">←</span>
                                </a> */}
                                <RegisterDrawerDialog>
                                    <button
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                    >
                                        ثبت نام
                                    </button>
                                </RegisterDrawerDialog>
                            </div>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="./images/poster.jpg"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1442}
                                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ebbc74] to-[#a2bba9] opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
