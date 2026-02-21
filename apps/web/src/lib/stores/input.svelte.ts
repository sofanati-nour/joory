export type AttachedFile = {
    file: File;
    base64: string;
};

class InputStore {
    model = $state('google/gemini-3-flash-preview');
    webSearchEnabled = $state(false);
    attachedFiles = $state<AttachedFile[]>([]);
    text = $state('');

    reset() {
        this.model = 'google/gemini-3-flash-preview';
        this.webSearchEnabled = false;
        this.attachedFiles = [];
        this.text = '';
    }
}

export const inputState = new InputStore();