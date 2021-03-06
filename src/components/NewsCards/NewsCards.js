import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import { Grow, Grid, Typography } from '@material-ui/core';

import useStyles from './style';

const infoCards = [
  { color: '#011627', title: 'Latest News', intro: 'Click on Mic icon at bottom right corner' ,text: 'Give me the latest news' },
  { color: '#2ec4b6', title: 'News by Categories', info: 'Business, Entertainment, Science, Sports', text: 'Give me the latest Sports news' },
  { color: '#e71d36', title: 'News by Terms', info: 'Bitcoin, Technology, Smartphones...', text: 'Tell me the news on Technology' },
  { color: '#ff9f1c', title: 'News by Sources', info: 'Times of India, The Hindu, CNN, BBC News, Time...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (articles.length === 0) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
          {infoCards.map((infocard) => (
            <Grid item xs={12} sm={6} md={3} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infocard.color }}>
                <Typography variant="h5"><em>{infocard.title}</em></Typography>
                {infocard.info ? (<Typography variant='h6'><strong>{infocard.title.split(' ')[2]}</strong><br />{infocard.info}</Typography>) : null}
                {infocard.intro ? (<Typography variant='h6'>{infocard.intro}<em></em></Typography>):null}
                <Typography variant='h6'>Try Saying <br /> <i>"{infocard.text}"</i></Typography>
              </div>
            </Grid>)
          )}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex' }} >
            <NewsCard article={article} i={i} activeArticle={activeArticle}/>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}

export default NewsCards;