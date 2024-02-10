import { Button } from '@/stories/Components';

const Third = () => {
  return (
    <div className="container mx-auto pt-24">
      <h1 className="text-center text-display-md font-semibold mb-5">Start your 30-day free trial</h1>
      <p className="text-center text-tertiary text-xl mb-10">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="w-full flex justify-center flex-wrap gap-2">
        <Button variant="secondary-gray" className="w-full sm:w-max">
          Learn more
        </Button>
        <Button className="w-full sm:w-max">Get started</Button>
      </div>
      <div className="w-full h-96 mt-16 bg-[url('https://images.unsplash.com/photo-1613243555978-636c48dc653c')] bg-cover"></div>
    </div>
  );
};

export default Third;
