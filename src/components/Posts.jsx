import AdsService from "./Ads";
import Post from "./Post";

const Posts = () => {
  const newFv = [1, 3, 4, 5, 6];

  return (
    <section className="w-full flex-wrap gap-10  flex items-center justify-center mt-[3rem]">
      {newFv.map((item, index) => (
        <Post item={item} index={index} />
      ))}
      <AdsService />
    </section>
  );
};

export default Posts;
