'use client'

import Link from 'next/link';
import { PlusCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavBar() {

  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Nombre de la aplicación (izquierda) */}
          <Link href="/" className="text-xl font-bold">
            <p>Made <span className='text-purple-700'>In Church</span></p>
          </Link>

          {/* Cruz cristiana (centro) */}
          <div className="sm:flex hidden items-center justify-center flex-1">
            <div className="relative w-8 h-8">
              <Image
                src="/icon.png"
                alt="Logo"
                width={32}
                height={32}
                />
            </div>
          </div>

          {/* Botones (derecha) */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-1 cursor-pointer" onClick={() => router.push('/kids')}>
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline-block">Buscar</span>
            </Button>
            
            <Button size="sm" className="gap-1 bg-purple-600 hover:bg-purple-700 cursor-pointer">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline-block">Agregar</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}