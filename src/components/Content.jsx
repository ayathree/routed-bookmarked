import { useLoaderData } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";



const Content = () => {
    const blog = useLoaderData();
    const{cover_image, published_at, title, description,tags, body_html}= blog;
    return (
        <div    className=" mx-auto group  px-6     hover:no-underline focus:no-underline dark:bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
                
		<div className="flex flex-wrap p-6  gap-2 border-t border-dashed border-gray-400">
			{
                tags.map(tag=><a key={tag} href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>)
            }
			
		</div>
		
	
    <div className=" p-6 space-y-2">
    <h1 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h1>

     <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
    </div>
				
			</div>
        
    );
};

export default Content;