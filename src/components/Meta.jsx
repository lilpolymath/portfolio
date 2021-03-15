import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({
  url,
  title,
  noindex,
  siteTitle,
  description,
  canonicalLink,
  siteDescription,
  absoluteImageUrl = '',
  twitterCreatorAccount = 'https://twitter.com/favourcodes',
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property='og:title' content={title} />}
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {url && <meta property='og:type' content='website' />}
      {url && <meta property='og:url' content={url} />}
      {twitterCreatorAccount && (
        <meta name='twitter:creator' content={twitterCreatorAccount} />
      )}
      {noindex && <meta name='robots' content='noindex' />}
      {canonicalLink && <link rel='canonical' href={canonicalLink} />}

      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:description' content={siteDescription} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={absoluteImageUrl} />
      <meta property='og:image:secure_url' content={absoluteImageUrl} />
      <meta property='og:image' content={absoluteImageUrl} />
      <meta name='twitter:card' content={absoluteImageUrl} />
    </Helmet>
  );
};

export default Meta;
