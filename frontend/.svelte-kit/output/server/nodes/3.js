

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(auth)/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/(auth)/+layout.ts";
export const imports = ["_app/immutable/nodes/3.ClKpu3ry.js","_app/immutable/chunks/BW-YItiJ.js","_app/immutable/chunks/CjXYZWpW.js","_app/immutable/chunks/idVUOa82.js","_app/immutable/chunks/CyRdwvei.js","_app/immutable/chunks/BpXb_HE3.js"];
export const stylesheets = ["_app/immutable/assets/app.BL5eLVA8.css"];
export const fonts = [];
