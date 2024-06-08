"use client";

import Loading from '@/components/loading';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

async function getLeagues(
    token: string
) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.atchallenge.ir/api/leagues',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    return axios(config)
        .then(response => {
            return response.data.data.leagues as League[];
        })
        .catch(error => {
            console.error(error);
        });

}

const DashboardPage: React.FC = () => {
    const { data: session, status } = useSession()
    const router = useRouter();
    const { toast } = useToast()

    const { status: leaguesStatus, data: leagues, error: leaguesErrors } = useQuery({
        queryKey: ['leagues'],
        queryFn: async () => await getLeagues(session.token) as League[],
    });

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

    useEffect(() => {
        if (leaguesStatus === 'error') {
            console.error('Error fetching leagues:', leaguesErrors);
            toast({
                description: "Error fetching leagues",
                variant: "destructive"
            });
        }
    }, [leaguesStatus]);

    if (status === 'loading') {
        return <Loading />;
    }

    return (
        <div className="container mx-auto py-3">
            <h1 className='text-2xl font-bold mb-3'>لیگ‌ها</h1>

            <div className='shadow p-3 border flex flex-col gap-y-3 md:flex-row items-start md:items-center justify-between bg-white mb-10 rounded-lg'>
                <p>نمونه کد پایتون جهت استفاده شرکت کنندگان، آماده دانلود می‌باشد.</p>

                <Link href={'/sample2.py'} download target="_blank" className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                    دانلود نمونه کد
                </Link>
            </div>

            {
                leaguesStatus == 'pending' && <Loading />
            }

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {leaguesStatus == 'success' && leagues?.length > 0 && leagues.map((league) => (
                    <Link
                        href={"/dashboard/leagues/" + league.id}
                        key={league.id}
                        className="group relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:border-gray-300 transition-all"
                    >
                        <p className="text-base font-semibold text-gray-900 capitalize">{league.title}</p>

                        <ChevronLeft className="absolute top-1/2 left-2 -mt-3 w-6 h-6 text-gray-400 group-hover:text-gray-700 transition-all" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
