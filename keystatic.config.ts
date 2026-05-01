import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

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
                content: fields.mdx({
                    label: "Content",
                    options: {
                        image: {
                            directory: "src/assets/images",
                            publicPath: "@assets/images",
                        },
                    },
                    components: {
                        ResizedImage: block({
                            label: "Resized Image",
                            schema: {
                                src: fields.image({
                                    label: "Image",
                                    directory: "src/assets/images",
                                    publicPath: "@assets/images/",
                                }),
                                alt: fields.text({ label: "Alt text" }),
                                size: fields.select({
                                    label: "Size",
                                    defaultValue: "full",
                                    options: [
                                        { label: "Full width", value: "full" },
                                        {
                                            label: "Medium (centered)",
                                            value: "medium",
                                        },
                                        {
                                            label: "Small (centered)",
                                            value: "small",
                                        },
                                    ],
                                }),
                            },
                        }),
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
