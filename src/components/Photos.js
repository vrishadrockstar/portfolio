import { CameraIcon } from "@heroicons/react/solid";
import React from "react";

const API_RESPONSE_FORMAT = "json";
const NO_JSON_CALLBACK = 1;
const PER_PAGE = 10;

const {
  REACT_APP_FLICKR_USER_ID,
  REACT_APP_FLICKR_API_KEY,
  REACT_APP_FLICKR_API,
  REACT_APP_FLICKR_ALBUMS_API,
  REACT_APP_FLICKR_ALBUM_PHOTOS_URL,
  REACT_APP_FLICKR_COVER_URL,
} = process.env;

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photosets: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `${REACT_APP_FLICKR_API}api_key=${REACT_APP_FLICKR_API_KEY}&method=${REACT_APP_FLICKR_ALBUMS_API}&format=${API_RESPONSE_FORMAT}&nojsoncallback=${NO_JSON_CALLBACK}&user_id=${REACT_APP_FLICKR_USER_ID}&per_page=${PER_PAGE}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          photosets: json.photosets.photoset || [],
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, photosets } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

    return (
      <section id="photosets" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CameraIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Photography
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4 items-center">
            {photosets.map((photoset) => {
              return (
                <a
                  href={
                    REACT_APP_FLICKR_ALBUM_PHOTOS_URL +
                    REACT_APP_FLICKR_USER_ID +
                    "/albums/" +
                    photoset.id +
                    "/"
                  }
                  target="_blank"
                  key={photoset.id}
                  className="sm:w-1/2 w-100 p-4"
                >
                  <div className="flex relative items-center">
                    <figure className="relative object-cover object-center">
                      <img
                        src={
                          REACT_APP_FLICKR_COVER_URL +
                          "/" +
                          photoset.server +
                          "/" +
                          photoset.primary +
                          "_" +
                          photoset.secret +
                          ".jpg"
                        }
                      />
                      <figcaption>{photoset.title._content}</figcaption>
                    </figure>
                  </div>
                </a>
              );
            })}
            <div className="">
              <h4 className="title-font text-lg font-medium text-white mb-3">
                <a
                  href={
                    REACT_APP_FLICKR_ALBUM_PHOTOS_URL +
                    REACT_APP_FLICKR_USER_ID +
                    "/albums/"
                  }
                  target="_blank"
                >
                  Watch More Here..
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
