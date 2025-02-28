'use client'

import NewsPreview from "./components/NewsPreview";
import News from "@/types/news";
import { useNewsFetchService } from "../services/NewsFetchService";
import { useEffect, useState } from "react";

export default function Home() {
  const fetchNewsService = useNewsFetchService();
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await fetchNewsService.fetchNews();
      setNews(newsData);
    };

    fetchNews();
  }, [fetchNewsService]);

  return (
    <div className="flex flex-col items-start px-5 sm:px-10 md:px-20 mb-10">
      <h1 className="text-4xl font-semibold text-primary mt-10">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {news.map((newsItem, index) => (
          <NewsPreview
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            img={newsItem.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
