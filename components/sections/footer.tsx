import Link from "next/link";
import { Container } from "@/components/ui/container";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/5514990000000" }
];

export function Footer() {
  return (
    <footer className="bg-[#111811] py-10 text-sand-50/75">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-sand-50">Atelier Cafe</p>
          <p className="mt-2 text-sm text-sand-50/65">Cafeteria e restaurante contemporaneo premium.</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-gold-300">Contato</p>
          <p className="mt-2 text-sm">Rua das Acacias, 245 - Centro, Bauru - SP</p>
          <p className="mt-1 text-sm">(14) 90000-0000</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-gold-300">Funcionamento</p>
          <p className="mt-2 text-sm">Seg a Qui: 08:00 - 22:00</p>
          <p className="mt-1 text-sm">Sex e Sab: 08:00 - 23:30</p>
          <p className="mt-1 text-sm">Dom: 09:00 - 18:00</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-gold-300">Social</p>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-gold-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-sand-50/10 pt-5 text-xs text-sand-50/45">
        <p>(c) {new Date().getFullYear()} Atelier Cafe. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
