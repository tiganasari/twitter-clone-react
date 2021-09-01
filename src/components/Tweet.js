import React from 'react';
import OneTweet from './OneTweet'

const Tweet = (props) => {
const tweets= [{
  name: 'tigana',
  tweet: 'react is cool, i need a break'
},
{
  name: 'bubu',
  tweet: 'where is my catnip'
},
{
  name: 'anou',
  tweet: 'going cycling now bye'

},
{ name: 'sofia',
  tweet: 'i love my cats!',
}

];
    return (
        <section>
           {tweets.map(tweet => (
               <OneTweet name={tweet.name} tweet={tweet.tweet}/>
           ))}
        </section>
);
};
export default Tweet;