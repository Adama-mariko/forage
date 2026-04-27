export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/(app)/admin/appels-offres": [5,[2]],
		"/(app)/admin/appels-offres/new": [7,[2]],
		"/(app)/admin/appels-offres/[id]/comparatif": [6,[2]],
		"/(app)/admin/dashboard": [8,[2]],
		"/(app)/admin/demandes": [9,[2]],
		"/(app)/admin/demandes/[id]": [10,[2]],
		"/(app)/admin/demandes/[id]/offre-finale": [11,[2]],
		"/(app)/admin/messages": [12,[2]],
		"/(app)/admin/notifications": [13,[2]],
		"/(app)/admin/notifications/parametres": [14,[2]],
		"/(app)/admin/offres": [15,[2]],
		"/(app)/admin/profile": [16,[2]],
		"/(app)/admin/utilisateurs": [17,[2]],
		"/(app)/admin/utilisateurs/[id]": [18,[2]],
		"/(app)/client/dashboard": [19,[2]],
		"/(app)/client/demandes": [20,[2]],
		"/(app)/client/demandes/new": [22,[2]],
		"/(app)/client/demandes/[id]": [21,[2]],
		"/(app)/client/messages": [23,[2]],
		"/(app)/client/notifications": [24,[2]],
		"/(app)/client/offres": [25,[2]],
		"/(app)/client/profile": [26,[2]],
		"/(app)/entreprise/appels-offres": [27,[2]],
		"/(app)/entreprise/appels-offres/[id]": [28,[2]],
		"/(app)/entreprise/dashboard": [29,[2]],
		"/(app)/entreprise/mes-offres": [30,[2]],
		"/(app)/entreprise/messages": [31,[2]],
		"/(app)/entreprise/notifications": [32,[2]],
		"/(app)/entreprise/profile": [33,[2]],
		"/(auth)/login": [34,[3]],
		"/(auth)/register-entreprise": [36,[3]],
		"/(auth)/register": [35,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';