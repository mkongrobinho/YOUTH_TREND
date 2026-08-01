export default function ModerationStats({
  clearedToday = 128,
  avgResponse = "4.2m",
  note = "You're in the top 5% of active moderators this week. Keep up the great work!",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6">
      <h3 className="text-[11px] font-bold text-slate-400 tracking-wide mb-4">
        MODERATOR STATS
      </h3>
      <div className="flex items-center gap-8 mb-4">
        <div>
          <p className="text-[26px] font-bold text-slate-900 leading-none">{clearedToday}</p>
          <p className="text-[11.5px] text-slate-400 mt-1">Cleared Today</p>
        </div>
        <div>
          <p className="text-[26px] font-bold text-slate-900 leading-none">{avgResponse}</p>
          <p className="text-[11.5px] text-slate-400 mt-1">Avg. Response</p>
        </div>
      </div>
      <div className="bg-emerald-50 rounded-lg p-3">
        <p className="text-[12px] text-emerald-700 italic leading-relaxed">"{note}"</p>
      </div>
    </div>
  );
}
