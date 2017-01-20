/**
 * Created by User on 3.11.2016 г..
 */
// The function will be called by an object

function solve(input) {

    switch (input) {
        case 'upvote':
            upvote();
            break;
        case 'downvote':
            downvote();
            break;
        case 'score':
            return score(this);
    }
    // upvote
    function upvote() {
        this.upvotes += 1;
    }

    // downvote
    function downvote() {
        this.downvotes += 1;
    }

    // score
    function score(obj) {
        let modifier = 0;
        let totalVotes = obj.upvotes + obj.downvotes;
        let balance = obj.upvotes - obj.downvotes;

        if (totalVotes > 50) {
            modifier = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
        }

        let rating = '';
        if (totalVotes >= 10) {
            if (balance < 0) {
                rating = 'unpopular';
            } else if (obj.upvotes / totalVotes > 0.66) {
                rating = 'hot';
            } else if (obj.downvotes / totalVotes <= 0.66 && obj.upvotes > 100) {
                rating = 'controversial';
            }
        } else {
            rating = 'new';
        }

        return [obj.upvotes + modifier, obj.downvotes + modifier, balance, rating];

    }
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 100,
    downvotes: 100
};
// console.log(solve.call(post, 'score'));

post.pesho = solve;
post.pesho('upvote');
post.pesho('upvote');
post.pesho('downvote');

console.log(post);