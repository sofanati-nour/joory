import { API_BASE } from '$lib/constants';

export type Chat = {
    id: string;
    title: string | null;
    updated_at?: string;
    pinned: boolean;
};

type GroupedChats = {
    pinned: Chat[];
    today: Chat[];
    yesterday: Chat[];
    lastWeek: Chat[];
    older: Chat[];
};

class ChatStore {
    chats = $state<Chat[]>([]);
    isLoading = $state(false);
    error = $state<string | null>(null);

    async fetchChats(token?: string) {
        this.isLoading = true;
        this.error = null;
        try {
            const headers: HeadersInit = {
                'Content-Type': 'application/json',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await fetch(`${API_BASE}/api/chats`, {
                method: "POST",
                credentials: 'include',
                headers
            });

            if (!response.ok) {
                throw new Error('Failed to get chats');
            }

            const data = await response.json();
            // Map is_pinned (backend) to pinned (frontend)
            this.chats = data.map((c: any) => ({ 
                ...c, 
                pinned: c.is_pinned ?? false 
            }));
        } catch (e) {
            console.error(e);
            this.error = "Failed to load history";
        } finally {
            this.isLoading = false;
        }
    }

    appendChat(chat: Chat) {
        const newChat = {
            ...chat,
            pinned: false,
            updated_at: chat.updated_at || new Date().toISOString()
        };
        this.chats = [newChat, ...this.chats];
    }

    async deleteChat(chatId: string) {
        const previousChats = this.chats;
        this.chats = this.chats.filter(c => c.id !== chatId);

        try {
            const response = await fetch(`${API_BASE}/api/chats/${chatId}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            
            if (!response.ok) throw new Error('Failed to delete');
        } catch (e) {
            console.error(e);
            this.chats = previousChats;
        }
    }
    
    updateTitle(chatId: string, title: string) {
        const chat = this.chats.find(c => c.id === chatId);
        if (chat) {
            chat.title = title;
        }
    }

    async togglePin(chatId: string) {
        const chat = this.chats.find(c => c.id === chatId);
        if (!chat) return;

        const originalState = chat.pinned;
        chat.pinned = !originalState;

        try {
            const response = await fetch(`${API_BASE}/api/chats/${chatId}/pin`, {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_pinned: chat.pinned })
            });

            if (!response.ok) throw new Error("Failed to toggle pin");
        } catch (e) {
            console.error(e);
            chat.pinned = originalState; // Revert
        }
    }

    get grouped() {
        const groups: GroupedChats = {
            pinned: [],
            today: [],
            yesterday: [],
            lastWeek: [],
            older: []
        };

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 7);

        // Sort by date desc (assuming API might not)
        const sortedChats = [...this.chats].sort((a, b) => {
            const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
            const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
            return dateB - dateA;
        });

        for (const chat of sortedChats) {
            if (chat.pinned) {
                groups.pinned.push(chat);
                continue;
            }

            if (!chat.updated_at) {
                groups.older.push(chat);
                continue;
            }

            const chatDate = new Date(chat.updated_at);
            const chatDay = new Date(chatDate.getFullYear(), chatDate.getMonth(), chatDate.getDate());

            if (chatDay.getTime() === today.getTime()) {
                groups.today.push(chat);
            } else if (chatDay.getTime() === yesterday.getTime()) {
                groups.yesterday.push(chat);
            } else if (chatDay > lastWeek) {
                groups.lastWeek.push(chat);
            } else {
                groups.older.push(chat);
            }
        }

        return groups;
    }
}

export const chatState = new ChatStore();