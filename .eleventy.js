const elements = require("elements");

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
}