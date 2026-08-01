import { ArrowRight } from "lucide-react";

export default function CommunityGuidelines() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6">
      <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">Community Guidelines</h3>
      <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4">
        Review the latest updates to student conduct policy to ensure consistent moderation
        across all campus groups.
      </p>
      <button className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800">
        Read Policies <ArrowRight size={14} />
      </button>
    </div>
  );
}
