export async function getComments(id) {
    topicId = id;
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
        const allComments = await response.json();

        if (response.status !== 200) {
            throw new Error(response.message);
        }

        userComment.replaceChildren();
        Object.values(allComments)
            .filter(c => c.postId === topicId)
            .map(c => {
                createUserCommentHTML(c);
            });

    } catch (error) {
        alert(error.message);
    }
}