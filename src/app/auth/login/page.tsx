"use client";

import Logo from "@/app/(home)/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast()
    const router = useRouter();
    
    // Get session from next-auth
    const { data: session, status } = useSession()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true while processing login

        const target = e.target as typeof e.target & {
            phone: { value: string };
            password: { value: string };
        };
        const phone = target.phone.value;
        const password = target.password.value;

        const res = await signIn('credentials', { redirect: false, phone, password });

        // Show success message
        if (res?.ok) {
            toast({
                title: 'Success!',
                description: 'You have successfully logged in.',
                variant: 'default'
            });

            // Redirect user to admin panel
            router.push('/dashboard');
        } else {
            toast({
                title: 'Error!',
                description: res?.error,
                variant: 'destructive'
            });
        }


        // Reset loading state after login attempt completes
        setLoading(false);
    };

    useEffect(() => {
        // Redirect user to dashboard if already logged in
        if (session) {
            router.push('/dashboard');
        }
    }, [status]);

    return (
        <>
            <div className="flex min-h-dvh flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                                <Logo className='h-16 w-auto' />
                            </Link>
                            <h2 className="mt-8 text-2xl font-bold leading-9 text-gray-900">
                                ورود به داشبورد مسابقه
                            </h2>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                            شماره موبایل
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="phone"
                                                autoComplete="phone"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            رمز عبور
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                        >
                                            ورود
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/images/wallpaper.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
