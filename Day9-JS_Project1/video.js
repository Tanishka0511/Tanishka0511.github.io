const iframe = document.querySelector('iframe')
        const searchText = window.location.search;
        const splitText = searchText.split('=');
        const videoId = splitText[1];
        iframe.src = `https://www.youtube.com/embed/${videoId}`

        const youtubeHistory = localStorage.getItem('yt_history');
        if (!youtubeHistory) {
            const newHistory = [];
            newHistory.push(videoId);
            localStorage.setItem("yt_history", JSON.stringify(newHistory));
        }
        else {
            const newHistory = JSON.parse(youtubeHistory);
            newHistory.push(videoId);
            localStorage.setItem("yt_history", JSON.stringify(newHistory));
        }

// Handle comments
const addComment = () => {
    const commentInput = document.getElementById("comment-input").value;
    if (commentInput.trim()) {
        let comments = JSON.parse(localStorage.getItem(`comments_${videoId}`)) || [];
        comments.push(commentInput);
        localStorage.setItem(`comments_${videoId}`, JSON.stringify(comments));
        displayComments();
    }
};

const displayComments = () => {
    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = "";
    const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`)) || [];
    comments.forEach(comment => {
        const li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
    });
};

displayComments();


