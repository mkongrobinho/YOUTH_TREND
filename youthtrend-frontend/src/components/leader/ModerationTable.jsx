import { ChevronLeft, ChevronRight } from "lucide-react";
import ModerationCard from "./ModerationCard";

export default function ModerationTable({
  reports,
  selected,
  onToggleSelect,
  page,
  setPage,
}) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[11px] font-semibold text-slate-400 tracking-wide border-y border-slate-100">
              <th className="px-6 py-3">REPORTER</th>
              <th className="px-3 py-3">TYPE</th>
              <th className="px-3 py-3">REASON</th>
              <th className="px-3 py-3">DATE</th>
              <th className="px-3 py-3">STATUS</th>
              <th className="px-6 py-3 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <ModerationCard
                key={report.id}
                report={report}
                isSelected={selected.has(report.id)}
                onSelect={() => onToggleSelect(report.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-[12.5px] text-slate-400">
          Showing 1 to {reports.length} of 14 reports
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"
          >
            <ChevronLeft size={14} />
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-7 h-7 rounded-md text-[12.5px] font-medium flex items-center justify-center ${
                page === n
                  ? "bg-emerald-700 text-white"
                  : "border border-slate-200 text-slate-500 hover:bg-slate-50"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(3, p + 1))}
            className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
