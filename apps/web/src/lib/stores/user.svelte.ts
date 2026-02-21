import { API_BASE } from '$lib/constants';

export type Plan = "free" | "paid";

export const PLAN_LIMITS = {
    free: {
        standard: 20,
        premium: 0
    },
    paid: {
        standard: 1500,
        premium: 100
    }
} as const;

export type SubscriptionData = {
    user_id: string;
    subscription: Plan;
    standard: number;
    premium: number;
    last_reset_at: string;
    next_reset_at: string;
};

export type UserProfile = {
    name: string;
    occupation: string;
    traits: string[];
    other: string;
};

class UserStore {
    subscription = $state<SubscriptionData | null>(null);
    profile = $state<UserProfile>({
        name: '',
        occupation: '',
        traits: [],
        other: ''
    });

    async fetchSubscription() {
        try {
            const response = await fetch(`${API_BASE}/api/subscription/getSubscriptionData`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to get subscription data');
            }

            const data = await response.json();
            this.subscription = data;
        } catch (error) {
            console.error('Error getting subscription data:', error);
        }
    }

    async fetchProfile() {
        try {
            const response = await fetch(`${API_BASE}/api/profile`, {
                credentials: 'include'
            });
            if (response.ok) {
                this.profile = await response.json();
            }
        } catch (error) {
            console.error('Error getting profile:', error);
        }
    }

    async updateProfile(profile: UserProfile) {
        try {
            const response = await fetch(`${API_BASE}/api/profile`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profile)
            });
            if (response.ok) {
                this.profile = profile;
            } else {
                throw new Error("Failed to update");
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    }
}

export const userState = new UserStore();