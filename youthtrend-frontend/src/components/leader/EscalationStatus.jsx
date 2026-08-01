export default function EscalationStatus() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6">
      <h3 className="text-[11px] font-bold text-slate-400 tracking-wide mb-4">
        ESCALATION STATUS
      </h3>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-medium text-slate-700">Platform Review</span>
          <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
            3 Urgent
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-rose-500 rounded-full" style={{ width: "70%" }} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-[13px] font-medium text-slate-700">Legal Dept.</span>
        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
          1 Case
        </span>
      </div>

      <button className="w-full py-2.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-700 hover:bg-slate-50">
        View Case Logs
      </button>
    </div>
  );
}
