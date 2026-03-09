import { API_BASE } from '$lib/constants';
import type { Tier, UsageStatus } from '@app/shared';
import { TIER_CONFIG } from '@app/shared';

export type UserProfile = {
	name: string;
	occupation: string;
	traits: string[];
	other: string;
};

class UserStore {
	tier = $state<Tier>('free');
	usage = $state<UsageStatus | null>(null);
	profile = $state<UserProfile>({
		name: '',
		occupation: '',
		traits: [],
		other: ''
	});

	get tierConfig() {
		return TIER_CONFIG[this.tier];
	}

	async fetchSubscription() {
		try {
			const response = await fetch(`${API_BASE}/api/subscription/getSubscriptionData`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Failed to get subscription data');
			}

			const data = await response.json();
			this.tier = data.tier ?? 'free';
			this.usage = data.usage ?? null;
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
				throw new Error('Failed to update');
			}
		} catch (error) {
			console.error('Error updating profile:', error);
			throw error;
		}
	}
}

export const userState = new UserStore();
