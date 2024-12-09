import React from 'react';
import Image from 'next/image';
const FeaturedPosts = () => {
  const posts = [
    {
      image: "/images/road.png", // Directly assign the imported image
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/car.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/unsplash.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="container  ml-[80px] mt-[6px] px-4 py-3">
      {/* Section Header */}
      <h6 className="text-3xl font-bold text-center text-[16px]  ${montserrat.className}  h-[24px] font-bold text-[#23A6F0] mb-8">Practice Advice</h6>
      <h2 className="text-3xl font-bold text-center text-[40px]  ${montserrat.className} font-bold text-[#252B42] mb-8">Featured Posts</h2>
      <p className="text-lg text-center text-[#737373] mt-[-20px] text-[14px]  ${montserrat.className} ml-[350px] w-[500px] mb-16">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      {/* Grid of Featured Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[1000px] ml-[90px] mb-[4 0px]">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image} // Use the image directly
                alt={`Post ${index + 1}`}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-1"><span className="text-[#23A6F0] mr-[10px]">Google</span> <span className="text-[#737373] mr-[10px]">Trending</span> <span className="text-[#737373] mr-[10px]">New</span></p>
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{post.description}</p>
              <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center">
                    <svg
                      className="h-4 w-4  text-[#23A6F0]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span>|</span>
                  <span className="pl-[50px]">{post.comments}</span>
                </div>

              </div>
              <a
                href="#"
                className="text-blue-500   font-bold hover:underline"
              >
                <h6 className="mt-[10px] ${montserrat.className} text-[#737373]">Learn More <span className="text-[#23A6F0]">→</span></h6>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;