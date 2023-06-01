// IMPORTS
import { servicesData } from '../../data/servicesData.js';
import { socialMetricsData } from '../../data/socialMetricsData.js';
import { services } from '../components/services.js';
import { socialMetrics } from '../components/socialMetrics.js';

// EXECUTION

/* SOCIAL METRICS: start */

const res = socialMetrics('#metrics_block', socialMetricsData);
const [isError, msg] = res;

if (isError) {
    console.error(msg);
} else {
    console.log(msg);
}

/* SOCIAL METRICS: end */

/* HEADER: start */
/* HEADER: end */

/* HERO: start */
/* HERO: end */

/* ABOUT ME: start */
/* ABOUT ME: end */

/* SERVICES: start */

services('services_block', servicesData);

/* SERVICES: end */

/* RESUME: start */
/* RESUME: end */

/* FREELANCE: start */
/* FREELANCE: end */

/* PORTFOLIO: start */
/* PORTFOLIO: end */

/* TESTIMONIALS: start */
/* TESTIMONIALS: end */

/* BLOGS: start */
/* BLOGS: end */

/* CONTACT: start */
/* CONTACT: end */

/* FOOTER: start */
/* FOOTER: end */
