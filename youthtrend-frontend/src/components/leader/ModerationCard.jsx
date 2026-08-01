import { Check, Trash2, MoreHorizontal, RotateCcw } from "lucide-react";

const REASON_STYLES = {
  Harassment: "bg-rose-50 text-rose-600",
  Spam: "bg-slate-100 text-slate-600",
  Inappropriate: "bg-rose-50 text-rose-600",
};

const STATUS_STYLES = {
  PENDING: { dot: "bg-amber-500", text: "text-amber-600" },
  ESCALATED: { dot: "bg-rose-500", text: "text-rose-600" },
  CLEARED: { dot: "bg-emerald-500", text: "text-emerald-600" },
};

function TypeIcon({ type }) {
  if (type === "Profile") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400 shrink-0">
        <path
          d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400 shrink-0">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9h10M7 13h10M7 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ModerationCard({ report, isSelected, onSelect }) {
  const status = STATUS_STYLES[report.status];

  return (
    <tr
      onClick={onSelect}
      className={`border-b border-slate-100 last:border-0 cursor-pointer transition-colors ${
        isSelected ? "bg-emerald-50/60" : "hover:bg-slate-50"
      }`}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ${report.avatarColor} text-white text-[11px] font-semibold flex items-center justify-center shrink-0`}
          >
            {report.initials}
          </div>
          <div>
            <p className="text-[13.5px] font-semibold text-slate-800">{report.name}</p>
            <p className="text-[12px] text-slate-400">Matric: {report.matric}</p>
          </div>
        </div>
      </td>

      <td className="px-3 py-4">
        <div className="flex items-center gap-2 text-[13px] text-slate-600">
          <TypeIcon type={report.type} />
          {report.type}
        </div>
      </td>

      <td className="px-3 py-4">
        <span className={`text-[11.5px] font-medium px-2.5 py-1 rounded-full ${REASON_STYLES[report.reason]}`}>
          {report.reason}
        </span>
      </td>

      <td className="px-3 py-4 text-[13px] text-slate-500">
        {report.date} - {report.time}
      </td>

      <td className="px-3 py-4">
        <div className={`flex items-center gap-1.5 text-[12.5px] font-semibold ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {report.status}
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-3 text-slate-400">
          <button className="hover:text-emerald-600" title="Approve" onClick={(e) => e.stopPropagation()}>
            <Check size={16} />
          </button>
          <button className="hover:text-rose-600" title="Remove" onClick={(e) => e.stopPropagation()}>
            <Trash2 size={16} />
          </button>
          {report.status === "ESCALATED" ? (
            <button className="hover:text-emerald-600" title="Restore" onClick={(e) => e.stopPropagation()}>
              <RotateCcw size={16} />
            </button>
          ) : (
            <button className="hover:text-slate-600" title="More" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal size={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
