'use client';

// Define service categories
export const SERVICE_CATEGORIES = [
  {
    id: 'web-design',
    name: 'Web Dev',
    order: 1,
  },
  {
    id: 'backend',
    name: 'Backend',
    order: 2,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    order: 3,
  },
  {
    id: 'consulting',
    name: 'Consulting',
    order: 4,
  },
];

// Define service interface
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  content?: string;
}

// Define all services
export const SERVICES: Service[] = [
  // Web Design & Development services
  {
    id: 'custom-website-design',
    name: 'Custom Website Design',
    description: 'Beautiful, strategic designs that reflect your brand and engage your audience',
    category: 'web-design',
  },
  {
    id: 'frontend-development',
    name: 'Frontend Development',
    description:
      'Responsive, modern interfaces using React, Next.js, and other cutting-edge frameworks',
    category: 'web-design',
  },
  {
    id: 'ux-ui-design',
    name: 'UX/UI Design',
    description: 'User-centered interfaces that enhance engagement and conversion',
    category: 'web-design',
  },
  {
    id: 'responsive-web-design',
    name: 'Responsive Web Design',
    description: 'Websites that look and function perfectly across all devices',
    category: 'web-design',
  },
  {
    id: 'cms-implementation',
    name: 'CMS Implementation',
    description: 'WordPress and other content management systems customized for your workflow',
    category: 'web-design',
  },
  {
    id: 'web-performance-optimization',
    name: 'Web Performance Optimization',
    description: 'Fast-loading, efficient websites that rank higher and convert better',
    category: 'web-design',
  },

  // Backend & Custom Applications services
  {
    id: 'custom-web-applications',
    name: 'Custom Web Applications',
    description: 'Tailored solutions built to address your unique business challenges',
    category: 'backend',
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    description: 'Robust, scalable server-side solutions with Node.js, Python, and more',
    category: 'backend',
  },
  {
    id: 'api-development',
    name: 'API Development & Integration',
    description: 'Seamless connections between your systems and third-party services',
    category: 'backend',
  },
  {
    id: 'database-design',
    name: 'Database Design & Management',
    description: 'Efficient data structures that power your applications',
    category: 'backend',
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Scalable infrastructure using AWS, Google Cloud, or Azure',
    category: 'backend',
  },
  {
    id: 'devops',
    name: 'DevOps & Continuous Integration',
    description: 'Automated testing and deployment pipelines for reliable delivery',
    category: 'backend',
  },

  // E-commerce services
  {
    id: 'custom-ecommerce',
    name: 'Custom E-commerce Solutions',
    description: 'Tailored online stores built for your specific business model',
    category: 'ecommerce',
  },
  {
    id: 'shopify-development',
    name: 'Shopify Development',
    description: 'Custom themes, apps, and integrations for the Shopify platform',
    category: 'ecommerce',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce Implementation',
    description: 'WordPress-based e-commerce solutions with extensive customization',
    category: 'ecommerce',
  },
  {
    id: 'payment-gateway',
    name: 'Payment Gateway Integration',
    description: 'Secure, seamless transaction processing for your customers',
    category: 'ecommerce',
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management Systems',
    description: 'Tools to track and manage your product inventory efficiently',
    category: 'ecommerce',
  },
  {
    id: 'ecommerce-analytics',
    name: 'E-commerce Analytics',
    description: "Data-driven insights to optimize your online store's performance",
    category: 'ecommerce',
  },

  // Consulting services
  {
    id: 'technical-audits',
    name: 'Technical Audits',
    description: 'Comprehensive analysis and optimization of existing solutions',
    category: 'consulting',
  },
  {
    id: 'digital-strategy',
    name: 'Digital Strategy',
    description: 'Planning and implementing digital transformation roadmaps',
    category: 'consulting',
  },
  {
    id: 'technology-workshops',
    name: 'Technology Workshops',
    description: 'Training sessions on emerging technologies and best practices',
    category: 'consulting',
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    description: 'Long-term maintenance and development of technology projects',
    category: 'consulting',
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    description: 'Improving speed, efficiency, and user experience of existing systems',
    category: 'consulting',
  },
];

// Utility function to get services by category
export function getServicesByCategory(categoryId: string): Service[] {
  return SERVICES.filter((service) => service.category === categoryId);
}

// Hook for services data
export function useServiceData() {
  return {
    categories: SERVICE_CATEGORIES,
    services: SERVICES,
    getServicesByCategory,
  };
}
