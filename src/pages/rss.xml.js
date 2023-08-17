import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
    return rss({
        title: "Corey Stewart Blog",
        description: "Just stuff I write",
        site: "https://stew.boo",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    });
}
