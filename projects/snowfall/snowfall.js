// Snowfall.js file for the web
// to power the website
const copyText = "import { SnowfallServer } from 'https://deno.land/x/snowfall@v0.0.1/lib/snowfall.ts';";
const docsURL = "https://doc.deno.land/https/deno.land/x/snowfall@v0.0.1/lib/snowfall.ts";
function copy(){
    const el = document.createElement('textarea');
    el.value = copyText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
function openDocs(){
    window.location.href = docsURL;
}