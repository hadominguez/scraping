import express from 'express';
import cheerio from 'cheerio';
import myFetch from './peticion.js';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    let response = await myFetch.myFetch("https://www.nike.com/men");

    let html = await response.text();
    let $ = cheerio.load(html);

    let menu =$('#DesktopMenu-0-1-0 .pre-columns-container.ncss-row');
    let divMenu =menu.find('div')[1];
    let linkJordan =divMenu.childNodes[4].attribs.href;

    let responseJordanMen = await myFetch.myFetch(linkJordan);
    html = await responseJordanMen.text();
    $ = cheerio.load(html);
    let listItems =$(".results__body .product-grid__items");
    let items =listItems.find('.product-card.product-grid__card');

    let listado = [];
    items.each(function (i, elem) {
        listado[i] = {
            nombre: $(this).find(".product-card__title").text(),
            mensaje: $(this).find(".product-card__messaging.accent--color").text(),
            precio: $(this).find(".product-price.is--current-price.css-11s12ax").text(),
            link: $(this).find(".product-card__link-overlay").attr('href')
        };
    });

    res.send(listado);
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

