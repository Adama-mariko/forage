import "../../chunks/index-server.js";
import "../../chunks/dev.js";
import "../../chunks/auth2.svelte.js";
/* empty css               */
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		children($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _layout as default };
