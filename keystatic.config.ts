import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "github",
        repo: "nerometa/blog",
    },
    collections: {
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/blog/**",
            entryLayout: "content",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
                content: fields.markdoc({
                    label: "Content",
                    options: {
                        image: {
                            directory: "src/assets/images",
                            publicPath: "@assets/images",
                        },
                    },
                }),
                pubDate: fields.date({
                    label: "Published Date",
                }),
                draft: fields.checkbox({
                    label: "Draft",
                    defaultValue: true,
                }),
                description: fields.text({
                    label: "Description",
                }),
                tags: fields.array(fields.text({ label: "Tag" }), {
                    label: "Tag",
                    itemLabel: (props) => props.value,
                }),
                author: fields.ignored(),
            },
        }),
    },
});
