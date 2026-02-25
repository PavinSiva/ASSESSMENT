import { fetchDashboardData } from "../services/finnhub.provider.js";
export const getDashboardStock = async (req, res) => {
  try {
    const { symbol } = req.query;
    if (!symbol) {
      return res.status(400).json({ error: "Symbol is required" });
    }
    const data = await fetchDashboardData(symbol);

    res.json(data);

  } catch (error) {
    console.error("Dashboard error:", error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};