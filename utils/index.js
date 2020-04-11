
const strip = html => {
    return html.replace(/(<([^>]+)>)/ig,"");
}

export {
    strip
} 