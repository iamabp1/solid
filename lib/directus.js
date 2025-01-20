import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://api-2.codeum.org').with(rest());

export default directus;