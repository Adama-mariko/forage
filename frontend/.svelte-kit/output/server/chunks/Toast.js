import { H as escape_html, n as attr_class, o as ensure_array_like, u as stringify } from "./dev.js";
import { t as toast } from "./toast.svelte.js";
//#region src/lib/components/ui/Toast.svelte
function Toast($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const icons = {
			success: "check_circle",
			error: "error",
			warning: "warning",
			info: "info"
		};
		const colors = {
			success: "from-emerald-500 to-teal-500",
			error: "from-red-500 to-rose-500",
			warning: "from-amber-500 to-orange-500",
			info: "from-blue-500 to-indigo-500"
		};
		const bgColors = {
			success: "bg-emerald-50 border-emerald-200",
			error: "bg-red-50 border-red-200",
			warning: "bg-amber-50 border-amber-200",
			info: "bg-blue-50 border-blue-200"
		};
		const textColors = {
			success: "text-emerald-800",
			error: "text-red-800",
			warning: "text-amber-800",
			info: "text-blue-800"
		};
		$$renderer.push(`<div class="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none" style="min-width: 320px; max-width: 400px;"><!--[-->`);
		const each_array = ensure_array_like(toast.toasts);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let t = each_array[$$index];
			$$renderer.push(`<div${attr_class(`pointer-events-auto animate-slide-in-right flex items-start gap-3 rounded-2xl border p-4 shadow-xl ${stringify(bgColors[t.type])}`)} style="backdrop-filter: blur(8px);"><div${attr_class(`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${stringify(colors[t.type])} flex items-center justify-center shadow-md`)}><span class="material-symbols-outlined text-white icon-filled" style="font-size: 18px;">${escape_html(icons[t.type])}</span></div> <div class="flex-1 min-w-0"><p${attr_class(`font-semibold text-sm ${stringify(textColors[t.type])}`)}>${escape_html(t.title)}</p> `);
			if (t.message) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p${attr_class(`text-xs mt-0.5 opacity-80 ${stringify(textColors[t.type])}`)}>${escape_html(t.message)}</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <button${attr_class(`flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity ${stringify(textColors[t.type])}`)}><span class="material-symbols-outlined" style="font-size: 18px;">close</span></button></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { Toast as t };
