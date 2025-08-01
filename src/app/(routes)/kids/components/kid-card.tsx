/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Kid, VisitorFrom } from "@/types/kid";

export default function KidCard({ kid }: { kid: Kid }) {
  return ( 
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="relative h-48 w-full mb-4">
          <img
            src={`http://localhost:1337/admin${kid.image.formats.medium.url}`}
            alt={`${kid.name} ${kid.lastName}`}
            className="object-cover w-full h-full"
            width={320}
            height={256}
            loading="lazy"
          />
        </div>
        <CardTitle className="text-center">
          {kid.name} {kid.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Edad:</span> {kid.age} años
          </p>
          <p>
            <span className="font-semibold">Fecha de nacimiento:</span> {new Date(kid.birthDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">Grado:</span> {kid.lastGrade}
          </p>
          <p>
            <span className="font-semibold">Tutor:</span> {kid.tutorName}
          </p>
          <p>
            <span className="font-semibold">Teléfono:</span> {kid.phoneNumber}
          </p>
          <p>
            <span className="font-semibold">Procedencia:</span>{' '}
            {kid.visitorFrom === VisitorFrom.iglesia ? 'Iglesia' : 'Nuevo'}
          </p>
        </div>
      </CardContent>
    </Card>
   );
} 