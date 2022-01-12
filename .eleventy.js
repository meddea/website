const elements = require("elements");
const containers = require("./_data/containers.json");
const maxWidth = require("./_data/max_width.json");
const buffer = require("./_data/buffer.json");

function hero(subtitle, title, accent, text, linkText, link) {
let template = `
<div class="hero">
<div class="hero__spacer-top"></div>
<section>
<div class="hero__inner">
${elements.responsive.call(this)}
${elements.container.call(this, containers, "100_100_100_40_40")}
<div class="hero__content">
<p>
${subtitle}
</p>
<div class="side-border-title">
<h1>
${title} <span class="font-weight-800">${accent}</span>
</h1>
</div>
<div class="spacer-24"></div>
<div class="p-l-24">
<p>
${text}
</p>
<div class="spacer-24"></div>
${elements.buffer.call(this, buffer)}
<a class="button-1" href="${link}">${linkText}</a>
${elements.end_buffer.call(this)}
</div>
</div>
${elements.end_container.call(this)}
${elements.container.call(this, containers, "100_100_100_60_60")}
${elements.end_container.call(this)}
${elements.end_responsive.call(this)}
</div>
</section>
</div>
`

  return template;
}

function services(title, accent, cards) {
  let cardsString = ``;
  for (cardItem of cards) {
cardsString += `
${elements.container.call(this, containers, "100_100_50_50_50")}
<div class="card">
<div class="card__spacer-top"></div>
<div class="card__inner">
<h3 class="h2">
${cardItem.title}
</h3>
<div class="card__spacer-inner-1"></div>
<p>
${cardItem.text}
</p>
<div class="card__spacer-inner-2"></div>
<div class="mt-auto">
${elements.buffer.call(this, buffer)}
<a class="button-1" href="${cardItem.link}">${cardItem.linkText}</a>
${elements.end_buffer.call(this)}
</div>
</div>
<div class="card__spacer-bottom"></div>
</div>
${elements.end_container.call(this)}
`;
}


  let template = `
  <div class="services">
  <section>
  <div class="services__bg"></div>
  <div class="services__spacer-top"></div>
  ${elements.responsive.call(this)}
  ${elements.container.call(this, containers, "100_100_50_40_40")}
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_50_60_60")}
  <div class="side-border-title side-border-title--sub">
  <h2 class="h1">${title} <span class="font-weight-800">${accent}</span></h2>
  </div>
  ${elements.end_container.call(this)}
  ${elements.end_responsive.call(this)}
  <div class="services__spacer-inner-1"></div>
  ${elements.responsive.call(this)}
  ${elements.container.call(this, containers, "100_100_100_40_40")}
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_100_60_60")}
  <div class="services__content">
  
  ${elements.responsive.call(this)}
  
  ${cardsString}
  
  ${elements.end_responsive.call(this)}
  
  </div>
  ${elements.end_container.call(this)}
  ${elements.end_responsive.call(this)}
  <div class="services__spacer-bottom"></div>
  </section>
  </div>
  `
    return template;
  }

function proposal(title, text1, text2,) {
  let template = `
  ${elements.max_width.call(this, maxWidth)}
  <div class="proposal">
  <section >
  ${elements.responsive.call(this)}
  ${elements.container.call(this, containers, "100_100_100_35_35")}
  <div class="proposal__heading">
  <h2 class="h1">${title}</h2>
  </div>
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_100_65_65")}
  <div class="proposal__content">
  <div class="proposal__spacer-top"></div>
  <p>
  ${text1}
  </p>
  <div class="proposal__content-spacer-inner">
  </div>
  <p>
  ${text2}
  </p>
  <div class="proposal__spacer-bottom"></div>
  </div>
  ${elements.end_container.call(this)}
  ${elements.end_responsive.call(this)}
  </section>
  </div>
  ${elements.end_max_width.call(this)}`
  
  return template;
}

function banner(title, accent, linkText, link) {
let template = `
${elements.max_width.call(this, maxWidth)}
<div class="banner">
<section>
<div class="banner__spacer-top"></div>
<div class="banner__max-width">
<h2 class="h3 text-center text-white">
${title} <span class="font-weight-600">${accent}</span>
</h2>
<div class="spacer-16"></div>
<div class="mt-auto mx-auto">
${elements.buffer.call(this, buffer)}
<a class="button-2" href="${link}">${linkText}</a>
${elements.end_buffer.call(this)}
</div>
</div>
<div class="banner__spacer-bottom"></div>
</section>
</div>
${elements.end_max_width.call(this)}`

  return template;
}

