

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/(app)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.C2d4dYi1.js","_app/immutable/chunks/BW-YItiJ.js","_app/immutable/chunks/eN8qXv6p.js","_app/immutable/chunks/CjXYZWpW.js","_app/immutable/chunks/B5UXceTM.js","_app/immutable/chunks/3KCg4Z3b.js","_app/immutable/chunks/WwOH8mbe.js","_app/immutable/chunks/7mtxT5Py.js","_app/immutable/chunks/BpXb_HE3.js","_app/immutable/chunks/idVUOa82.js","_app/immutable/chunks/CyRdwvei.js","_app/immutable/chunks/D5__F-cQ.js","_app/immutable/chunks/B5WQhdW8.js","_app/immutable/chunks/D_vk1BoJ.js"];
export const stylesheets = ["_app/immutable/assets/2.BZCD9MpF.css","_app/immutable/assets/app.BL5eLVA8.css"];
export const fonts = [];
