import { Radio, ShieldCheck } from "lucide-react";

export const getStatsCard = (data, liveTime) => {
  const stats = data?.stats || {};
  
  return [
    {
      title: "STATUS RFID",
      value: stats.totalRFID || 0,
      icon: Radio,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Tag ternak aktif terdeteksi",
      status: "Semua Aman",
      time: `sinkron ${liveTime} dtk lalu`, 
    },
    {
      title: "SENSITIVITAS GERAK",
      value: `${stats.totalMovementPercent || 0}%`,
      icon: Radio,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Sensitivitas sensor PIR",
      status: "Stabil",
      time: "3 zona aktif"
    },
    {
      title: "KEAMANAN SISTEM",
      value: "AKTIF",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Monitoring enkripsi data & akses",
      status: "Rendah Risiko",
      time: "24 jam non-stop"
    },
  ];
};