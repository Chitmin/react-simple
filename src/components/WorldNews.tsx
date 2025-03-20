import { Button } from "@/components/ui/button";

const WorldNews = () => {
  return (
    <div className="bg-[url(https://picsum.photos/seed/asdf/1200)] bg-cover bg-center h-full text-white">
      <article className="flex flex-col justify-center min-h-svh max-w-xl mx-auto p-4">
        <header>
          <h1 className="text-4xl font-bold border-b-3 pb-8 mb-8 uppercase">
            World News
          </h1>
          <h2 className="text-2xl mb-4">Amazing Lorem Ipsum Dolor</h2>
        </header>
        <p className="text-sm text-gray-100 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, cumque.
        </p>
        <footer>
          <Button className="cursor-pointer" variant="secondary">
            Read More
          </Button>
        </footer>
      </article>
    </div>
  );
};

export default WorldNews;
