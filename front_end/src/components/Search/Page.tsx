// "use client";

// import {Post,Category} from ""
// import useSWR from "swr";
// import {useSearchParams} from "next/navigation"

// const fetchPosts =async(url:string)=>{
//     const responce = await fetch(url);

//     if(!responce.ok) {
//         throw new Error("Алдаатай хүсэлт байна");
//     }
//     return responce.json();
// }

// const SearchPage=()=>{
//     const search=useSearchParams();
//     const searchQuery = search? search.get("q"):null;
//     const encodedSearchQuery= encodedURI(searchQuery ||'');
//     const {data,isLoading}= useSWR<(posts:Array< Post&{anchor:Category}>)>(
//         `/api/search?q=${encodedSearchQuery}`, fetchPosts);

//       if(!data?.post){
//          return null
//       }
//       console.log("Дата байна",data);
//       return (
//         <div> {data.posts.map((post)=>(
//         <div>{post.body}</div>))}</div>
//       )
// }

// export default SearchPage;
