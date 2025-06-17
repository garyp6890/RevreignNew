import React from 'react';
import { useMerchandise } from '../hooks/useMerchandise';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import MerchCard from '../components/MerchCard';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

const Merchandise: React.FC = () => {
  const { merchandise, loading, error } = useMerchandise();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-rev-brown mb-4">
            Unable to load merchandise
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <Section bgColor="light" padding="lg">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
            Caveman Collection
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Show your support with our exclusive Caveman-themed merchandise. Each purchase helps fuel more automotive content!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {merchandise.map(item => (
            <MerchCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.image}
              price={item.price}
              buyLink={item.buyLink}
              shopifyProductId={item.shopifyProductId}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Merchandise;