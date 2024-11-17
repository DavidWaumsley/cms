// https://hamatti.org/posts/how-i-teach-eleventy-from-scratch/
function blogDate(input) {
  return `${new Date(input).toLocaleString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}


export default async function(eleventyConfig) {

  eleventyConfig.addFilter('blogDate', blogDate);
  eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
	return {
    dir: {
      input: "src",   
    }
  };
  
};

