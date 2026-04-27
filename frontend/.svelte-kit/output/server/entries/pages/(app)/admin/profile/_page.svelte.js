import { s as head } from "../../../../../chunks/dev.js";
import { t as ProfilePage } from "../../../../../chunks/ProfilePage.js";
//#region src/routes/(app)/admin/profile/+page.svelte
function _page($$renderer) {
	head("aky0tj", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Mon profil — Admin</title>`);
		});
	});
	ProfilePage($$renderer, {});
}
//#endregion
export { _page as default };
