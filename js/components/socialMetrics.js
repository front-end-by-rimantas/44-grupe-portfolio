// return -> error-first

function socialMetrics(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return [true, 'ERROR: selector has to be non-empty string'];
    }

    const DOM = document.querySelector(selector);
    if (DOM === null) {
        return [true, 'ERROR: could not find DOM element'];
    }

    if (!Array.isArray(data) || data.length === 0) {
        return [true, 'ERROR: data has to be non-empty array'];
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

    return [false, 'OK'];
}

export { socialMetrics };
