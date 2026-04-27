import { H as escape_html, V as attr } from "./dev.js";
import "./toast.svelte.js";
import "./api.js";
//#region src/lib/components/ui/DownloadButton.svelte
function DownloadButton($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { docId, nomFichier, variant = "link" } = $$props;
		let downloading = false;
		if (variant === "button") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button${attr("disabled", downloading, true)} class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-all border border-blue-200 disabled:opacity-60">`);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 14px;">download</span>`);
			$$renderer.push(`<!--]--> ${escape_html(nomFichier)}</button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attr("disabled", downloading, true)} class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all group w-full text-left border border-slate-100 disabled:opacity-60"><span class="material-symbols-outlined text-slate-400 group-hover:text-blue-500 icon-filled shrink-0" style="font-size: 18px;">description</span> <span class="flex-1 text-sm text-slate-700 truncate">${escape_html(nomFichier)}</span> `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span class="material-symbols-outlined text-slate-400 group-hover:text-blue-500 shrink-0" style="font-size: 16px;">download</span>`);
			$$renderer.push(`<!--]--></button>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { DownloadButton as t };
