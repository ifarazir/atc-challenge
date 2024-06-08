"use client";

import Loading from '@/components/loading';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, ArrowRight, ChevronLeft, DownloadCloud, Plus } from 'lucide-react';
import Link from 'next/link';
import { cttd, persianDateFormatOptions } from '@/lib/utils';
import AnswerCard from './card';

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

export async function getLeagueAnswers(
    token: string,
    id: string
) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.atchallenge.ir/api/leagues/' + id + '/answers',
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
            <h1 className='text-2xl font-bold mb-3 capitalize'>{leagues?.filter(league => league.id == params.id)[0]?.title}</h1>

            {
                leaguesStatus == 'pending' && <Loading />
            }

            <div className="grid grid-cols-1 gap-4">
                {leagueStatus == 'success' && leagueAnswers?.length ==0 && (
                    <div className="flex items-center justify-center py-10 bg-white shadow flex-col gap-5">
                        <p className="text-lg text-gray-700 font-normal">هنوز هیچ پاسخی برای این لیگ ثبت نشده است.</p>
                        <Link
                            href={'/dashboard/leagues/add'}
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        >
                            <Plus className="w-4 h-4 inline-block ml-2" />
                            ثبت پاسخ
                        </Link>

                    </div>
                )}
                {leagueStatus == 'success' && leagueAnswers?.length > 0 && leagueAnswers.slice(0).reverse().map((leagueAnswer) => (
                    <AnswerCard key={leagueAnswer.id} {...leagueAnswer} />
                ))}
            </div>
        </div>
    )

}