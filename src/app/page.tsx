import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-5 py-8 box-border lg:flex-row lg:px-[10%] lg:py-12 lg:gap-16">
      {/* Text Content - Siempre arriba en móvil, izquierda en desktop */}
      <div className="w-full max-w-2xl text-center p-4 mb-8 lg:text-left lg:p-8 lg:flex-1 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-800 font-sans tracking-tight">
          Bienvenido a <span className="text-purple-700 block mt-2">Made In Church</span>
        </h1>
      </div>

      {/* Image Container - Siempre abajo en móvil, derecha en desktop */}
      <div className="w-full max-w-[500px] flex justify-center lg:max-w-2xl lg:flex-1">
        <div className="relative w-full aspect-square max-w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/homeImage.jpg"
            alt="Made In Church"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}