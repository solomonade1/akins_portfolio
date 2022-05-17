import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'tczabs4y',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: 'sk9o2nDXL2bNxQgFDmGdbyOVbuyVqyHV1knuKAiJKIY8fvPZHOoQNMpuyQta0IR0pwGvLVPYhjJEcqDdXTXdgrxtCfdPyocx8ifnXRGb3hzu5dI26rUo2PPtV8NBZ5Wt3rZi84FDQmSQlT9qLCLBfS4HaZP0R36fnhQJrs9RK7vxclBUgV7n'
});
console.log("Project Id", process.env.REACT_APP__SANITY_PROJECT_ID)

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)