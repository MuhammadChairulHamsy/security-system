const StatsCard = ({ title, value, icon: Icon, color, bgColor, description, status, time }) => {
  return (
    <div className="group relative overflow-hidden bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Efek Hover Background */}
      <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-10 blur-xl transition-opacity group-hover:opacity-20 ${bgColor}`} />

      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            {title}
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-800">
            {value ?? "—"}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-40">
            {description}
          </p>
        </div>

        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor} ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Footer Card: Status & Time */}
      <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-end">
        <div>
          <span className="block text-[10px] uppercase text-slate-400 font-medium">Status</span>
          <span className={`text-sm font-bold ${status === 'Semua Aman' ? 'text-emerald-500' : 'text-slate-600'}`}>
            {status}
          </span>
        </div>
        {time && (
          <div className="text-right">
             <span className="block text-[10px] text-slate-400 italic">{time}</span>
          </div>
        )}
      </div>

      {/* Animated Bottom Line */}
      <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${bgColor.replace('bg-', 'bg-')}`} />
    </div>
  );
};

export default StatsCard;