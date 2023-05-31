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

    for (const item of data) {
        HTML += `<li class="metric">
                    <div class="number">${item.number}</div>
                    <div class="label">${item.label}</div>
                </li>`;
    }

    DOM.classList.add('social-metrics');
    DOM.innerHTML = HTML;
    return true;
}

export { socialMetrics };
