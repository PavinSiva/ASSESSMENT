import React, { useEffect, useState } from "react";
const TOP_STOCKS = [
  "AAPL",  
  "NVDA", 
  "MSFT",  
  "META", 
  "GOOGL",  
  "AMZN", 
  "TSLA",  
  "NFLX",  
  "AMD",    
  "INTC"    
];
const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTopStocks = async () => {
      try {
        const responses = await Promise.all(
          TOP_STOCKS.map((symbol) =>
            fetch(
              `http://localhost:5000/api/stocks/dashboard?symbol=${symbol}`
            ).then((res) => res.json())
          )
        );
        setStocks(responses);
      } catch (error) {
        console.error("Error loading top stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStocks();
  }, []);

  if (loading) return <p>Loading top stocks...</p>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {stocks.map((stock) => {
        const isPositive = stock.quote.percentChange >= 0;
        return (
          <div
            key={stock.symbol}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              width: "220px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <h3>{stock.details.name}</h3>
            <p><strong>{stock.symbol}</strong></p>

            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              ${stock.quote.price}
            </p>

            <p
              style={{
                color: isPositive ? "green" : "red",
                fontWeight: "bold"
              }}
            >
              {stock.quote.percentChange}% 
            </p>

            <p style={{ fontSize: "14px", color: "gray" }}>
              Market Cap: {stock.details.marketCap}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;