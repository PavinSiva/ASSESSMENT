import axios from "axios";

const API_KEY = process.env.FINNHUB_API_KEY || "d5f9h69r01qs9hjkcur0d5f9h69r01qs9hjkcurg";
const BASE_URL = "https://finnhub.io/api/v1";

const fetchStockDetails = async (symbol) => {
  const { data } = await axios.get(`${BASE_URL}/stock/profile2`, {
    params: {
      symbol,
      token: API_KEY
    }
  });

  return {
    name: data.name,
    exchange: data.exchange,
    currency: data.currency,
    country: data.country,
    marketCap: data.marketCapitalization,
    industry: data.finnhubIndustry
  };
};


const fetchStockQuote = async (symbol) => {
  const { data } = await axios.get(`${BASE_URL}/quote`, {
    params: {
      symbol,
      token: API_KEY
    }
  });

  return {
    price: data.c,
    change: data.d,
    percentChange: data.dp,
    high: data.h,
    low: data.l,
    open: data.o,
    previousClose: data.pc
  };
};






export const fetchDashboardData = async (symbol) => {
  const [details, quote] = await Promise.all([
    fetchStockDetails(symbol),
    fetchStockQuote(symbol)
  ]);

  return {
    symbol,
    details,
    quote
  };
};