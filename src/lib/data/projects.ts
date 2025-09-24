import PantryTracker from '$assets/img/pantrytracker.png';
import Viewer from '$assets/img/3dviewer.png';

export type Project = {
	title: string;
	description: string;
	image?: string;
	link: string;
};

export const projects: Array<Project> = [
	{
		title: 'SL-Widget',
		description: 'An android application that provides the user with a simple to use widget for quickly seeing the coming departures from an SL stop location.',
		link: 'https://github.com/felixwidstrom/SL-Widget'
	},
	{
		title: '3D Viewer',
		description: 'A web-based 3D model viewer. Currently supports .obj files.',
		image: Viewer,
		link: 'https://felixwidstrom.github.io/3D-Viewer'
	},
	{
		title: 'Pantry Tracker',
		description: 'An application that helps users keep track of their pantry items and their expiration dates.',
		image: PantryTracker,
		link: 'https://felixwidstrom.github.io/Pantry-Tracker'
	},
];
