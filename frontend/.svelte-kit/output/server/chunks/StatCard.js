import { H as escape_html, a as derived, n as attr_class, u as stringify } from "./dev.js";
//#region src/lib/components/ui/StatCard.svelte
function StatCard($$renderer, $$props) {
	let { title, value, icon, color = "blue", trend = "", trendUp = true, subtitle = "" } = $$props;
	const colorMap = {
		blue: {
			bg: "bg-brand-50",
			icon: "text-brand-600",
			border: "border-brand-100"
		},
		green: {
			bg: "bg-emerald-50",
			icon: "text-emerald-600",
			border: "border-emerald-100"
		},
		orange: {
			bg: "bg-terre-50",
			icon: "text-terre-600",
			border: "border-terre-100"
		},
		red: {
			bg: "bg-red-50",
			icon: "text-red-600",
			border: "border-red-100"
		},
		purple: {
			bg: "bg-brand-50",
			icon: "text-brand-700",
			border: "border-brand-100"
		},
		cyan: {
			bg: "bg-terre-50",
			icon: "text-terre-500",
			border: "border-terre-100"
		}
	};
	const c = derived(() => colorMap[color] ?? colorMap.blue);
	$$renderer.push(`<div class="bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"><div class="flex items-start justify-between"><div class="flex-1 min-w-0"><p class="text-xs font-medium text-slate-500 uppercase tracking-wide">${escape_html(title)}</p> <p class="font-display font-black text-3xl text-slate-900 mt-2 leading-none tracking-tight">${escape_html(value)}</p> `);
	if (subtitle) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="text-xs text-slate-400 mt-1.5">${escape_html(subtitle)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> `);
	if (trend) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="flex items-center gap-1 mt-2"><span${attr_class(`material-symbols-outlined icon-filled ${stringify(trendUp ? "text-emerald-500" : "text-red-500")}`)} style="font-size: 14px;">${escape_html(trendUp ? "arrow_upward" : "arrow_downward")}</span> <span${attr_class(`text-xs font-medium ${stringify(trendUp ? "text-emerald-600" : "text-red-600")}`)}>${escape_html(trend)}</span></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div> <div${attr_class(`hidden lg:flex w-11 h-11 rounded-xl ${stringify(c().bg)} border ${stringify(c().border)} items-center justify-center shrink-0 ml-3`)}><span${attr_class(`material-symbols-outlined ${stringify(c().icon)} icon-filled`)} style="font-size: 22px;">${escape_html(icon)}</span></div></div></div>`);
}
//#endregion
export { StatCard as t };
