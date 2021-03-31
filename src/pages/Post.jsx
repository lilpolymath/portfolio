import React, { useEffect, useRef } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import { animated } from 'react-spring/renderprops';
import { Twitter, ChevronRight } from 'react-feather';
import javascript from 'highlight.js/lib/languages/javascript';

import Meta from '../components/Meta';
import styles from './Post.module.css';
import postlist from '../data/posts.json';

const Post = ({ style, mouseEnter, mouseLeave, ...props }) => {
  const codeRef = useRef();
  const { id: slug } = useParams();

  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('xml', xml);

  let currentIndex;
  let fetchedPost = {};

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
      fetchedPost = { ...postlist[currentIndex] };
      postExists = true;
    }
  });

  if (postExists === false) {
    return <Redirect to='/404' />;
  }
  const share = `https://twitter.com/share?url=${window.location.href}&text=I just read ${fetchedPost.title} by @favourcodes`;

  return (
    <animated.div style={style} className={styles.post_wrapper}>
      <Meta
        article={true}
        title={fetchedPost.title}
        description={fetchedPost.description}
        url={`https://favourcodes.com/post/${fetchedPost.slug}`}
        absoluteImageUrl={`https://favourcodes.com${fetchedPost.thumbnail}`}
      />
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
        <p className={styles.last_update}>Last Updated: {fetchedPost.date}</p>
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
        <article ref={codeRef} className={styles.post_content}>
          <Markdown source={fetchedPost.content} escapeHtml={false} />
        </article>
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
              Read Next <ChevronRight />
            </Link>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default Post;
