import { n as onDestroy } from "../../../chunks/index-server.js";
import { H as escape_html, V as attr, a as derived, d as unsubscribe_stores, i as bind_props, l as store_get, n as attr_class, o as ensure_array_like, r as attr_style, u as stringify } from "../../../chunks/dev.js";
import { t as auth } from "../../../chunks/auth2.svelte.js";
/* empty css                  */
import "../../../chunks/client.js";
import "../../../chunks/navigation.js";
import { t as page } from "../../../chunks/stores.js";
import "../../../chunks/toast.svelte.js";
import "../../../chunks/api.js";
import { t as msgStore } from "../../../chunks/messages.svelte.js";
import { t as notifStore } from "../../../chunks/notifications.svelte.js";
import { t as Toast } from "../../../chunks/Toast.js";
//#region src/lib/components/layout/Sidebar.svelte
function Sidebar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { collapsed = false } = $$props;
		const role = derived(() => auth.user?.role);
		let isMobile = false;
		function checkViewport() {
			if (typeof window !== "undefined") isMobile = window.innerWidth < 1024;
		}
		onDestroy(() => {
			if (typeof window !== "undefined") window.removeEventListener("resize", checkViewport);
		});
		const navItems = derived(() => () => {
			if (role() === "admin") return [
				{
					href: "/admin/dashboard",
					icon: "grid_view",
					label: "Tableau de bord",
					badge: 0
				},
				{
					href: "/admin/demandes",
					icon: "assignment",
					label: "Demandes",
					badge: 0
				},
				{
					href: "/admin/appels-offres",
					icon: "campaign",
					label: "Appels d'offres",
					badge: 0
				},
				{
					href: "/admin/offres",
					icon: "description",
					label: "Offres",
					badge: 0
				},
				{
					href: "/admin/utilisateurs",
					icon: "group",
					label: "Utilisateurs",
					badge: 0
				},
				{
					href: "/admin/messages",
					icon: "chat_bubble",
					label: "Messages",
					badge: msgStore.unreadCount
				},
				{
					href: "/admin/notifications",
					icon: "notifications",
					label: "Notifications",
					badge: notifStore.count
				}
			];
			if (role() === "entreprise") return [
				{
					href: "/entreprise/dashboard",
					icon: "grid_view",
					label: "Tableau de bord",
					badge: 0
				},
				{
					href: "/entreprise/appels-offres",
					icon: "campaign",
					label: "Appels d'offres",
					badge: 0
				},
				{
					href: "/entreprise/mes-offres",
					icon: "description",
					label: "Mes offres",
					badge: 0
				},
				{
					href: "/entreprise/messages",
					icon: "chat_bubble",
					label: "Messages",
					badge: msgStore.unreadCount
				},
				{
					href: "/entreprise/notifications",
					icon: "notifications",
					label: "Notifications",
					badge: notifStore.count
				}
			];
			return [
				{
					href: "/client/dashboard",
					icon: "grid_view",
					label: "Tableau de bord",
					badge: 0
				},
				{
					href: "/client/demandes",
					icon: "assignment",
					label: "Mes demandes",
					badge: 0
				},
				{
					href: "/client/offres",
					icon: "description",
					label: "Mes offres",
					badge: 0
				},
				{
					href: "/client/demandes/new",
					icon: "add_circle",
					label: "Nouvelle demande",
					badge: 0
				},
				{
					href: "/client/messages",
					icon: "chat_bubble",
					label: "Messages",
					badge: msgStore.unreadCount
				},
				{
					href: "/client/notifications",
					icon: "notifications",
					label: "Notifications",
					badge: notifStore.count
				}
			];
		});
		function isActive(href) {
			return store_get($$store_subs ??= {}, "$page", page).url.pathname === href || store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith(href + "/");
		}
		$$renderer.push(`<aside class="fixed left-0 top-0 h-full z-40 flex flex-col transition-all duration-300 bg-white border-r border-slate-200"${attr_style(` width: ${stringify(collapsed && !isMobile ? "64px" : "240px")}; transform: translateX(${stringify(isMobile && collapsed ? "-100%" : "0")}); `)}><div class="flex items-center gap-2.5 px-4 py-5 border-b border-slate-100"><div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background-color: #1e3fff"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 18px;">water_drop</span></div> `);
		if (!collapsed) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="overflow-hidden flex-1"><span class="font-display font-black text-lg tracking-tight text-slate-900 whitespace-nowrap">ForageCI</span></div> `);
			if (isMobile) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button type="button" class="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all text-slate-500 shrink-0" aria-label="Fermer le menu"><span class="material-symbols-outlined" style="font-size: 20px;">close</span></button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <nav class="flex-1 px-2 py-4 space-y-1 overflow-y-auto"><!--[-->`);
		const each_array = ensure_array_like(navItems()());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<a${attr("href", item.href)}${attr_class("sidebar-link group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all relative font-medium svelte-6dohdz", void 0, { "is-active": isActive(item.href) })}${attr("title", collapsed ? item.label : "")}><div class="relative shrink-0"><span class="material-symbols-outlined icon-filled" style="font-size: 20px;">${escape_html(item.icon)}</span> `);
			if (item.badge > 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center px-1" style="background-color: #b35d2e">${escape_html(item.badge > 99 ? "99+" : item.badge)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> `);
			if (!collapsed) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="text-sm whitespace-nowrap flex-1">${escape_html(item.label)}</span> `);
				if (item.badge > 0) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<span class="text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center" style="background-color: #b35d2e">${escape_html(item.badge > 99 ? "99+" : item.badge)}</span>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></a>`);
		}
		$$renderer.push(`<!--]--></nav> <div class="border-t border-slate-100 p-2 space-y-1"><a${attr("href", `/${stringify(role())}/profile`)} class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"${attr("title", collapsed ? "Profil" : "")}><div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold" style="background-color: #1e3fff">${escape_html(auth.user?.initials ?? "?")}</div> `);
		if (!collapsed) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="overflow-hidden flex-1 min-w-0"><p class="text-slate-800 text-sm font-semibold truncate leading-none">${escape_html(auth.user?.fullName ?? auth.user?.email ?? "Utilisateur")}</p> <p class="text-slate-400 text-xs capitalize mt-1">${escape_html(auth.user?.role)}</p></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></a> <button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all"${attr("title", collapsed ? "Déconnexion" : "")}><span class="material-symbols-outlined shrink-0" style="font-size: 20px;">logout</span> `);
		if (!collapsed) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-sm font-medium">Déconnexion</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></button></div></aside>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { collapsed });
	});
}
//#endregion
//#region src/lib/components/layout/Header.svelte
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { onToggleSidebar } = $$props;
		const pageTitle = derived(() => () => {
			const path = store_get($$store_subs ??= {}, "$page", page).url.pathname;
			if (path.includes("dashboard")) return "Tableau de bord";
			if (path.includes("demandes/new")) return "Nouvelle demande";
			if (path.includes("demandes")) return "Demandes";
			if (path.includes("appels-offres")) return "Appels d'offres";
			if (path.includes("mes-offres")) return "Mes offres";
			if (path.includes("utilisateurs")) return "Utilisateurs";
			if (path.includes("messages")) return "Messages";
			if (path.includes("notifications")) return "Notifications";
			if (path.includes("comparatif")) return "Comparatif des offres";
			if (path.includes("offre-finale")) return "Offre finale";
			return "ForageCI";
		});
		$$renderer.push(`<header class="sticky top-0 z-30 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><button class="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all text-slate-600"><span class="material-symbols-outlined" style="font-size: 20px;">menu</span></button> <h1 class="font-display font-bold text-lg tracking-tight text-slate-900">${escape_html(pageTitle()())}</h1></div> <div class="flex items-center gap-1"><div class="relative"><button class="relative w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all text-slate-600"><span class="material-symbols-outlined icon-filled" style="font-size: 20px;">notifications</span> `);
		if (notifStore.count > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="absolute top-1 right-1 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center" style="background-color: #b35d2e">${escape_html(notifStore.count > 9 ? "9+" : notifStore.count)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <a${attr("href", `/${stringify(auth.user?.role)}/profile`)} class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-all ml-1"><div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">${escape_html(auth.user?.initials ?? "?")}</div> <div class="hidden sm:block"><p class="text-sm font-semibold text-slate-800 leading-none">${escape_html(auth.user?.fullName?.split(" ")[0] ?? "Profil")}</p></div></a></div></header>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/(app)/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		let collapsed = false;
		let isMobile = false;
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		function checkViewport() {
			const mobile = window.innerWidth < 1024;
			isMobile = mobile;
			if (mobile) collapsed = true;
		}
		onDestroy(() => {
			if (typeof window !== "undefined") window.removeEventListener("resize", checkViewport);
		});
		const sidebarWidth = derived(() => collapsed ? 64 : 240);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Toast($$renderer, {});
			$$renderer.push(`<!----> <div class="flex h-screen overflow-hidden bg-slate-50">`);
			Sidebar($$renderer, {
				get collapsed() {
					return collapsed;
				},
				set collapsed($$value) {
					collapsed = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			if (isMobile && !collapsed) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button class="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden" aria-label="Fermer le menu"></button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div class="flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300 min-w-0"${attr_style(`margin-left: ${stringify(isMobile ? 0 : sidebarWidth())}px;`)}>`);
			Header($$renderer, { onToggleSidebar: () => collapsed = !collapsed });
			$$renderer.push(`<!----> <main class="flex-1 overflow-y-auto p-4 lg:p-6"><div class="animate-fade-in-up max-w-7xl mx-auto min-w-0">`);
			children($$renderer);
			$$renderer.push(`<!----></div></main> <footer class="shrink-0 px-4 lg:px-6 py-3 text-center text-xs text-slate-400 border-t border-slate-100 bg-white">© ${escape_html(year)} ForageCI — Plateforme de mise en relation pour prestations de forage</footer></div></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _layout as default };
