interface League {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
}

interface LeagueAnswer {
    id: number;
    user_id: number;
    league_id: number;
    return: number;
    equity_final: number;
    max_drawdown: number;
    return_ann: number;
    volatility_ann: number;
    sharpe_ratio: number;
    sortino_ratio: number;
    calmar_ratio: number;
    win_rate: number;
    profit_factor: number;
    final: boolean;
    created_at: string;
    updated_at: string;
    code: {
        uuid: string;
        original_url: string;
        name: string;
        collection_name: string;
    }
}