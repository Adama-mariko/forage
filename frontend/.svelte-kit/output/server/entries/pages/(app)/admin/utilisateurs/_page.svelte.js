import "../../../../../chunks/index-server.js";
import { H as escape_html, n as attr_class, o as ensure_array_like, s as head, u as stringify } from "../../../../../chunks/dev.js";
import "../../../../../chunks/toast.svelte.js";
import "../../../../../chunks/api.js";
//#region src/routes/(app)/admin/utilisateurs/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let users = [];
		let filtreRole = "";
		head("djz4ss", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Utilisateurs — Admin</title>`);
			});
		});
		$$renderer.push(`<div class="mb-5 flex items-center justify-between flex-wrap gap-3"><div><h2 class="font-display font-black text-2xl lg:text-3xl tracking-tight text-slate-900">Gestion des <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #b35d2e">utilisateurs</span>.</h2> <p class="text-sm text-slate-500 mt-1">${escape_html(users.length)} utilisateur${escape_html(users.length > 1 ? "s" : "")} au total.</p></div></div> <div class="flex gap-2 mb-4"><!--[-->`);
		const each_array = ensure_array_like([
			{
				value: "",
				label: "Tous"
			},
			{
				value: "client",
				label: "Clients"
			},
			{
				value: "entreprise",
				label: "Entreprises"
			}
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let f = each_array[$$index];
			$$renderer.push(`<button${attr_class(`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all border ${stringify(filtreRole === f.value ? "bg-brand-600 text-white border-brand-600" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300")}`)}>${escape_html(f.label)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden">`);
		{
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="p-5 space-y-3"><!--[-->`);
			const each_array_1 = ensure_array_like([
				1,
				2,
				3,
				4
			]);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				each_array_1[$$index_1];
				$$renderer.push(`<div class="skeleton h-14 rounded-xl"></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };
