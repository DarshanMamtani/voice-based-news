import React from 'react';
import { Card, CardActionArea, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './style';
import classNames from 'classnames';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const classes = useStyles();
  return (
    <Card className={classNames(classes.card, (activeArticle === i ? classes.activeCard : null))} >
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage ? (urlToImage) : 'https://image.freepik.com/free-vector/daily-news-newspaper-breaking-news-headline-press-mass-media-concept_48369-29704.jpg'} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;