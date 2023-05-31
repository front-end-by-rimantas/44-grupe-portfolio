function socialMetrics(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (DOM === null) {
        return false;
    }

    if (!Array.isArray(data) || data.length === 0) {
        return false;
    }

    let HTML = '';

    // logika...

    DOM.innerHTML = HTML;
    return true;
}

export { socialMetrics };
