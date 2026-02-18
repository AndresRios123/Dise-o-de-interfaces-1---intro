import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-80 overflow-hidden rounded-xl border border-red-300 bg-white shadow-md">
        
        {/* Imagen */}
        <div className="relative h-36 w-full">
          <Image
            src="/mountains.png"   // pon tu imagen en public/
            alt="Red Heaven"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Red Heaven
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus quia, nulla! Maiores et perferendis eaque, 
            exercitationem praesentium nihil.
          </p>

          {/* Tags */}
          <div className="flex gap-2 pt-1">
            <span className="bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
              #tailwind
            </span>
            <span className="bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
              #frontendverything
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
