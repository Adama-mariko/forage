import { H as escape_html, V as attr, n as attr_class, s as head } from "../../../../chunks/dev.js";
import "../../../../chunks/auth2.svelte.js";
import "../../../../chunks/navigation.js";
import "../../../../chunks/toast.svelte.js";
import "../../../../chunks/api.js";
//#region src/routes/(auth)/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let password = "";
		let loading = false;
		let errors = {};
		head("8k30lk", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Connexion — ForageCI</title>`);
			});
		});
		$$renderer.push(`<div class="lg:hidden flex items-center gap-2.5 mb-10"><div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background-color: #1e3fff"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 20px;">water_drop</span></div> <span class="font-display font-black text-xl tracking-tight text-slate-900">ForageCI</span></div> <div class="mb-8"><h2 class="font-display font-black text-4xl tracking-tight leading-[1.05] text-slate-900">Bienvenue.</h2> <p class="text-slate-500 mt-3 text-base">Connectez-vous à votre espace ForageCI.</p></div> <form class="space-y-5"><div><label class="block text-sm font-medium text-slate-700 mb-1.5" for="email">Adresse email</label> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">mail</span> <input id="email" type="email"${attr("value", email)} placeholder="Entrez votre adresse email" required=""${attr_class("w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm transition-all", void 0, { "border-red-400": errors.email })}/></div> `);
		if (errors.email) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.email)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><div class="flex items-center justify-between mb-1.5"><label class="block text-sm font-medium text-slate-700" for="password">Mot de passe</label></div> <div class="relative"><span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" style="font-size: 20px;">lock</span> <input id="password"${attr("type", "password")}${attr("value", password)} placeholder="••••••••" required=""${attr_class("w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm transition-all", void 0, { "border-red-400": errors.password })}/> <button type="button" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">${escape_html("visibility")}</span></button></div> `);
		if (errors.password) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-red-500 text-xs mt-1">${escape_html(errors.password)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <button type="submit"${attr("disabled", loading, true)} class="w-full py-4 rounded-2xl bg-brand-600 text-white font-semibold text-sm shadow-xl hover:bg-brand-700 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="material-symbols-outlined icon-filled" style="font-size: 18px;">arrow_forward</span> Se connecter`);
		$$renderer.push(`<!--]--></button></form> <div class="mt-8 pt-6 border-t border-slate-100 text-center space-y-2"><p class="text-sm text-slate-500">Pas encore de compte ? <a href="/register" class="text-brand-600 font-semibold hover:text-brand-700">Créer un compte client</a></p> <p class="text-sm text-slate-500">Vous êtes une entreprise ? <a href="/register-entreprise" class="font-semibold hover:underline" style="color: #b35d2e">Inscription entreprise</a></p></div>`);
	});
}
//#endregion
export { _page as default };
