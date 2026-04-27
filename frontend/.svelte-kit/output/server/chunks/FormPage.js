import { n as attr_class, u as stringify } from "./dev.js";
//#region src/lib/components/layout/FormPage.svelte
function FormPage($$renderer, $$props) {
	let { maxWidth = "max-w-2xl", children } = $$props;
	$$renderer.push(`<div class="min-h-[calc(100vh-140px)] flex items-start justify-center py-6"><div${attr_class(`w-full ${stringify(maxWidth)} animate-fade-in-up`)}>`);
	children($$renderer);
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { FormPage as t };
