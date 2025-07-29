document.getElementById('message').addEventListener('input', function() {
    var maxLength = 100;
    var currentLength = this.value.length;

    // Update the character count
    document.getElementById('char-count').textContent = currentLength + '/100';

    // Check if the character limit is exceeded
    if (currentLength > maxLength) {
        // Trim the message to the max length
        this.value = this.value.substring(0, maxLength);
        currentLength = maxLength;  // Ensure the length stays at max after trimming
    }
});
