import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "nerometa.dev",
		description: "A plain, personal dev blog",
		site: context.site,
		items: blog.map((post) => ({
			author: post.data.author,
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}`,
		})),
		stylesheet: "/rss/styles.xsl",
	});
}
