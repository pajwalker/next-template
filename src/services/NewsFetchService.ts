import type News from "@/types/News";
import axios from 'axios';
import * as cheerio from 'cheerio';

export function useNewsFetchService() {
    const reg = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

    const fetchNews = async (): Promise<News[]> => {
        const data: string = await axios.get('https://www.phlu.ch/').then((response) => response.data);
        const $ = cheerio.load(data);

        const news: News[] = [];
        $('#aktuelles').find('ul > li').each((index, element) => {
            const title = $(element).find('h3').text().trim();
            const description = $(element).find('.lead-text').text().trim();
            let thumbnail = $(element).find('img').attr('data-srcset') || '';
            thumbnail = thumbnail.split(',').pop() || '';
            thumbnail = reg.exec(thumbnail)![0];
            news.push({ title, description, thumbnail });
        });
         
        return Promise.resolve(news);
    }
    

    return {
        fetchNews,
    }
}