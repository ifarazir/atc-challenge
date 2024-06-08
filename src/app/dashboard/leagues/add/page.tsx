"use client";

import Loading from '@/components/loading';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useToast } from '@/components/ui/use-toast';
import { getLeagueAnswers } from '../[id]/content';
import { Loader } from 'lucide-react';

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

async function storeLeagueAnswer(
    {
        token,
        league_id,
        file
    }:
        {
            token: string,
            league_id: string,
            file: File
        }
) {
    console.log(file);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.atchallenge.ir/api/leagues/' + league_id + '/answers',
        headers: {
            'Accept': 'application/json',
            'content-type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        },
        data: {
            code: file
        }
    };

    return axios(config)
        .then(response => {
            return response.data.data.answer as LeagueAnswer[];
        })
        .catch(error => {
            console.error(error);
        });
}

const DashboardPage: React.FC = () => {
    const { data: session, status } = useSession()
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    

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

    const onSubmitAnswer = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const leagueAnswer = await storeLeagueAnswer(
                {
                    token: session.token,
                    file: e.target.code.files[0],
                    league_id: e.target.league_id.value
                }
            );

            // const { status: leagueStatus, data: leagueAnswers, error: leagueErrors } = useQuery({
            //     queryKey: ['leagueAnswer', e.target.league_id.value],
            //     queryFn: async () => await getLeagueAnswers(session.token, e.target.league_id.value) as LeagueAnswer[],
            // });

            setLoading(false);
            
            // redirect to league page
            router.push('/dashboard/leagues/' + e.target.league_id.value);
        } catch (error) {
            console.error(error);
            toast({
                description: "Error submitting answer",
                variant: "destructive"
            });
            
            setLoading(false);
        }

    };


    return (
        <div className="container mx-auto py-3">
            <h1 className='text-2xl font-bold mb-3'>افزودن پاسخ</h1>

            {
                leaguesStatus == 'pending' && <Loading />
            }

            {
                leaguesStatus == 'success' && (
                    <div className='shadow-sm w-full px-3 py-5 border rounded-md bg-white'>
                        <form onSubmit={onSubmitAnswer} className='max-w-2xl mx-auto flex flex-col gap-4'>
                            <div>
                                <label htmlFor="league_id" className="block text-sm font-medium leading-6 text-gray-900">
                                    لیگ انتخابی
                                </label>
                                <select
                                    id="league_id"
                                    name="league_id"
                                    className="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6"
                                >
                                    {
                                        leagues.length > 0 && leagues.map((league) => (
                                            <option key={league.id} value={league.id}>{league.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                                    فایل کد
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="file"
                                        name="code"
                                        id="code"
                                        accept=".py"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
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
                )
            }

        </div>
    );
};

export default DashboardPage;
