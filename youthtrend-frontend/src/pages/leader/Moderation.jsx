import { useState } from "react";
import ModerationFilters from "../../components/leader/ModerationFilters";
import ModerationTable from "../../components/leader/ModerationTable";
import CommunityGuidelines from "../../components/leader/CommunityGuidelines";
import EscalationStatus from "../../components/leader/EscalationStatus";
import ModerationStats from "../../components/leader/ModerationStats";
import SelectionBar from "../../components/leader/SelectionBar";

// TODO: replace with a real fetch (e.g. useEffect + api/moderation.js)
const REPORTS = [
  {
    id: 1,
    initials: "BN",
    avatarColor: "bg-emerald-600",
    name: "Bate Ngao",
    matric: "UB22A405",
    type: "Post",
    reason: "Harassment",
    date: "Oct 24, 2023",
    time: "09:12 AM",
    status: "PENDING",
  },
  {
    id: 2,
    initials: "TK",
    avatarColor: "bg-slate-400",
    name: "Tanyi Kevin",
    matric: "UB21B112",
    type: "Profile",
    reason: "Spam",
    date: "Oct 23, 2023",
    time: "04:45 PM",
    status: "ESCALATED",
  },
  {
    id: 3,
    initials: "EM",
    avatarColor: "bg-emerald-600",
    name: "Eposi Mary",
    matric: "UB23C221",
    type: "Post",
    reason: "Inappropriate",
    date: "Oct 23, 2023",
    time: "02:20 PM",
    status: "PENDING",
  },
  {
    id: 4,
    initials: "DA",
    avatarColor: "bg-emerald-600",
    name: "Djomo Alain",
    matric: "UB22A009",
    type: "Post",
    reason: "Spam",
    date: "Oct 23, 2023",
    time: "11:15 AM",
    status: "PENDING",
  },
];

export default function Moderation() {
  const [reports, setReports] = useState(REPORTS);
  const [selected, setSelected] = useState(new Set([2]));
  const [reasonType, setReasonType] = useState("All Issues");
  const [dateRange, setDateRange] = useState("Last 24 Hours");
  const [page, setPage] = useState(1);

  const toggleSelect = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const handleApproveSelected = () => {
    // TODO: call api/moderation.js -> approveReports([...selected])
    setReports((prev) => prev.filter((r) => !selected.has(r.id)));
    clearSelection();
  };

  const handleRemoveSelected = () => {
    // TODO: call api/moderation.js -> removeReports([...selected])
    setReports((prev) => prev.filter((r) => !selected.has(r.id)));
    clearSelection();
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F7F5]">
      <header className="flex items-center justify-between px-8 py-5 border-b border-slate-200/70">
        <h2 className="text-[19px] font-bold text-slate-900">Moderation Queue</h2>
      </header>

      <div className="p-8 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm">
          <ModerationFilters
            reasonType={reasonType}
            setReasonType={setReasonType}
            dateRange={dateRange}
            setDateRange={setDateRange}
            pendingCount={reports.length + 10}
          />
          <ModerationTable
            reports={reports}
            selected={selected}
            onToggleSelect={toggleSelect}
            page={page}
            setPage={setPage}
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <CommunityGuidelines />
          <EscalationStatus />
          <ModerationStats />
        </div>
      </div>

      {selected.size > 0 && (
        <SelectionBar
          count={selected.size}
          onApprove={handleApproveSelected}
          onRemove={handleRemoveSelected}
        />
      )}
    </div>
  );
}
