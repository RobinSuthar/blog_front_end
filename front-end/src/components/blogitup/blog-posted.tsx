import image from "../../../public/images/sait/SAIT-Atrium.webp";
const BlogPosted = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className=" col-span-2 text-left p-2 ">
        <h2>Title</h2>
        <h1>Featured Post</h1>
        <h2>Date</h2>
        <p className="max-w-96">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post's
        </p>
        <span className="text-blue-600">Continue Reading</span>
      </div>
      <div>
        <img src={image} width={600} alt="" />
      </div>
      <div className=" col-span-2 text-left  ">
        <h2>Title</h2>
        <h1>Featured Post</h1>
        <h2>Date</h2>
        <p className="max-w-96">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post's
        </p>
        <span className="text-blue-600">Continue Reading</span>
      </div>
      <div className="max-w-[800px]">
        <img src={image} width={200} alt="" />
      </div>
    </div>
  );
};

export default BlogPosted;
