from backtesting import Backtest, Strategy
from backtesting.lib import crossover
from backtesting.test import GOOG


import numpy as np

def EMA(prices, period):
    """
    Compute Exponential Moving Average for a given period.
    """
    alpha = 2 / (period + 1)
    ema = np.zeros_like(prices)
    ema[0] = prices[0]
    for i in range(1, len(prices)):
        ema[i] = alpha * prices[i] + (1 - alpha) * ema[i - 1]
    return ema

class Alg(Strategy):
    n1 = 12
    n2 = 26

    def init(self):
        close = self.data.Close
        self.ema1 = self.I(EMA, close, self.n1)
        self.ema2 = self.I(EMA, close, self.n2)

    def next(self):
        if crossover(self.ema1, self.ema2):
            self.buy()
        elif crossover(self.ema2, self.ema1):
            self.sell()
