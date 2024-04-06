// import { Button } from "@/components/ui/button"
// import Link from "next/link";

// const fetchFromNotion = async () => {
//     const res = await fetch("http://localhost:3000/api/notion")
//     const data  = await res.json()
//     return data
// }
// const  worksheet = async()=>{
//     const data = await fetchFromNotion()
    
//     return (
        
//         <div className="flex flex-col items-center justify-center ">
//             {/* <div className="border-slate-100 border-2 p-32 shadow-xl rounded-2xl m-2">
//                 Worksheet  dsadsa
//             </div>
//             <br />
//             <Link href="/learn">
//             <Button variant="primary">Start Learning</Button>
//             </Link> */}
//         </div>
//     )
// }


// export default worksheet
// import { notion } from "@/notion";
// import { NotionPage } from '@/components/notion';
// import { NotionAPI } from 'notion-client'
// // import { NotionPage } from "@/components/notion";

// const rootPageId = "bb00cbea138f407088db63d2c2da1ead"; // add your root page id

// const api = new NotionAPI()

// async function getData(rootPageId:string) {
//   return await api.getPage(rootPageId);
// }
// export default async function Home() {
//   const data = await getData(rootPageId);
//     console.log(data)
//   return (
//     <div>
//     <NotionPage recordMap={data} rootPageId={rootPageId} />
        
//     </div>
//     // <NotionPage recordMap={data} rootPageId={rootPageId} />
//   );
// }


// import { getPageContent, getPageBySlug, notionClient } from "@/utils/notion";
// import { NotionRenderer } from "@notion-render/client";
// import { notFound } from "next/navigation";

// //Plugins
// import hljsPlugin from "@notion-render/hljs-plugin";
// import bookmarkPlugin from "@notion-render/bookmark-plugin";
// import { Post } from "@/components/index";

// export default async function Page({ params }: { params: { slug: string } }) {
//   console.log("Slug: ", params);
//   const post = await getPageBySlug(params.slug);

//   //Redirect to not found page!
//   if (!post) notFound();

//   const content = await getPageContent(post.id);

//   const notionRenderer = new NotionRenderer({
//     client: notionClient,
//   });

//   notionRenderer.use(hljsPlugin({}));
//   notionRenderer.use(bookmarkPlugin(undefined));
//   const html = await notionRenderer.render(...content);

//   console.log("Post: ", post);

//   return (
//     <Post
//       title={(post.properties.Title as any).title[0].plain_text}
//       bannerImage={(post.properties.BannerImage as any).url}
//       bannerImageWidth={(post.properties.BannerImageWidth as any).number}
//       bannerImageHeight={(post.properties.BannerImageHeight as any).number}
//       content={html}
//     />
//   );
// }






