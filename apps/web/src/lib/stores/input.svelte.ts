import { MODEL_CATALOG } from '@app/shared';

export type AttachedFile = {
    file: File;
    base64: string;
};

class InputStore {
    model = $state(MODEL_CATALOG[0].id);
    webSearchEnabled = $state(false);
    attachedFiles = $state<AttachedFile[]>([]);
    text = $state('');

    reset() {
        this.model = MODEL_CATALOG[0].id;
        this.webSearchEnabled = false;
        this.attachedFiles = [];
        this.text = '';
    }

    setModel(modelId: typeof MODEL_CATALOG[number]["id"]) {
        this.model = modelId;
    }

    clear() {
        this.model = MODEL_CATALOG[0].id;
        this.webSearchEnabled = false;
        this.attachedFiles = [];
        this.text = '';
    }
}

export const inputState = new InputStore();