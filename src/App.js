import React, { useState } from "react";
const App = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <div className="max-container">
      <div className="section">
        <h1 className="header-title">Post Title 1</h1>
        <div className="item-title">
          <div className="item-author">Author: John Smith</div>
          <div className="item-createdAt">Created at: Sep 20, 2018</div>
        </div>
        <div className="item-description">
          It sets up your development environment so that you can use the latest
          JavaScript features, provides a nice developer experience, and
          optimizes your app for production.It sets up your development
          environment so that you can use the latest JavaScript features,
          provides a nice developer experience, and optimizes your app for
          production.
        </div>
        <div className="item-bottom">
          <div
            className="item-replies"
            onClick={() => setShowComment(!showComment)}
          >
            2 replies
          </div>
        </div>
        <div className="line"></div>
        <div className={`comment-list ${showComment ? "active" : ""}`}>
          <div className="comment-item">
            <div className="comment-item_left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                alt="Paris"
              />
            </div>
            <div className="comment-item_right">
              <div className="comment-item_title">
                <div className="comment-item_author">Han Solo</div>
                <div className="comment-item_time">a day ago</div>
              </div>
              <div className="comment-item_messages">
                It sets up your development environment so that you can use the
                latest JavaScript features, provides a nice developer
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                experience, and optimizes your app for production. your app for
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                your app for production. production.
              </div>
              <div className="comment-item_button">
                <button>Reply to</button>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="comment-item_left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                alt="Paris"
              />
            </div>
            <div className="comment-item_right">
              <div className="comment-item_title">
                <div className="comment-item_author">Han Solo</div>
                <div className="comment-item_time">a day ago</div>
              </div>
              <div className="comment-item_messages">
                It sets up your development environment so that you can use the
                latest JavaScript features, provides a nice developer
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                experience, and optimizes your app for production. your app for
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                your app for production. production.
              </div>
              <div className="comment-item_button">
                <button>Reply to</button>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="comment-item_left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                alt="Paris"
              />
            </div>
            <div className="comment-item_right">
              <div className="comment-item_title">
                <div className="comment-item_author">Han Solo</div>
                <div className="comment-item_time">a day ago</div>
              </div>
              <div className="comment-item_messages">
                It sets up your development environment so that you can use the
                latest JavaScript features, provides a nice developer
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                experience, and optimizes your app for production. your app for
                experience, and optimizes your app for production. experience,
                experience, and optimizes your app for production. and optimizes
                your app for production. production.
              </div>
              <div className="comment-item_button">
                <button>Reply to</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
