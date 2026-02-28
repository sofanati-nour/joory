import { readable } from 'svelte/store';
import { MODEL_CATALOG } from '@app/shared';
export type { Model } from '@app/shared';

export const models = readable(MODEL_CATALOG);
