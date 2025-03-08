import React from "react";

const Blog = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-xl font-playfair mb-2">Latest Article</h3>
          <h2 className="text-4xl font-playfair font-bold">From The Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Featured Article - Larger Article */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="/blog-1.jpeg"
              alt="Understanding Makki and Madani Surahs"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 text-white p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">
                Understanding Makki and Madani Surahs
              </h3>
              <p className="mb-4">
                The Quran Intermediate Course is for students with a basic
                understanding. The Quran Intermediate Course.
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-medium">Becky Nelson</div>
                  <div className="text-sm text-white/80">• 1 Jan 2023</div>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Second Featured Article */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="/blog-2.jpeg"
              alt="The Role of the Quran in Daily Life"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
              <h3 className="text-xl font-bold mb-2">
                The Role of the Quran in Daily Life:
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium">Becky Nelson</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Three-column layout for additional articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "The Role of the Quran in Daily Life:",
              image: "/blog-3.jpeg",
              author: "Becky Nelson",
            },
            {
              title: "The Role of the Quran in Daily Life:",
              image: "/blog-4.jpeg",
              author: "Becky Nelson",
            },
            {
              title: "The Role of the Quran in Daily Life:",
              image: "/blog-5.jpeg",
              author: "Becky Nelson",
            },
          ].map((article, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg group">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h3 className="text-base font-bold mb-2">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      {article.author}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-between items-center mb-8">
          <button className="flex items-center text-gray-600 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </button>

          <div className="flex space-x-2">
            {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  page === 1
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center text-gray-600 hover:text-primary">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}

        <div className="flex justify-center">
          <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
