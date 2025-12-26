import Image from 'next/image';

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a1628] p-6">
      <div className="w-full max-w-4xl">
        <Image
          src="/maintenance.png"
          alt="Site em Manutenção"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}

