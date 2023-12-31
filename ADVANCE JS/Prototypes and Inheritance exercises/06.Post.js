function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
           // return `Post: ${this.title}\n` + `Content: ${this.content}`
            let result = `Post: ${this.title}\nContent: ${this.content}`;
            return result;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            return super.toString() + `\n` + `Rating: ${this.likes - this.dislikes}` +
                (this._comments.length ? "\nComments:" + "\n" + (this._comments.map(e => ` * ${e}`).join("\n")) : "")
        }
        }
    

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views
        }

        views() {
            this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }

}


const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
