// disableShortcuts.js
// Note: This code will disable the shortcuts in all windows, not just your app
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) { // F12
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) { // Ctrl+Shift+J
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
        e.preventDefault();
    }
});