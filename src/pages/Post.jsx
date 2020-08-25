import React, { useState, useEffect } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
import Markdown from 'react-markdown';

import postlist from '../data/posts.json';
import styles from './Post.module.css';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';

const Post = ({ style, mouseEnter, mouseLeave, ...props }) => {
  const { id: slug } = useParams();
  const [current, setCurrent] = useState(0);

  let currentIndex;
  const fetchedPost = {};

  useEffect(() => {
    setCurrent(3);
  }, [current, fetchedPost]);

  if (!slug) {
    return <Redirect to='/404' />;
  }

  let postExists = false;
  postlist.forEach((post, i) => {
    if (slug === post.slug) {
      currentIndex = i;
      fetchedPost.title = post.title ? post.title : 'No title given';
      fetchedPost.date = post.date ? post.date : 'No date given';
      fetchedPost.content = post.content ? post.content : 'No content given';
      fetchedPost.thumbnail = post.thumbnail
        ? post.thumbnail
        : 'No thumbnail set';
      postExists = true;
    }
  });

  if (postExists === false) {
    return <Redirect to='/404' />;
  }
  return (
    <animated.div style={style} className={styles.post_wrapper}>
      <div className={styles.post}>
        <div className={styles.breadcrumb}>
          <Link onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} to='/'>
            <span className={styles.inactive}>Home</span>
          </Link>
          <Link onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} to='/blog'>
            <span className={styles.inactive}> / Blog</span>
          </Link>
          <span className={styles.active}> / {fetchedPost.title}</span>
        </div>
        <img
          src={fetchedPost.thumbnail}
          className={styles.featured_image}
          alt='thumbnail'
        />
        <div className={styles.post_content}>
          <Markdown source={fetchedPost.content} escapeHtml={false} />
        </div>
        {currentIndex !== postlist.length - 1 && (
          <div className={styles.next_post}>
            <h3 className={styles.next_post_title}>
              {postlist[currentIndex + 1].title}
            </h3>
            <Link
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className={styles.next}
              to={`/post/${postlist[currentIndex + 1].slug}`}
            >
              Read Next <Chevron />
            </Link>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default Post;
