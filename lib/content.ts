import { Coffee, Croissant, Gem, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MenuCategory = {
  name: string;
  items: Array<{
    title: string;
    description: string;
    price: string;
  }>;
};

export const navItems: NavItem[] = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Cardapio", href: "#menu" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Localizacao", href: "#localizacao" }
];

export const gastronomicHighlights = [
  {
    eyebrow: "Brunch de assinatura",
    title: "Ingredientes locais, tecnica refinada e tempo desacelerado.",
    description:
      "Nosso brunch foi desenhado para transformar manhas comuns em rituais memoraveis, com paes de fermentacao natural, ovos em coccoes precisas e combinacoes sazonais autorais.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mesa de brunch artesanal com paes e frutas"
  },
  {
    eyebrow: "Cafe de origem",
    title: "Extraimos cada xicara com curadoria sensorial de alto nivel.",
    description:
      "Trabalhamos com graos especiais de microprodutores e metodos de preparo que destacam notas aromaticas complexas, mantendo equilibrio entre acidez, dulcor e textura.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Barista preparando cafe especial"
  },
  {
    eyebrow: "Cozinha artesanal",
    title: "Pratos contemporaneos que celebram simplicidade sofisticada.",
    description:
      "Da primeira entrada ao ultimo detalhe de finalizacao, a cozinha combina tecnicas classicas e criatividade moderna para entregar uma experiencia gastronomica exclusiva e acolhedora.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Prato autoral com finalizacao elegante"
  }
];

export const features: FeatureItem[] = [
  {
    icon: Coffee,
    title: "Cafes especiais",
    description:
      "Selecao rotativa de microlotes com torra fresca e preparo tecnico impecavel."
  },
  {
    icon: Croissant,
    title: "Brunch artesanal",
    description:
      "Receitas autorais, fermentacao natural e ingredientes sazonais de alta qualidade."
  },
  {
    icon: Sparkles,
    title: "Ambiente sofisticado",
    description:
      "Arquitetura sensorial, iluminacao acolhedora e trilha sonora curada para cada momento."
  },
  {
    icon: Gem,
    title: "Experiencia exclusiva",
    description:
      "Atendimento consultivo e detalhes personalizados para transformar sua visita em memoria."
  }
];

export const menuCategories: MenuCategory[] = [
  {
    name: "Cafes especiais",
    items: [
      {
        title: "V60 Origem Unica",
        description: "Notas de mel, citricos e finalizacao limpa",
        price: "R$ 24"
      },
      {
        title: "Flat White Boutique",
        description: "Blend cremoso com textura aveludada",
        price: "R$ 21"
      },
      {
        title: "Espresso Reserva",
        description: "Extracao curta com perfil intenso e elegante",
        price: "R$ 14"
      }
    ]
  },
  {
    name: "Brunch",
    items: [
      {
        title: "Toast de Salmao Curado",
        description: "Pao rustico, creme citrico e ervas frescas",
        price: "R$ 52"
      },
      {
        title: "Ovos Trufados",
        description: "Ovos cremosos, brioche tostado e cogumelos",
        price: "R$ 48"
      },
      {
        title: "Bowl Mediterraneo",
        description: "Graos, vegetais assados e iogurte artesanal",
        price: "R$ 44"
      }
    ]
  },
  {
    name: "Sobremesas",
    items: [
      {
        title: "Entremet de Pistache",
        description: "Camadas leves com final de flor de sal",
        price: "R$ 34"
      },
      {
        title: "Tarte de Cacau 70%",
        description: "Ganache intensa e creme anglaise de baunilha",
        price: "R$ 32"
      },
      {
        title: "Cheesecake de Baunilha",
        description: "Base amanteigada com calda de frutas vermelhas",
        price: "R$ 30"
      }
    ]
  },
  {
    name: "Pratos exclusivos",
    items: [
      {
        title: "Ravioli de Ricota Defumada",
        description: "Molho de manteiga noisette e amendoas tostadas",
        price: "R$ 69"
      },
      {
        title: "File ao Cafe",
        description: "Reducao aromatica, pure de raiz e legumes glaceados",
        price: "R$ 84"
      },
      {
        title: "Risoto de Graos Antigos",
        description: "Queijo curado, crocante de alho-poro e ervas",
        price: "R$ 66"
      }
    ]
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Ambiente interno com iluminacao aconchegante",
    className: "sm:col-span-2 sm:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    alt: "Prato sofisticado servido em louca artesanal",
    className: "sm:col-span-1 sm:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    alt: "Barista servindo cafe filtrado",
    className: "sm:col-span-1 sm:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    alt: "Mesa elegante com brunch completo",
    className: "sm:col-span-1 sm:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Detalhes de confeitaria premium",
    className: "sm:col-span-2 sm:row-span-1"
  }
];

export const operatingHours = [
  { day: "Segunda a Quinta", hours: "08:00 - 22:00" },
  { day: "Sexta e Sabado", hours: "08:00 - 23:30" },
  { day: "Domingo", hours: "09:00 - 18:00" }
];
