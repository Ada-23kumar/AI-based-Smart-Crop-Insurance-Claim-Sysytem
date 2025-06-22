// Handle registration
async function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // For demo purposes, we'll simulate a successful registration
        // In a real application, this would make an API call
        const user = {
            username,
            email,
            id: Date.now() // Generate a unique ID
        };
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        
        // Show success message
        alert('Registration successful! Redirecting to home page...');
        
        // Redirect to home page - use relative path
        window.location.href = 'new.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    }
}

// Handle login
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // For demo purposes, we'll simulate a successful login
        // In a real application, this would make an API call
        const user = {
            username: email.split('@')[0], // Use email prefix as username
            email,
            id: Date.now()
        };
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        
        // Show success message
        alert('Login successful! Redirecting to home page...');
        
        // Redirect to home page - use relative path
        window.location.href = 'new.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please try again.');
    }
}

// Check if user is logged in
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const currentPage = window.location.pathname;
    
    // If not authenticated and not on login/register page or main page, redirect to login
    if (!isAuthenticated && 
        !currentPage.includes('login.html') && 
        !currentPage.includes('register.html') && 
        !currentPage.includes('new.html') && 
        !currentPage.includes('index.html')) {
        window.location.href = 'login.html';
    }
    
    // If authenticated and on login/register page, redirect to home
    if (isAuthenticated && (currentPage.includes('login.html') || currentPage.includes('register.html'))) {
        window.location.href = 'new.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'login.html';
}

// Get user info
function getUserInfo() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Update UI based on auth state
function updateAuthUI() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const user = getUserInfo();
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');

    if (isAuthenticated && user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (userInfo) userInfo.textContent = `Welcome, ${user.username}!`;
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (userInfo) userInfo.textContent = '';
    }
} 