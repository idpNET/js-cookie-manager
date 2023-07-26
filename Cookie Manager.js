/**
 * © 2023 ideapardaz.NET software group.
 */

/**
 * Get the value of a cookie by its name.
 * @param {string} cookieName - The name of the cookie to retrieve.
 * @returns {string} The value of the cookie if found, an empty string otherwise.
 */
function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

/**
 * Create a new cookie or update the value of an existing cookie.
 * @param {string} cookieName - The name of the cookie to create or update.
 * @param {string} cookieValue - The value to set for the cookie.
 * @param {number} expirationSeconds - The number of seconds until the cookie expires.
 * @param {string} path - The path for which the cookie is valid.
 */
function createCookie(cookieName, cookieValue, expirationSeconds, path) {
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expirationSeconds * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + expirationDate.toUTCString() + "; path=" + path + "; SameSite=Strict";
}

/**
 * Delete a cookie by its name.
 * @param {string} cookieName - The name of the cookie to delete.
 */
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/**
 * Check if a cookie with a given name exists.
 * @param {string} cookieName - The name of the cookie to check.
 * @returns {boolean} True if the cookie exists, false otherwise.
 */
function checkCookieExists(cookieName) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + "=")) {
            return true;
        }
    }
    return false;
}

/**
 * Update the value of a cookie or create a new cookie if it doesn't exist.
 * @param {string} cookieName - The name of the cookie to update or create.
 * @param {string} cookieValue - The value to set for the cookie.
 * @param {number} expirationSeconds - The number of seconds until the cookie expires.
 * @param {string} path - The path for which the cookie is valid.
 */
function updateCookieValue(cookieName, cookieValue, expirationSeconds, path) {
    if (checkCookieExists(cookieName)) {
        deleteCookie(cookieName);
    }
    createCookie(cookieName, cookieValue, expirationSeconds, path);
}

/**
 * Clear all cookies.
 */
function clearCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}
