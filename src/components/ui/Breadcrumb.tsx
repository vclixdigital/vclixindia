import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/' }];

    const nameMap: Record<string, string> = {
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      'privacy-policy': 'Privacy Policy',
      terms: 'Terms of Service',
      'search-engine-optimization': 'Search Engine Optimization',
      'local-seo': 'Local SEO',
      'google-business-profile-optimization': 'Google Business Profile',
      'technical-seo': 'Technical SEO',
      'website-seo-audit': 'Website SEO Audit',
      'keyword-research': 'Keyword Research',
      'content-optimization': 'Content Optimization',
      'website-speed-optimization': 'Website Speed Optimization',
      'social-media-management': 'Social Media Management',
      'graphic-design': 'Graphic Design',
      'digital-marketing-strategy': 'Digital Marketing Strategy',
    };

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      breadcrumbs.push({
        name: nameMap[segment] || segment.replace(/-/g, ' '),
        href: index === pathSegments.length - 1 ? undefined : href,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `https://vclix.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-secondary-400" />}
              {item.href ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-secondary-500 hover:text-primary-600 transition-colors"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <span className="text-primary-600 font-medium flex items-center gap-1">
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
