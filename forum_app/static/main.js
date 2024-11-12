// static/main.js
function toggleLike(postId) {
    fetch(`/post/${postId}/like`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token() }}'
        }
    })
    .then(response => response.json())
    .then(data => {
        const likeCount = document.getElementById(`like-count-${postId}`);
        likeCount.textContent = data.total_likes;
    });
}
