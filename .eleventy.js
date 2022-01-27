const Image = require("@11ty/eleventy-img");

function getWidthStack(page) {
  if (!page.screenWidthStack) {
    page.screenWidthStack = [];
  }
  return page.screenWidthStack;
}

function pushOnWidthStack(page, params) {
  let stack = getWidthStack(page);
  stack.push(params);
}

function pushAdaptiveOnWidthStack(page, coefficients) {
  pushOnWidthStack(page, { adaptive: coefficients });
}

function popFromWidthStack(page) {
  let stack = getWidthStack(page);
  if (stack.length) {
      stack.length--;
  }
}

function pushMaxWidthOnWidthStack(page, maxWidth) {
  pushOnWidthStack(page, {maxWidth: maxWidth});
}

function pushGapOnWidthStack(page, unusedSpaceWidth) {
  if(typeof(unusedSpaceWidth) === 'object') {
    let obj = JSON.parse(JSON.stringify(unusedSpaceWidth)); 
    for (let key in obj) {
      if(key === 'padding') {
        obj[key] *= 2;
      } else if (key === 'phone' || key === 'tablet' || key === 'laptop' || key === 'desktop') {
        obj[key]["padding"] *= 2;
      }
    }
    pushOnWidthStack(page, {gap: obj});
  }
}

function max_width(max_width) {
  pushMaxWidthOnWidthStack(this.page, max_width.max_width);
  pushGapOnWidthStack(this.page, max_width.gap);
  return `<div class="max-width">`;
}

function end_max_width() {
  popFromWidthStack(this.page); // padding
  popFromWidthStack(this.page); // max-width
  return `</div>`;
}

function buffer(bufferData, bufferClass) {
  let bufferType = '';
  
  if(typeof bufferClass === "undefined") {
    pushGapOnWidthStack(this.page, bufferData.default);
    bufferType = 'buffer-default';
  } else {
    pushGapOnWidthStack(this.page, bufferData[bufferClass]);
    bufferType = 'buffer-' + bufferClass;
  }
  return `<div class="${bufferType}">`;
}

function end_buffer() {
  popFromWidthStack(this.page);
  return `</div>`;
}

function responsive() {
  return `<div class="responsive">`;
}

function end_responsive() {
  return `</div>`;
}

function container(data, params) {
  pushAdaptiveOnWidthStack(this.page, data[params]);
  return `<div class="container-${params}">`;
}

function end_container() {
  popFromWidthStack(this.page);
  return `</div>`;
}

async function pictureSvgPng(src, alt, width, height) {
  if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  
  let metadata = await Image(src, {
      formats: ['png', 'svg'],
      outputDir: './_site/img'
  });

  // TODO: figure out that loading="lazy" decoding="async"
  // TODO: set image name like param
  
  return `<picture>
              <source type="image/svg+xml" srcset="${metadata.svg[0].url}">
              <img src="${metadata.png[0].url}" width="${width}" height="${height}" alt="${alt}">
          </picture>`;
}

async function picturePngWebp(src, alt, width, height) {
  if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  
  let metadata = await Image(src, {
      formats: ['png', 'webp'],
      outputDir: './_site/img'
  });

  // TODO: figure out that loading="lazy" decoding="async"
  // TODO: set image name like param
  
  return `<picture>
              <source type="image/webp" srcset="${metadata.webp[0].url}">
              <img src="${metadata.png[0].url}" width="${width}" height="${height}" alt="${alt}">
          </picture>`;
}

