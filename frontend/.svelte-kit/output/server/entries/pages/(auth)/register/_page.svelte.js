import { H as escape_html, V as attr, n as attr_class, s as head } from "../../../../chunks/dev.js";
import "../../../../chunks/navigation.js";
import "../../../../chunks/toast.svelte.js";
import "../../../../chunks/api.js";
//#region src/routes/(auth)/register/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let fullName = "";
		let email = "";
		let telephone = "";
		let userType = "particulier";
		let password = "";
		let passwordConfirmation = "";
		let loading = false;
		let errors = {};
		head("ydeots", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Inscription — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="lg:hidden flex items-center gap-2.5 mb-10"><div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background-color: #1e3fff"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 20px;">water_drop</span></div> <span class="font-display font-black text-xl tracking-tight text-slate-900">ForageCI</span></div> <div class="mb-8"><h2 class="font-display font-black text-4xl tracking-tight leading-[1.05] text-slate-900">Créer un compte.</h2> <p class="text-slate-500 mt-3 text-base">Rejoignez la plateforme ForageCI.</p></div> <form class="space-y-4"><div><label class="block text-sm font-medium text-slate-700 mb-1.5">Nom complet</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">person</span> <input type="text"${attr("value", fullName)} placeholder="Jean Dupont" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.fullName })}/></div> `);
		if (errors.fullName) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.fullName)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Email</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">mail</span> <input type="email"${attr("value", email)} placeholder="Votre adresse email" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.email })}/></div> `);
		if (errors.email) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.email)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="grid grid-cols-2 gap-3"><div><label class="block text-sm font-medium text-slate-700 mb-1.5">Téléphone</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">phone</span> <input type="tel"${attr("value", telephone)} placeholder="0700000000" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.telephone })}/></div> `);
		if (errors.telephone) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.telephone)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Type</label> `);
		$$renderer.select({
			value: userType,
			class: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all"
		}, ($$renderer) => {
			$$renderer.option({ value: "particulier" }, ($$renderer) => {
				$$renderer.push(`Particulier`);
			});
			$$renderer.option({ value: "entreprise" }, ($$renderer) => {
				$$renderer.push(`Entreprise`);
			});
		});
		$$renderer.push(`</div></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Mot de passe</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">lock</span> <input${attr("type", "password")}${attr("value", password)} placeholder="Min. 6 caractères" required=""${attr_class("w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.password })}/> <button type="button" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">${escape_html("visibility")}</span></button></div> `);
		if (errors.password) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.password)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><label class="block text-sm font-medium text-slate-700 mb-1.5">Confirmer le mot de passe</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">lock_reset</span> <input${attr("type", "password")}${attr("value", passwordConfirmation)} placeholder="••••••••" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all", void 0, { "border-red-400": errors.passwordConfirmation })}/></div> `);
		if (errors.passwordConfirmation) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.passwordConfirmation)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <button type="submit"${attr("disabled", loading, true)} class="w-full py-4 rounded-2xl bg-brand-600 text-white font-semibold text-sm shadow-xl hover:bg-brand-700 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">arrow_forward</span> Créer mon compte`);
		$$renderer.push(`<!--]--></button></form> <p class="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">Déjà un compte ? <a href="/login" class="text-brand-600 font-semibold hover:text-brand-700">Se connecter</a></p>`);
	});
}
//#endregion
export { _page as default };
