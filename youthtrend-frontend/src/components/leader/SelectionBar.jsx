import { Check, Trash2 } from "lucide-react";

export default function SelectionBar({ count, onApprove, onRemove }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-5">
      <span className="text-[13px] font-medium">{count} Reports Selected</span>
      <div className="w-px h-4 bg-white/20" />
      <button
        onClick={onApprove}
        className="flex items-center gap-1.5 text-[13px] font-medium hover:text-emerald-400"
      >
        <Check size={14} /> Approve
      </button>
      <button
        onClick={onRemove}
        className="flex items-center gap-1.5 text-[13px] font-medium hover:text-rose-400"
      >
        <Trash2 size={14} /> Remove
      </button>
    </div>
  );
}
