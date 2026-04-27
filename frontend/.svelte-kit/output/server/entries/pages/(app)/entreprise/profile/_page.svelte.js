import { s as head } from "../../../../../chunks/dev.js";
import { t as ProfilePage } from "../../../../../chunks/ProfilePage.js";
//#region src/routes/(app)/entreprise/profile/+page.svelte
function _page($$renderer) {
	head("1qfaee1", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Mon profil — ForageCI</title>`);
		});
	});
	ProfilePage($$renderer, {});
}
//#endregion
export { _page as default };
