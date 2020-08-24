import React from 'react';
import { Redirect } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
import Markdown from 'react-markdown';

import postlist from '../data/posts.json';
import styles from './Post.module.css';

const Post = ({ style, mouseEnter, mouseLeave, ...props }) => {
  const id = props.match.params.id;

  const slug = id;
  if (!slug) {
    return <Redirect to='/404' />;
  }

  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (slug === post.slug) {
      fetchedPost.title = post.title ? post.title : 'No title given';
      fetchedPost.date = post.date ? post.date : 'No date given';
      fetchedPost.author = post.author ? post.author : 'No author given';
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
        <img
          src={fetchedPost.thumbnail}
          className={styles.featured_image}
          alt='thumbnail'
        />
        <h2 className={styles.title}>{fetchedPost.title}</h2>
        <div className={styles.post_content}>
          <Markdown source={fetchedPost.content} escapeHtml={false} />
        </div>
      </div>
    </animated.div>
  );
};

export default Post;
