import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'


const BlogCard = ({blog}) => {

    const{cover_image, published_at, title, description,id}= blog;
    return (
        
            <Link  to={`/blog/${id}`}  className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-white">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
				<div className="p-6 space-y-2  dark:text-white">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs"> {new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        
    );
};

export default BlogCard;