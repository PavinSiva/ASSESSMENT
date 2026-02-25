Project Overview 
This application fetches live stock data including:
  Company Name
  Stock Symbol
  Current Price
  Percentage Change
  Market Capitalization


Frontend :
  React (Vite)
  Axios / Fetch API
  CSS (Custom Styled UI)
  
Backend:
  Node.js
  Express.js
  Axios
  CORS
  dotenv
  Nodemon

API :
  Finnhub Stock API (Free/Open plan)

User Opens App
      ↓
Frontend Loads (React)
      ↓
Dashboard Component Mounts
      ↓
useEffect() Runs
      ↓
Frontend Calls Backend API
      ↓
Backend Receives Request
      ↓
Backend Fetches Data from Finnhub API
      ↓
Finnhub Returns Stock Data
      ↓
Backend Sends JSON Response to Frontend
      ↓
Frontend Updates State
      ↓
Stock Data Displays on UI


Running Instructions :
1) Clone the Repository
   git clone https://github.com/PavinSiva/ASSESSMENT.git
   cd ASSESSMENT
2)Setup and Run Backend
   cd backend
   npm install
3)Start the backend server
   npm run dev
4)Setup and Run Frontend
   cd Stock_Dashboard
   npm install
   npm run dev

   
