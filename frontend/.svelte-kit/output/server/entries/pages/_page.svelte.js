import { n as onDestroy } from "../../chunks/index-server.js";
import { H as escape_html, V as attr, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../chunks/dev.js";
import "../../chunks/auth2.svelte.js";
import "../../chunks/navigation.js";
//#region src/routes/+page.svelte
function drop($$renderer, size, color = "#ffffff", opacity = 1) {
	$$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100"${attr_style(`opacity: ${stringify(opacity)}`)}><path d="M50 5 C50 5, 18 42, 18 65 C18 83, 33 95, 50 95 C67 95, 82 83, 82 65 C82 42, 50 5, 50 5 Z"${attr("fill", color)}></path></svg>`);
}
function drill($$renderer, size, color = "#ffffff", opacity = 1) {
	$$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100"${attr_style(`opacity: ${stringify(opacity)}`)}><path d="M30 5 L70 5 L62 25 L65 30 L60 35 L63 45 L58 50 L61 60 L56 65 L59 75 L54 80 L56 90 L44 90 L46 80 L41 75 L44 65 L39 60 L42 50 L37 45 L40 35 L35 30 L38 25 Z"${attr("fill", color)}></path></svg>`);
}
function layers($$renderer, size, color = "#ffffff", opacity = 1) {
	$$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100"${attr_style(`opacity: ${stringify(opacity)}`)}><ellipse cx="50" cy="20" rx="42" ry="10"${attr("fill", color)}></ellipse><path d="M8 20 L8 38 C8 44, 26 50, 50 50 C74 50, 92 44, 92 38 L92 20"${attr("fill", color)} opacity="0.85"></path><path d="M8 50 L8 68 C8 74, 26 80, 50 80 C74 80, 92 74, 92 68 L92 50"${attr("fill", color)} opacity="0.7"></path></svg>`);
}
function target($$renderer, size, color = "#ffffff", opacity = 1) {
	$$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100"${attr_style(`opacity: ${stringify(opacity)}`)} fill="none"${attr("stroke", color)} stroke-width="3"><circle cx="50" cy="50" r="42"></circle><circle cx="50" cy="50" r="28"></circle><circle cx="50" cy="50" r="14"></circle><circle cx="50" cy="50" r="3"${attr("fill", color)}></circle><line x1="50" y1="2" x2="50" y2="20"></line><line x1="50" y1="80" x2="50" y2="98"></line><line x1="2" y1="50" x2="20" y2="50"></line><line x1="80" y1="50" x2="98" y2="50"></line></svg>`);
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let mouseX = 0;
		let mouseY = 0;
		let scrollY = 0;
		function onMouseMove(e) {
			mouseX = (e.clientX / window.innerWidth - .5) * 2;
			mouseY = (e.clientY / window.innerHeight - .5) * 2;
		}
		function onScroll() {
			scrollY = window.scrollY;
		}
		onDestroy(() => {
			if (typeof window !== "undefined") {
				window.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("scroll", onScroll);
			}
		});
		function px(amp) {
			return `translate(${mouseX * amp}px, ${mouseY * amp}px)`;
		}
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>ForageCI — La plateforme de mise en relation pour le forage</title>`);
			});
			$$renderer.push(`<meta name="description" content="Soumettez votre projet de forage, comparez les offres des prestataires, signez en confiance."/>`);
		});
		$$renderer.push(`<div class="landing-root svelte-1uha8ag"><nav class="fixed top-0 inset-x-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-white/60 border-b border-slate-200/60"><a href="/" class="flex items-center gap-2.5 group"><div class="w-9 h-9 rounded-xl bg-brand flex items-center justify-center transition-transform group-hover:rotate-12"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 18px;">water_drop</span></div> <span class="font-display font-black text-xl tracking-tight text-slate-900">ForageCI</span></a> <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700"><a href="#process" class="hover:text-brand transition-colors">Comment ça marche</a> <a href="#acteurs" class="hover:text-brand transition-colors">Pour qui</a> <a href="#confiance" class="hover:text-brand transition-colors">Confiance</a></div> <div class="flex items-center gap-3">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<a href="/login" class="hidden sm:inline text-sm font-semibold text-slate-700 hover:text-brand transition-colors">Connexion</a> <a href="/register" class="px-5 py-2.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-sm">S'inscrire</a>`);
		$$renderer.push(`<!--]--></div></nav> <section class="relative min-h-screen flex items-center overflow-hidden bg-brand"><div class="absolute inset-0 pointer-events-none overflow-hidden"><div class="absolute top-[12%] right-[8%] animate-float-slow"${attr_style(`transform: ${stringify(px(30))} translateY(${stringify(scrollY * .3)}px)`)}>`);
		drop($$renderer, 140, "#ffffff", .6);
		$$renderer.push(`<!----></div> <div class="absolute top-[28%] right-[22%] animate-float-slower"${attr_style(`transform: ${stringify(px(20))} translateY(${stringify(scrollY * .5)}px)`)}>`);
		target($$renderer, 80, "#ffffff", .35);
		$$renderer.push(`<!----></div> <div class="absolute bottom-[18%] right-[14%] animate-float-slow"${attr_style(`transform: ${stringify(px(40))} translateY(${stringify(scrollY * .2)}px); animation-delay: -3s`)}>`);
		drill($$renderer, 110, "#ffffff", .4);
		$$renderer.push(`<!----></div> <div class="absolute top-[60%] left-[6%] animate-float-slower"${attr_style(`transform: ${stringify(px(25))} translateY(${stringify(scrollY * .35)}px)`)}>`);
		layers($$renderer, 80, "#d99c6f", .5);
		$$renderer.push(`<!----></div> <div class="absolute top-[20%] left-[12%] animate-float-slow"${attr_style(`transform: ${stringify(px(15))} translateY(${stringify(scrollY * .4)}px); animation-delay: -5s`)}>`);
		drop($$renderer, 50, "#d99c6f", .55);
		$$renderer.push(`<!----></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_50%)]"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_95%,rgba(179,93,46,0.18),transparent_45%)]"></div></div> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 w-full"><h1 class="font-display font-black text-white leading-[0.95] tracking-tight mb-8 animate-reveal-up" style="font-size: clamp(3rem, 9vw, 8rem); animation-delay: 0.1s">Le forage,<br/> <span class="italic font-light relative inline-block" style="font-family: 'Instrument Serif', 'Satoshi', serif; color: #e9c2a3">simplifié. <span class="absolute -bottom-2 left-0 right-0 h-1 rounded-full" style="background-color: #b35d2e"></span></span></h1> <p class="max-w-2xl text-lg lg:text-xl text-white/85 leading-relaxed mb-10 animate-reveal-up" style="animation-delay: 0.25s">Soumettez votre projet, recevez les meilleures offres de prestataires qualifiés, et signez en toute confiance — votre budget reste confidentiel.</p> <div class="flex flex-wrap gap-4 animate-reveal-up" style="animation-delay: 0.4s">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<a href="/register" class="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-brand font-bold text-base hover:bg-slate-100 transition-all shadow-xl">Soumettre une demande <span class="material-symbols-outlined icon-filled transition-transform group-hover:translate-x-1" style="font-size: 20px;">arrow_forward</span></a>`);
		$$renderer.push(`<!--]--> <a href="#process" class="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-transparent border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all">Découvrir le fonctionnement</a></div> <div class="mt-20 grid grid-cols-3 gap-6 max-w-2xl animate-reveal-up" style="animation-delay: 0.55s"><!--[-->`);
		const each_array = ensure_array_like([
			{
				value: "100%",
				label: "Budget protégé",
				accent: true
			},
			{
				value: "3",
				label: "Acteurs cloisonnés",
				accent: false
			},
			{
				value: "8",
				label: "Étapes contrôlées",
				accent: false
			}
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let stat = each_array[$$index];
			$$renderer.push(`<div class="pl-4 border-l-2"${attr_style(`border-color: ${stringify(stat.accent ? "#b35d2e" : "rgba(255,255,255,0.3)")}`)}><p class="font-display text-3xl lg:text-4xl font-black tracking-tight"${attr_style(`color: ${stringify(stat.accent ? "#e9c2a3" : "#ffffff")}`)}>${escape_html(stat.value)}</p> <p class="text-xs lg:text-sm mt-1"${attr_style(`color: ${stringify(stat.accent ? "rgba(233,194,163,0.85)" : "rgba(255,255,255,0.7)")}`)}>${escape_html(stat.label)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"><span class="text-[10px] font-semibold uppercase tracking-widest">Scroll</span> <div class="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div></div></section> <section class="bg-white py-8 border-y border-slate-200 overflow-hidden"><div class="flex gap-16 whitespace-nowrap animate-marquee"><!--[-->`);
		const each_array_1 = ensure_array_like(Array(2));
		for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
			each_array_1[$$index_2];
			$$renderer.push(`<!--[-->`);
			const each_array_2 = ensure_array_like([
				"Forage Eau",
				"Géotechnique",
				"Pétrolier",
				"Forage Eau",
				"Géotechnique",
				"Pétrolier",
				"Forage Eau",
				"Géotechnique"
			]);
			for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
				let type = each_array_2[$$index_1];
				$$renderer.push(`<span class="font-display font-black text-4xl lg:text-6xl text-slate-200 tracking-tight">${escape_html(type)} <span class="text-terre">●</span></span>`);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div></section> <section id="process" class="relative py-32 px-6 lg:px-12 bg-white overflow-hidden"><div class="absolute top-20 right-10 opacity-10"${attr_style(`transform: translateY(${stringify((scrollY - 800) * .15)}px)`)}>`);
		drill($$renderer, 300, "#1e3fff", 1);
		$$renderer.push(`<!----></div> <div class="absolute bottom-10 left-10 opacity-10"${attr_style(`transform: translateY(${stringify((scrollY - 1100) * .1)}px)`)}>`);
		layers($$renderer, 220, "#b35d2e", 1);
		$$renderer.push(`<!----></div> <div class="max-w-7xl mx-auto relative"><div class="mb-20 svelte-1uha8ag" data-reveal=""><p class="text-sm font-bold uppercase tracking-widest text-brand mb-4">Comment ça marche</p> <h2 class="font-display font-black text-slate-900 leading-[1] tracking-tight" style="font-size: clamp(2.5rem, 6vw, 5rem)">Trois étapes.<br/> <span class="text-slate-300">Zéro friction.</span></h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
		const each_array_3 = ensure_array_like([
			{
				num: "01",
				title: "Le client soumet",
				text: "Type de forage, localisation, budget confidentiel et délai souhaité. Téléversement de plans et rapports géologiques.",
				icon: "edit_document",
				accent: "brand"
			},
			{
				num: "02",
				title: "Les offres arrivent",
				text: "Des prestataires qualifiés étudient votre projet et soumettent leurs propositions techniques et tarifaires.",
				icon: "compare_arrows",
				accent: "terre"
			},
			{
				num: "03",
				title: "Le chantier démarre",
				text: "Le client accepte l'offre finale, les parties sont mises en relation officiellement et le chantier peut commencer.",
				icon: "rocket_launch",
				accent: "brand"
			}
		]);
		for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
			let step = each_array_3[i];
			$$renderer.push(`<div data-reveal="" class="step-card group relative bg-slate-50 rounded-3xl p-8 transition-all duration-500 svelte-1uha8ag"${attr("data-accent", step.accent)}${attr_style(`transition-delay: ${stringify(i * 80)}ms`)}><p class="step-num font-display font-black text-7xl text-slate-200 transition-colors mb-6 leading-none svelte-1uha8ag">${escape_html(step.num)}</p> <div class="step-icon-bg w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 transition-colors svelte-1uha8ag"><span class="step-icon material-symbols-outlined icon-filled transition-colors svelte-1uha8ag" style="font-size: 22px;">${escape_html(step.icon)}</span></div> <h3 class="step-title font-display font-bold text-2xl mb-3 tracking-tight text-slate-900 transition-colors svelte-1uha8ag">${escape_html(step.title)}</h3> <p class="step-text text-sm leading-relaxed text-slate-600 transition-colors svelte-1uha8ag">${escape_html(step.text)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section id="acteurs" class="relative py-32 px-6 lg:px-12 bg-slate-50 overflow-hidden"><div class="max-w-7xl mx-auto"><div class="mb-20 max-w-3xl svelte-1uha8ag" data-reveal=""><p class="text-sm font-bold uppercase tracking-widest text-brand mb-4">Pour qui</p> <h2 class="font-display font-black text-slate-900 leading-[1] tracking-tight" style="font-size: clamp(2.5rem, 6vw, 5rem)">Un espace dédié<br/> <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif">par acteur.</span></h2></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><!--[-->`);
		const each_array_4 = ensure_array_like([{
			label: "Client",
			title: "Particulier ou entreprise",
			bg: "bg-brand",
			txt: "text-white",
			features: [
				"Soumission rapide",
				"Budget confidentiel",
				"Suivi temps réel",
				"Acceptation en 1 clic"
			],
			cta: "Devenir client",
			href: "/register",
			ctaCls: "bg-white text-[#1e3fff] hover:bg-slate-100"
		}, {
			label: "Prestataire",
			title: "Entreprise de forage",
			bg: "bg-[#b35d2e]",
			txt: "text-white",
			features: [
				"Appels d'offres ciblés",
				"Soumission structurée",
				"Pas de mise en concurrence visible",
				"Notifications prioritaires"
			],
			cta: "S'inscrire en tant qu'entreprise",
			href: "/register-entreprise",
			ctaCls: "bg-white text-[#b35d2e] hover:bg-slate-100"
		}]);
		for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
			let acteur = each_array_4[i];
			$$renderer.push(`<div data-reveal=""${attr_class(`rounded-3xl p-8 lg:p-10 ${stringify(acteur.bg)} ${stringify(acteur.txt)} transition-all duration-500 hover:scale-[1.02]`, "svelte-1uha8ag")}${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><p class="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">${escape_html(acteur.label)}</p> <h3 class="font-display font-black text-3xl lg:text-4xl tracking-tight mb-8 leading-tight">${escape_html(acteur.title)}</h3> <ul class="space-y-3 mb-10"><!--[-->`);
			const each_array_5 = ensure_array_like(acteur.features);
			for (let $$index_4 = 0, $$length = each_array_5.length; $$index_4 < $$length; $$index_4++) {
				let f = each_array_5[$$index_4];
				$$renderer.push(`<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined icon-filled" style="font-size: 16px;">check_circle</span> ${escape_html(f)}</li>`);
			}
			$$renderer.push(`<!--]--></ul> `);
			if (acteur.cta && acteur.href) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<a${attr("href", acteur.href)}${attr_class(`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${stringify(acteur.ctaCls)}`, "svelte-1uha8ag")}>${escape_html(acteur.cta)} <span class="material-symbols-outlined icon-filled" style="font-size: 16px;">arrow_forward</span></a>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<p class="text-sm opacity-70 italic">Accès sur invitation uniquement</p>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section id="confiance" class="relative py-32 px-6 lg:px-12 bg-slate-900 text-white overflow-hidden"><div class="absolute -bottom-32 -right-32 opacity-25"${attr_style(`transform: rotate(${stringify(scrollY * .05)}deg)`)}>`);
		target($$renderer, 500, "#1e3fff", 1);
		$$renderer.push(`<!----></div> <div class="absolute top-10 -left-10 opacity-15"${attr_style(`transform: translateY(${stringify((scrollY - 1800) * .1)}px)`)}>`);
		drop($$renderer, 180, "#b35d2e", 1);
		$$renderer.push(`<!----></div> <div class="max-w-7xl mx-auto relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div data-reveal="" class="svelte-1uha8ag"><p class="text-sm font-bold uppercase tracking-widest text-brand-400 mb-4">Confiance &amp; confidentialité</p> <h2 class="font-display font-black leading-[1] tracking-tight mb-8" style="font-size: clamp(2.5rem, 5vw, 4rem)">Un cloisonnement<br/>strict, par design.</h2> <p class="text-lg text-slate-300 leading-relaxed">Le budget du client n'est jamais visible des entreprises. Les offres sont masquées entre prestataires. Toutes les communications sont centralisées et sécurisées par la plateforme.</p></div> <div data-reveal="" class="space-y-4 svelte-1uha8ag"><!--[-->`);
		const each_array_6 = ensure_array_like([
			{
				icon: "lock",
				title: "Budget confidentiel",
				text: "Jamais communiqué aux prestataires.",
				color: "#b35d2e"
			},
			{
				icon: "shield",
				title: "Pas d'enchères visibles",
				text: "Les offres entreprises sont cloisonnées.",
				color: "#1e3fff"
			},
			{
				icon: "forum",
				title: "Messagerie centralisée",
				text: "Toutes les communications transitent par la plateforme.",
				color: "#b35d2e"
			},
			{
				icon: "task_alt",
				title: "Workflow contrôlé",
				text: "Aucune transition de statut hors séquence.",
				color: "#1e3fff"
			}
		]);
		for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
			let item = each_array_6[$$index_6];
			$$renderer.push(`<div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"><div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"${attr_style(`background-color: ${stringify(item.color)}`)}><span class="material-symbols-outlined text-white icon-filled" style="font-size: 20px;">${escape_html(item.icon)}</span></div> <div><h4 class="font-display font-bold text-lg mb-1">${escape_html(item.title)}</h4> <p class="text-sm text-slate-400">${escape_html(item.text)}</p></div></div>`);
		}
		$$renderer.push(`<!--]--></div></div></div></section> <section class="relative bg-brand py-32 px-6 lg:px-12 overflow-hidden"><div class="absolute top-10 left-10 animate-float-slow">`);
		drop($$renderer, 120, "#ffffff", .25);
		$$renderer.push(`<!----></div> <div class="absolute bottom-10 right-10 animate-float-slower">`);
		drill($$renderer, 100, "#ffffff", .3);
		$$renderer.push(`<!----></div> <div class="absolute top-1/2 right-1/4 animate-float-slow" style="animation-delay: -4s">`);
		layers($$renderer, 70, "#fbf3ec", .35);
		$$renderer.push(`<!----></div> <div class="max-w-4xl mx-auto text-center text-white relative svelte-1uha8ag" data-reveal=""><h2 class="font-display font-black leading-[0.95] tracking-tight mb-8" style="font-size: clamp(2.5rem, 7vw, 6rem)">Prêt à forer<br/> <span class="italic font-light" style="font-family: 'Instrument Serif', 'Satoshi', serif">en confiance ?</span></h2> <p class="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-10">Créez votre compte en quelques secondes. La première demande est gratuite.</p> <div class="flex flex-wrap gap-4 justify-center">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<a href="/register" class="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand font-bold text-base hover:bg-slate-100 transition-all shadow-xl">Créer un compte client <span class="material-symbols-outlined icon-filled transition-transform group-hover:translate-x-1" style="font-size: 20px;">arrow_forward</span></a> <a href="/register-entreprise" class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-transparent border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all">Je suis une entreprise</a>`);
		$$renderer.push(`<!--]--></div></div></section> <footer class="bg-slate-950 text-slate-400 py-12 px-6 lg:px-12"><div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-lg bg-brand flex items-center justify-center"><span class="material-symbols-outlined text-white icon-filled" style="font-size: 16px;">water_drop</span></div> <span class="font-display font-black text-lg text-white tracking-tight">ForageCI</span></div> <p class="text-xs">© 2025 ForageCI · Plateforme de mise en relation pour prestations de forage</p></div></footer></div>`);
	});
}
//#endregion
export { _page as default };
