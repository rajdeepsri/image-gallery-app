import Card from "../components/Card";
import { usePostContext } from "../context/PostContext";
import Modal from "./Modal";

const CardList = ({ images }) => {
  const { selectedPost, setSelectedPost } = usePostContext();

  return (
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
  );
};

export default CardList;
