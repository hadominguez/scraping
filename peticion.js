import fetch from 'node-fetch';

async function myFetch(url){
    let response = await fetch(url, {
        credentials: "include",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1"
        },
        method: "GET",
        mode: "cors"
    });
    return response;
}

export default {
    myFetch: myFetch
  }
  