import {TEXT_TYPE} from '@/assets/js/enum/textType';
import {MEDIA_DISPLAY_TYPE, MEDIA_TYPE} from '@/assets/js/enum/media';

interface ContentItem {
	textType: TEXT_TYPE;
	title: string;
	content: string;
	list: string[];
}

interface MediaList {
	key: string;
	src: string;
}

interface MediaItem {
	mediaDisplayType: MEDIA_DISPLAY_TYPE;
	mediaType: MEDIA_TYPE;
	mediaList: MediaList[];
	url: string;
}

interface CampaignDetail {
	contentList: ContentItem[];
	media: MediaItem[];
}

export interface CampaignItem {
	id: number;
	isOngoing: boolean;
	title: string;
	detailTitle: string;
	img: string;
	imageLinkOut: string;
	year: string;
	region: string;
	issues: string;
	services: string;
	details: CampaignDetail | null;
}

export interface CampaignWording {
	landing: {
		headerTitle: string;
		description: string;
	};
	campaigns: CampaignItem[];
}
