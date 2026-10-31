(function () {
    const storageKey = "alienDemoUsername";

    window.AlienDemoAuth = Object.freeze({
        getUsername() {
            const username = localStorage.getItem(storageKey);
            return username && username.trim() ? username.trim() : null;
        },
        signIn(username) {
            const normalizedUsername = username.trim();
            if (!normalizedUsername) throw new Error("Enter a username.");
            localStorage.setItem(storageKey, normalizedUsername);
            return normalizedUsername;
        },
        signOut() {
            localStorage.removeItem(storageKey);
        }
    });
})();
