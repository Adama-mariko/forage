import { s as head } from "../../../../../chunks/dev.js";
import { t as ProfilePage } from "../../../../../chunks/ProfilePage.js";
//#region src/routes/(app)/client/profile/+page.svelte
function _page($$renderer) {
	head("1t3l7m3", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Mon profil — ForageCI</title>`);
		});
	});
	ProfilePage($$renderer, {});
}
//#endregion
export { _page as default };
