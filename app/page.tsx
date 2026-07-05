import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] py-20">
      <Container>
        <h1 className="text-6xl text-[#132644]">
          JANANI 2026
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Honouring Mothers • Empowering Women • Building Nations
        </p>

        <div className="mt-10">
          <Button>Register Now</Button>
        </div>
      </Container>
    </main>
  );
}