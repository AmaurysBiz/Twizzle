import React, { useEffect, useState } from "react";
import "./UserContent.css";
import axios from "axios";
import { API } from "../Config/config";
import loaderImg from "../Images/loader.gif";
export default function UserContent() {
  const [selected, setSelected] = useState("images");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [upload, setUpload] = useState(false);
  const [loader, setLoader] = useState(true);

  const id = localStorage.getItem("userId");
  const fetchData = () => {
    try {
      axios
        .get(`${API.apiUrl}/users/${id}`)
        .then((res) => {
          console.log(res);
          setImages(res.data?.userContent?.userImages);
          setVideos(res.data?.userContent?.userVideos);
          setLoader(false);
        })
        .catch((e) => {
          console.log(e);
          setLoader(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function uploadImages(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        let reader = new FileReader();
        reader.onload = () => {
          const imageObj = {
            image: reader.result,
            date: new Date().toLocaleDateString(),
          };
          setImages((prev) => [...prev, imageObj]);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }

    setUpload(true);
  }

  function uploadVideos(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        let reader = new FileReader();
        reader.onload = () => {
          const vidObj = {
            video: reader.result,
            date: new Date().toLocaleDateString(),
          };
          setVideos((prev) => [...prev, vidObj]);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }

    setUpload(true);
  }

  const handleUpload = () => {
    const payload = {
      userContent: {
        userImages: images,
        userVideos: videos,
      },
    };
    axios
      .patch(`${API.apiUrl}/users/${id}`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteImage = (imgObj) => {
    const finalImages = images.filter((image)=> {return imgObj.image !== image.image});
    setImages(finalImages);

    const payload = {
      userContent: {
        userImages: finalImages,
        userVideos: videos,
      },
    };
    axios
      .patch(`${API.apiUrl}/users/${id}`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleDeleteVideo = (videoObj) => {
    const finalVideos = videos.filter((vid)=> {return videoObj.video !== vid.video});
    setVideos(finalVideos);

    const payload = {
      userContent: {
        userVideos: finalVideos,
        userImages: images,
      },
    };
    axios
      .patch(`${API.apiUrl}/users/${id}`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
    <div>
      <div className="content-library-container">
        {/* Content Library Header */}
        <div className="library-header">
          <h2>My Library</h2>
          {selected === "images" ? (
            <>
              <input
                className="upload-button"
                type="file"
                multiple
                onChange={uploadImages}
              />
            </>
          ) : (
            <>
              <input
                className="upload-button"
                type="file"
                multiple
                onChange={uploadVideos}
              />
            </>
          )}
        </div>

        <div className="toggler">
          <div className="inner-toggle">
            <span
              className={`${selected === "images" ? "selected" : null}`}
              onClick={() => {
                setSelected("images");
                setUpload(false);
              }}
            >
              {" "}
              Images{" "}
            </span>
            <span
              className={`${selected === "videos" ? "selected" : null}`}
              onClick={() => {
                setSelected("videos");
                setUpload(false);
              }}
            >
              {" "}
              Videos{" "}
            </span>
          </div>
        </div>

        <div>
          {upload && <button onClick={handleUpload}> Upload Content </button>}
        </div>

        {selected === "images" ? (
          <>
            {/* Content Grid */}
            <div className="content-grid">
              {loader ? (
                <>
                  <center>
                    <img src={loaderImg} alt="loader" width={200} />
                  </center>
                </>
              ) : (
                <>
                  {images.map((item) => (
                    <div key={item._id} className="content-item">
                      <img src={item.image} alt={"content"} />
                      <div className="content-details">
                        <p>Type: Image</p>
                        <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                        <button
                          className="delete-button"
                          onClick={() => {
                            setImages(
                              images.filter((data) => {
                                return data.image !== item.image;
                              })
                            );
                            handleDeleteImage(item);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </>
        ) : (
          <>
            {/* Content Grid */}
            <div className="content-grid">
              {loader ? (
                <>
                  <center>
                    <img src={loaderImg} alt="loader" width={200} />
                  </center>
                </>
              ) : (
                <>
                  {videos.map((item) => (
                    <div key={item._id} className="content-item">
                      <video src={item.video} controls width={"100%"}></video>
                      <div className="content-details">
                        <p>Type: Video</p>
                        <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                        <button className="delete-button" onClick={() => {
                            setVideos(
                              videos.filter((data) => {
                                return data.video !== item.video;
                              })
                            );
                            handleDeleteVideo(item);
                          }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
