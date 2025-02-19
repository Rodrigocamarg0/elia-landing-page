import {
    FiBarChart2,
    FiBriefcase,
    FiDollarSign,
    FiLock,
    FiPieChart,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiUser
  } from "react-icons/fi"
  
  import { IBenefit } from "@/types"
  
  export const benefits: IBenefit[] = [
    {
      title: "Finanças Simplificadas pelo WhatsApp",
      description:
        "Chega de planilhas e aplicativos complicados. A Elia é sua assistente financeira que registra despesas e receitas direto pelo WhatsApp, seja via áudio, texto ou foto. Você só conversa e ela faz todo o trabalho.",
      bullets: [
        {
          title: "Leitura Automática",
          description:
            "Reconhece e categoriza informações de texto, imagem e áudio em poucos instantes.",
          icon: <FiBarChart2 size={26} />
        },
        {
          title: "Atualizações em Tempo Real",
          description:
            "Receba feedback instantâneo sobre seus gastos e mantenha o controle diariamente.",
          icon: <FiTrendingUp size={26} />
        },
        {
          title: "Acompanhamento Personalizado",
          description:
            "Defina objetivos financeiros e acompanhe seus relatórios sem precisar abrir nenhum app.",
          icon: <FiTarget size={26} />
        }
      ],
      imageSrc: "/images/mockup-1.webp"
    },
    {
      title: "Conversa Amigável, Inteligência Avançada",
      description:
        "A Elia simplifica a organização das suas finanças com um tom de voz acolhedor e jovial, mas com autoridade de quem entende do assunto. Tudo para você se sentir seguro(a) ao cuidar do seu dinheiro.",
      bullets: [
        {
          title: "Tom de Voz Próximo e Experiente",
          description:
            "Fale com a Elia como se estivesse falando com uma amiga que realmente entende de finanças.",
          icon: <FiUser size={26} />
        },
        {
          title: "Insights Sem Complicação",
          description:
            "Identifique seus hábitos de consumo e oportunidades de economia de forma ágil.",
          icon: <FiPieChart size={26} />
        },
        {
          title: "Sempre ao Seu Lado",
          description:
            "Use o WhatsApp em qualquer lugar, a qualquer hora, para registrar suas despesas e receitas.",
          icon: <FiDollarSign size={26} />
        }
      ],
      imageSrc: "/images/mockup-2.webp"
    },
    {
      title: "Segurança de Nível Bancário",
      description:
        "Compartilhe suas informações com tranquilidade. A Elia protege seus dados e respeita sua privacidade em cada interação, garantindo total confiança no uso diário.",
      bullets: [
        {
          title: "Criptografia de Ponta a Ponta",
          description:
            "Protegemos suas informações financeiras com tecnologia de alto padrão.",
          icon: <FiLock size={26} />
        },
        {
          title: "Monitoramento Contínuo",
          description:
            "Detecção de fraudes e alertas imediatos para manter seus dados sempre seguros.",
          icon: <FiShield size={26} />
        },
        {
          title: "Filosofia de Atendimento",
          description:
            "Direto, ágil e centrado em você, mantendo respeito e confiança em cada conversa.",
          icon: <FiBriefcase size={26} />
        }
      ],
      imageSrc: "/images/mockup-1.webp"
    }
  ]
  