"use client";

import Loading from '@/components/loading';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';
import { Loader } from 'lucide-react';


async function StoreNewPassword(
    {
        token,
        old_password,
        new_password,
    }:
        {
            token: string,
            old_password: string,
            new_password: string
        }
) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.atchallenge.ir/api/auth/change-password',
        headers: {
            'Accept': 'application/json',
            'content-type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        },
        data: {
            old_password: old_password,
            new_password: new_password   
        }
    };

    return axios(config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return error.response.data;
        });
}

const ChangePasswordPage: React.FC = () => {
    const { data: session, status } = useSession()
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (status === 'authenticated') {
            // User is authenticated, allow access
        } else if (status === 'loading') {
            // Session is loading
        } else {
            // User is not authenticated, redirect to login page
            router.push('/auth/login');
        }
    }, [status]);

    if (status === 'loading') {
        return <Loading />;
    }

    const onSubmitAnswer = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const changePasswordResponse = await StoreNewPassword({
                token: session.token,
                old_password: e.target.old_password.value,
                new_password: e.target.new_password.value,
            });

            setLoading(false);
            console.log(changePasswordResponse);
            if (changePasswordResponse?.message == 'success') {
                // redirect to league page
                toast({
                    description: 'رمز عبور با موفقیت تغییر یافت',
                    variant: "default"
                });

                router.push('/dashboard');
            } else {
                toast({
                    description: changePasswordResponse?.message,
                    variant: "destructive"
                });
            }

        } catch (error) {
            toast({
                description: error?.message,
                variant: "destructive"
            });

            setLoading(false);
        }

    };


    return (
        <div className="container mx-auto py-3">
            <h1 className='text-2xl font-bold mb-3'>تغییر رمز عبور</h1>

            <div className='shadow-sm w-full px-3 py-5 border rounded-md bg-white'>
                <form onSubmit={onSubmitAnswer} className='max-w-2xl mx-auto flex flex-col gap-4'>
                    <div>
                        <label htmlFor="old_password" className="block text-sm font-medium leading-6 text-gray-900">
                            رمز فعلی
                        </label>
                        <div className="mt-2">
                            <input
                                id="old_password"
                                name="old_password"
                                type="password"
                                required
                                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">
                            رمز جدید
                        </label>
                        <div className="mt-2">
                            <input
                                id="new_password"
                                name="new_password"
                                type="password"
                                required
                                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className='mr-auto'>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-600 px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            disabled={loading}
                        >
                            {
                                loading ? (
                                    <Loader className='w-5 h-5 my-1 animate-spin text-white' />
                                ) : "ثبت"
                            }
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default ChangePasswordPage;
