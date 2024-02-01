import Card from "../components/Card";
import { usePostContext } from "../context/PostContext";
import Modal from "./Modal";

const CardList = ({ images, debouncedSearchQuery }) => {
  const { selectedPost, setSelectedPost } = usePostContext();
  console.log(images);

  return images.length > 0 ? (
    <div className="grid place-items-center w-full py-5 sm:py-10 bg-neutral-50 dark:bg-neutral-900">
      <section className="columns-1 md:columns-3 sm:columns-2">
        {images?.length > 0 &&
          images.map((image) => (
            <Card
              key={image.id}
              {...image}
              handleOnClick={() => setSelectedPost(image)}
            />
          ))}
      </section>
      {selectedPost && <Modal {...selectedPost} />}
    </div>
  ) : (
    <div className="bg-neutral-50 dark:bg-neutral-900 h-[17.25rem]  flex pt-20 justify-center text-center">
      <p className="text-balance text-white text-xl px-4">
        Sorry, No results found for&nbsp;
        <span className="font-semibold">{debouncedSearchQuery}</span>
      </p>
    </div>
  );
};

export default CardList;
