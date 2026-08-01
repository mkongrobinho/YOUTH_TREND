export default function ModerationFilters({
  reasonType,
  setReasonType,
  dateRange,
  setDateRange,
  pendingCount,
}) {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Reason Type:
            </label>
            <select
              value={reasonType}
              onChange={(e) => setReasonType(e.target.value)}
              className="text-[13px] font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              <option>All Issues</option>
              <option>Harassment</option>
              <option>Spam</option>
              <option>Inappropriate</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Date Range:
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-[13px] font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          <button className="mt-5 flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-[13px] font-medium px-4 py-2 rounded-lg transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M7 12h10M10 18h4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Apply Filters
          </button>
          <button className="mt-5 text-[13px] font-medium text-emerald-700 hover:text-emerald-800 px-2">
            Reset
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-[13px] font-medium text-slate-500">
          {pendingCount} Pending Reports
        </span>
        <button className="flex items-center gap-2 text-[13px] font-medium text-slate-700 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Export CSV
        </button>
      </div>
    </>
  );
}