function color_block(containerData, theme, color, label) {
  let output = `
  ${container.call(this, containerData, "100_50_33_33_33")}
  <div class="color-block">
  <div class="color-block__inner">
  <div style="background-color: ${ color };">
  <div class="color-block__buffer">
  <p class="color-block__label" style="color: ${ label };">
  ${ theme }
  </p>
  <div style="padding-top: 40px"></div>
  <p class="color-block__hex" style="color: ${ label };">
  ${ color }
  </p>
  </div>
  </div>
  </div>
  </div>
  ${end_container.call(this)}
  `;
  return output;
  }
  
  function assets_block(containerData, src, width, height, alt) {
  let output = `
  ${container.call(this, containerData, "100_50_33_33_33")}
  <div class="assets-block">
  <div class="assets-block__inner">
  <div class="assets-block__buffer">
  <img src="${src}" width="${width}" height="${height}" alt="${alt}">
  </div>
  </div>
  </div>
  ${end_container.call(this)}
  `;
  return output;
  }
  
  function ui_kit_block(containerData, name, type, bg='#FFFFFF') {
  let elem = {
  template: '',
  class: name,
  text: 'Rest'
  }
  
  function linkRewrite() {
  if(type === 'link') {
  elem.template = `<a class="${elem.class}" href="#">${elem.text}</a>`;
  } else if (type === 'button') {
  elem.template = `<button class="${elem.class}" type="button"></button>`;
  }  
  }
  
  linkRewrite();
  
  let output = `${container.call(this, containerData, "100_50_33_33_33")}
  <div class="ui-kit-block">
  <div class="ui-kit-block__inner" style="background-color: ${bg}">
  <div class="ui-kit-block__buffer">
  ${elem.template}
  </div>
  </div>
  </div>
  ${end_container.call(this)}`;
  
  elem.class = name + ' hover';
  elem.text = 'Hover';
  
  linkRewrite();
  
  output += `${container.call(this, containerData, "100_50_33_33_33")}
  <div class="ui-kit-block">
  <div class="ui-kit-block__inner" style="background-color: ${bg}">
  <div class="ui-kit-block__buffer">
  ${elem.template}
  </div>
  </div>
  </div>
  ${end_container.call(this)}`;
  
  elem.class = name + ' active';
  elem.text = 'Pressed';
  
  linkRewrite();
  
  output += `${container.call(this, containerData, "100_50_33_33_33")}
  <div class="ui-kit-block">
  <div class="ui-kit-block__inner" style="background-color: ${bg}">
  <div class="ui-kit-block__buffer">
  ${elem.template}
  </div>
  </div>
  </div>
  ${end_container.call(this)}`;
  
  elem.class = name + ' focus';
  elem.text = 'Focused';
  
  linkRewrite();
  
  output += `${container.call(this, containerData, "100_50_33_33_33")}
  <div class="ui-kit-block">
  <div class="ui-kit-block__inner" style="background-color: ${bg}">
  <div class="ui-kit-block__buffer">
  ${elem.template}
  </div>
  </div>
  </div>
  ${end_container.call(this)}`;
  
  return output;
  }

module.exports = function (eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  const md = markdownIt(markdownItOptions)
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', (markdownString) => md.render(markdownString));

  eleventyConfig.addPairedShortcode("markdown", (content) => md.renderInline(content));

  eleventyConfig.addPassthroughCopy("js/**/*.js");
  eleventyConfig.addPassthroughCopy("css/**/*.css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addShortcode("max_width", max_width);
  eleventyConfig.addShortcode("end_max_width", end_max_width);
  eleventyConfig.addShortcode("buffer", buffer);
  eleventyConfig.addShortcode("end_buffer", end_buffer);
  eleventyConfig.addShortcode("responsive", responsive);
  eleventyConfig.addShortcode("end_responsive", end_responsive);
  eleventyConfig.addShortcode("container", container);
  eleventyConfig.addShortcode("end_container", end_container);
  eleventyConfig.addAsyncShortcode("pictureSvgPng", pictureSvgPng);
  eleventyConfig.addAsyncShortcode("picturePngWebp", picturePngWebp);

  // design-system
  eleventyConfig.addShortcode("assets_block", assets_block);
  eleventyConfig.addShortcode("color_block", color_block);
  eleventyConfig.addShortcode("ui_kit_block", ui_kit_block);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
