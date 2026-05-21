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
    eyebrow: "Brunch levantino",
    title: "Tradicao de mesa farta reinterpretada com tecnica contemporanea.",
    description:
      "Nosso brunch traduz a heranca arabe de partilha e hospitalidade em composicoes leves, com paes artesanais, cremes condimentados e ingredientes sazonais preparados com precisao.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mesa de brunch artesanal com paes e frutas"
  },
  {
    eyebrow: "Cafe e especiarias",
    title: "Aromas de cardamomo, flor de laranjeira e graos de origem em equilibrio.",
    description:
      "Trabalhamos com graos especiais e metodos de extracao precisos, harmonizando notas classicas do cafe com especiarias sutis para uma experiencia sensorial elegante.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Barista preparando cafe especial"
  },
  {
    eyebrow: "Cozinha arabe contemporanea",
    title: "Receitas de raiz cultural com apresentacao minimalista e refinada.",
    description:
      "Da primeira entrada ao toque final, a cozinha honra sabores tradicionais do levante com tecnica moderna, especiarias equilibradas e texturas envolventes.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Prato autoral com finalizacao elegante"
  }
];

export const features: FeatureItem[] = [
  {
    icon: Coffee,
    title: "Cafes e infusoes",
    description:
      "Graos especiais e infusoes aromaticas com notas de cardamomo, canela e florais delicados."
  },
  {
    icon: Croissant,
    title: "Brunch levantino",
    description:
      "Receitas autorais inspiradas na tradicao arabe, com ingredientes sazonais e execucao contemporanea."
  },
  {
    icon: Sparkles,
    title: "Atmosfera sofisticada",
    description:
      "Luz intimista, materiais naturais e detalhes geometricos sutis para um ambiente acolhedor."
  },
  {
    icon: Gem,
    title: "Hospitalidade exclusiva",
    description:
      "Atendimento atencioso e personalizado para transformar cada visita em memoria afetiva."
  }
];

export const menuCategories: MenuCategory[] = [
  {
    name: "Cafes e infusoes",
    items: [
      {
        title: "Espresso com Cardamomo",
        description: "Extracao curta com especiaria sutil e final quente",
        price: "R$ 18"
      },
      {
        title: "Latte Flor de Laranjeira",
        description: "Leite vaporizado e perfume floral elegante",
        price: "R$ 23"
      },
      {
        title: "Cafe Filtrado da Casa",
        description: "Torra media com notas de cacau e frutas secas",
        price: "R$ 24"
      }
    ]
  },
  {
    name: "Brunch contemporaneo",
    items: [
      {
        title: "Shakshuka Delicada",
        description: "Ovos, tomate condimentado e pao artesanal",
        price: "R$ 54"
      },
      {
        title: "Toast de Labneh e Zaatar",
        description: "Pao de fermentacao natural e ervas aromaticas",
        price: "R$ 49"
      },
      {
        title: "Halloumi Grelhado com Mel",
        description: "Queijo dourado, figos e sementes tostadas",
        price: "R$ 56"
      }
    ]
  },
  {
    name: "Sobremesas",
    items: [
      {
        title: "Mousse de Pistache",
        description: "Creme leve com toque de agua de rosas",
        price: "R$ 36"
      },
      {
        title: "Tarte de Tamara e Cacau",
        description: "Doce natural com creme de iogurte suave",
        price: "R$ 34"
      },
      {
        title: "Mil-folhas de Mel e Nozes",
        description: "Camadas crocantes com especiarias delicadas",
        price: "R$ 33"
      }
    ]
  },
  {
    name: "Pratos exclusivos",
    items: [
      {
        title: "Cordeiro Braseado",
        description: "Reducao de especiarias e pure de grao-de-bico",
        price: "R$ 86"
      },
      {
        title: "Peixe Branco ao Tahine",
        description: "Molho de limao confit e legumes tostados",
        price: "R$ 79"
      },
      {
        title: "Ravioli de Abobora e Dukkah",
        description: "Manteiga aromatica e crocante de especiarias",
        price: "R$ 72"
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
