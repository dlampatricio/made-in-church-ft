'use client'

import { Kid } from '@/types/kid';
import { Response } from '@/types/response';
import useFetchKids from '@/hooks/useFetchKids';
import KidCard from './components/kid-card';
import KidSkeleton from './components/kid-skeleton';
import ErrorMessage from './components/error-message';
import EmptyState from './components/empty-state';

export default function KidsPage() {
  const { loading, result, error }: Response = useFetchKids();
  const kids: Kid[] = result || [];

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Nuestros <span className="text-purple-700">Niños</span>
      </h1>
      
      {loading ? (
        <KidSkeleton />
      ) : kids.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kids.map((kid) => (
            <KidCard key={kid.slug} kid={kid} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}