"use client";

import Loading from '@/components/loading';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, ArrowRight, ChevronLeft, DownloadCloud } from 'lucide-react';
import Link from 'next/link';

async function getLeagues(
    token: string
) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://194.5.205.157:8000/api/leagues',
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

export async function getLeagueAnswers(
    token: string,
    id: string
) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://194.5.205.157:8000/api/leagues/' + id + '/answers',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    return axios(config)
        .then(response => {
            return response.data.data.answers as LeagueAnswer[];
        })
        .catch(error => {
            console.error(error);
        });

}

export default function Content() {
    const params = useParams<{ id: string }>()

    const { data: session, status } = useSession()
    const router = useRouter();
    const { toast } = useToast()

    const { status: leaguesStatus, data: leagues, error: leaguesErrors } = useQuery({
        queryKey: ['leagues'],
        queryFn: async () => await getLeagues(session.token) as League[],
    });


    const { status: leagueStatus, data: leagueAnswers, error: leagueErrors } = useQuery({
        queryKey: ['leagueAnswer', params.id],
        queryFn: async () => await getLeagueAnswers(session.token, params.id) as LeagueAnswer[],
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

    return (
        <div className="container mx-auto py-3">
            <h1 className='text-2xl font-bold mb-3 capitalize'>لیگ‌ {leagues?.filter(league => league.id == params.id)[0]?.title}</h1>

            {
                leaguesStatus == 'pending' && <Loading />
            }

            <div className="grid grid-cols-1 gap-4">
                {leagueStatus == 'success' && leagueAnswers?.length > 0 && leagueAnswers.map((leagueAnswer) => (
                    <div
                        key={leagueAnswer.id}
                        className="group relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:border-gray-300 transition-all"
                    >
                        <p className="text-base font-medium text-gray-900 uppercase font-mono">{leagueAnswer.code.name}</p>

                        <Link href={leagueAnswer.code.original_url} download target='_blank' className='absolute top-1/2 left-2 -mt-3'>
                            <DownloadCloud className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all cursor-pointer" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}