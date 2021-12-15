import { PencilIcon } from "@heroicons/react/solid";
import React from "react";

const { REACT_APP_BLOGGER_API_URL, REACT_APP_BLOGGER_KEY } = process.env;

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    console.log(REACT_APP_BLOGGER_API_URL);

    fetch(`${REACT_APP_BLOGGER_API_URL + REACT_APP_BLOGGER_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          blogs: json.items,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, blogs } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

    return (
      <section id="blogs" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <PencilIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Blogs by Me!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4 items-center">
            {blogs.map((blog) => {
              const snippet = document.createElement("div");
              snippet.innerHTML = blog.content;
              const links = snippet.getElementsByTagName("a");
              const imageUrl = links[links.length - 1].href; // or getAttribute("href")
              return (
                <a
                  href={blog.url}
                  target="_blank"
                  key={blog.id}
                  className="sm:w-1/2 h-50 w-100 p-4"
                >
                  <div className="flex relative items-center">
                    <img
                      alt={blog.title}
                      className="absolute	inset-0 w-full h-full object-cover object-center"
                      src={imageUrl}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed">
                        {blog.content
                          .replace(/(<([^>]+)>)/gi, "")
                          .replace(/&nbsp;/g, " ")
                          .substring(0, 500)}
                        ...
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
            <div className="">
              <h4 className="title-font text-lg font-medium text-white mb-3">
                <a href="https://marmikwords.blogspot.com/" target="_blank">
                  Read More Here..{" "}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blogs;
