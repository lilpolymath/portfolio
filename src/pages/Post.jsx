import React, { useEffect, useRef } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
import Markdown from 'react-markdown';
import { Twitter } from 'react-feather';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import postlist from '../data/posts.json';
import styles from './Post.module.css';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';

const Post = ({ style, mouseEnter, mouseLeave, ...props }) => {
  const codeRef = useRef();
  const { id: slug } = useParams();

  hljs.registerLanguage('javascript', javascript);

  let currentIndex;
  const fetchedPost = {};

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    document.title = fetchedPost.title;
  }, [fetchedPost.title, slug]);

  useEffect(() => {
    const nodes = codeRef.current.querySelectorAll('pre');
    nodes.forEach(node => {
      hljs.highlightBlock(node);
    });
  }, [codeRef]);

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
      fetchedPost.thumbnail = post.thumbnail ? post.thumbnail : '';
      fetchedPost.credits = post.credit ? post.credit : '';
      postExists = true;
    }
  });

  if (postExists === false) {
    return <Redirect to='/404' />;
  }

  const share = `https://twitter.com/share?url=${window.location.href}&text=I just read ${fetchedPost.title} and I think you should too.`;

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
        {fetchedPost.thumbnail && (
          <figure>
            <img
              src={fetchedPost.thumbnail}
              className={styles.featured_image}
              alt='thumbnail'
            />
          </figure>
        )}
        <figcaption className={styles.featured_image_credit}>
          {fetchedPost.credit}
        </figcaption>
        <div ref={codeRef} className={styles.post_content}>
          <Markdown source={fetchedPost.content} escapeHtml={false} />
        </div>
        <div className={styles.share_post}>
          <a
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={styles.share_post_text}
            target='_blank'
            rel='noopener noreferrer'
            href={share}
          >
            Share on Twitter. <Twitter />
          </a>
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