function card(title, text, linkText, link) {
let template = `
${elements.container.call(this, containers, "100_100_50_50_50")}
<div class="card">
<div class="card__spacer-top"></div>
<div class="card__inner">
<h3 class="h2">
${title}
</h3>
<div class="card__spacer-inner-1"></div>
<p>
${text}
</p>
<div class="card__spacer-inner-2"></div>
<div class="mt-auto">
${elements.buffer.call(this, buffer)}
<a class="button-1" href="${link}">${linkText}</a>
${elements.end_buffer.call(this)}
</div>
</div>
<div class="card__spacer-bottom"></div>
</div>
${elements.end_container.call(this)}`

  return template;
}

function contact_us(title, buttonText, subtitle, address, link) {
  let template = `
  <div class="contact-us">
  <section>
  ${elements.max_width.call(this, maxWidth)}
  ${elements.buffer.call(this, buffer, "max_width" )}
  <div class="contact-us__spacer-top"></div>
  <h2 class="text-white">
  ${title}
  </h2>
  <div class="contact-us__spacer-inner-1"></div>
  ${elements.responsive.call(this)}
  ${elements.container.call(this, containers, "100_100_100_50_50")}
  <form>
  ${elements.responsive.call(this)}
  ${elements.container.call(this, containers, "100_50_50_50_50")}
  ${elements.buffer.call(this, buffer)}
  <label class="visually-hidden">Enter your name</label>
  <input type="text" placeholder="Name" class="field" name="user-name" id="user-name">
  ${elements.end_buffer.call(this)}
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_50_50_50_50")}
  ${elements.buffer.call(this, buffer)}
  <label class="visually-hidden">Enter your mail</label>
  <input type="email" placeholder="Email" class="field" name="user-email" id="user-email">
  ${elements.end_buffer.call(this)}
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_100_100_100")}
  ${elements.buffer.call(this, buffer)}
  <textarea class="field"></textarea>
  ${elements.end_buffer.call(this)}
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_100_100_100")}
  ${elements.responsive.call(this)}
  <div class="float-right ml-auto">
  ${elements.buffer.call(this, buffer)}
  <button type="submit" class="button-2">${buttonText}</button>
  ${elements.end_buffer.call(this)}
  </div>
  ${elements.end_responsive.call(this)}
  ${elements.end_container.call(this)}
  ${elements.end_responsive.call(this)}
  </form>
  ${elements.end_container.call(this)}
  ${elements.container.call(this, containers, "100_100_100_50_50")}
  <div class="contact-us__address">
  <address>
  <h3 class="text-white p">${subtitle}</h3>
  <div class="contact-us__address-spacer"></div>
  <a class="p" href="${link}" target="_blank">
  ${address}
  </a>
  </address>
  </div>
  ${elements.end_container.call(this)}
  ${elements.end_responsive.call(this)}
  <div class="contact-us__spacer-bottom"></div>
  ${elements.end_buffer.call(this)}
  ${elements.end_max_width.call(this)}
  </section>
  </div>`

  return template;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js/**/*.js");
  eleventyConfig.addPassthroughCopy("css/**/*.css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addShortcode("max_width", elements.max_width);
  eleventyConfig.addShortcode("end_max_width", elements.end_max_width);
  eleventyConfig.addShortcode("buffer", elements.buffer);
  eleventyConfig.addShortcode("end_buffer", elements.end_buffer);
  eleventyConfig.addShortcode("responsive", elements.responsive);
  eleventyConfig.addShortcode("end_responsive", elements.end_responsive);
  eleventyConfig.addShortcode("container", elements.container);
  eleventyConfig.addShortcode("end_container", elements.end_container);
  eleventyConfig.addAsyncShortcode("picture", elements.picture);
  eleventyConfig.addAsyncShortcode("pictureSvgPng", elements.pictureSvgPng);

  // design-system
  eleventyConfig.addShortcode("assets_block", elements.designSystem.assets_block);
  eleventyConfig.addShortcode("color_block", elements.designSystem.color_block);
  eleventyConfig.addShortcode("ui_kit_block", elements.designSystem.ui_kit_block);


  // project shortcodes
  eleventyConfig.addShortcode("hero", hero);
  eleventyConfig.addShortcode("banner", banner);
  eleventyConfig.addShortcode("proposal", proposal);
  eleventyConfig.addShortcode("card", card);
  eleventyConfig.addShortcode("contact_us", contact_us);
  eleventyConfig.addShortcode("services", services);

}