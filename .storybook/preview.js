import { ShopkeepThemeProvider } from '../src/lib';
import Background from './Background.svelte';

export const decorators = [
	(_, context) => {
		const { mode } = context.parameters;
		return { Component: Background, props: { mode: mode || context.globals.mode } };
	},
	(_, context) => {
		const { theme } = context.parameters;
		return { Component: ShopkeepThemeProvider, props: { theme: theme || context.globals.theme } };
	}
];
export const globalTypes = {
	mode: {
		name: 'Mode',
		description: 'Global dark or light mode for backgrounds',
		defaultValue: 'light',
		toolbar: {
			// The icon for the toolbar item
			icon: 'circlehollow',
			// Array of options
			items: [
				{ value: 'light', icon: 'circlehollow', title: 'light' },
				{ value: 'dark', icon: 'circle', title: 'dark' }
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
			dynamicTitle: true
		}
	},
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'purple',
		toolbar: {
			// The icon for the toolbar item
			icon: 'contrast',
			// Array of options
			items: [
				{ value: 'purple', left: '🟣', title: 'purple' },
				{ value: 'green', left: '🟢', title: 'green' },
				{ value: 'orange', left: '🟠', title: 'orange' },
				{ value: 'teal', left: '🟢🔵', title: 'teal' }
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
			dynamicTitle: true
		}
	}
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
