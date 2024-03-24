import { useLoaderData } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'


const Content = () => {
    const blog = useLoaderData();
    const{cover_image, published_at, title, description,tags}= blog;
    return (
        <div    className=" mx-auto group  border-2     hover:no-underline focus:no-underline dark:bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
                <div>
		<div className="flex flex-wrap p-6  gap-2 border-t border-dashed border-gray-400">
			{
                tags.map(tag=><a key={tag} href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>)
            }
			
		</div>
		
	</div>
				
			</div>
    );
};

export default Content;