const Image = require("@11ty/eleventy-img");
const elements = require("elements");

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
  eleventyConfig.addAsyncShortcode("picturePngWebp", picturePngWebp);

  // design-system
  eleventyConfig.addShortcode("assets_block", elements.designSystem.assets_block);
  eleventyConfig.addShortcode("color_block", elements.designSystem.color_block);
  eleventyConfig.addShortcode("ui_kit_block", elements.designSystem.ui_kit_block);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
