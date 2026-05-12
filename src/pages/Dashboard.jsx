import { useState, useEffect, useMemo } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import { getStatsCard } from "../data/dataDashboard";

const DashboardPages = ({ dataFromApi }) => {
  const [seconds, setSeconds] = useState(0);

  // Logika Timer Real-time (Counter 1-60 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Memasukkan state 'seconds' ke dalam useMemo agar data terupdate tiap detik
  const statsCards = useMemo(() => 
    getStatsCard(dataFromApi, seconds), 
    [dataFromApi, seconds]
  );

  return (
    <div className="container space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard Monitoring
        </h1>
        <p className="text-slate-500">Pantau kondisi ternak dan sistem secara real-time.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsCards.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPages;