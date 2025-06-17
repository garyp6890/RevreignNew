import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface TemplateData {
  enabled: boolean;
  title: string;
  intro?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  developerSettings?: {
    warning: string;
    experimentalFeatureToggle: boolean;
  };
}

const TemplatePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<TemplateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    // Dynamically import the JSON file from src/data/templates/{slug}.json
    import(`../data/templates/${slug}.json`)
      .then((module) => {
        const templateData: TemplateData = (module as any).default || module;
        if (!templateData.enabled) {
          setNotFound(true);
        } else {
          setData(templateData);
        }
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rev-orange"></div>
      </div>
    );
  }

  if (notFound || !data) {
    // You can also render a 404 component instead of redirect
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
          {data.title}
        </h1>

        {/* Intro Text */}
        {data.intro && (
          <p className="text-gray-700 mb-6 max-w-3xl">{data.intro}</p>
        )}

        {/* Body: Markdown */}
        {data.body && (
          <div className="prose max-w-3xl mb-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body}</ReactMarkdown>
          </div>
        )}

        {/* CTA Button */}
        {data.ctaText && data.ctaLink && (
          <div className="mt-8">
            <a
              href={data.ctaLink}
              className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-3 px-6 rounded inline-flex items-center transition-colors"
            >
              {data.ctaText}
            </a>
          </div>
        )}

        {/* Developer Warning (if any) */}
        {data.developerSettings?.experimentalFeatureToggle && (
          <div className="mt-12 border-l-4 border-rev-orange pl-4 text-rev-brown">
            <strong>Developer Warning:</strong> {data.developerSettings.warning}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatePage;