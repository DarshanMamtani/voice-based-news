import React, { useEffect, useState } from 'react';
import alanBtn  from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const App = () => {
  
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const alanKey = '07bc5effb2e325ea33430158fe0c57012e956eca572e1d8b807a3e2338fdd0dc/stage';
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);

        }
        else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      }
    });
  }, []);
  return ( 
    <div>
      <h1 className={classes.h1}><strong>Voice Based News Application</strong></h1>
      <div className={classes.logoContainer}>
        <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2A2bjoBQ1SHbcIkHYPW9daaxMZyYspXqY3g&usqp=CAU" alt="logo"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
   );
}
 
export default App;