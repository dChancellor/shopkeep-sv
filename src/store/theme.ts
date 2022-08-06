import { writable, type Writable } from 'svelte/store';
import type { ThemeColors } from '../types';
import {
  purple, green, teal, orange } from '../themes/index';

const colors: ThemeColors = {
  purple,
	green,
	teal,
	orange
};

export const colorStore = writable(colors);
export const darkOrLightMode: Writable<'dark' | 'light'> = writable('dark');
