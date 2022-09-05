import { ProductStoriesProps } from './interfaces/interface';

function ProductStories({ title, caption, image }: ProductStoriesProps) {
  return (
    <div className="product-story">
      <img src={image} alt="title" />
        <p className="story-title">{title}</p>
        <p className="story-caption">{caption}</p>
        <h6 className="story-link">Read More</h6>
    </div>
  );
}

export default ProductStories;
