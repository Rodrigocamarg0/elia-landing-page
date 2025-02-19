import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Mariana Souza",
    role: "Microempreendedora",
    message: `Como microempreendedora, sempre tive dificuldades em organizar minhas finanças. A ${siteDetails.siteName} mudou completamente minha rotina, facilitando o controle de gastos e me dando mais tranquilidade para focar no meu negócio.`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Carlos Oliveira",
    role: "Professor de Matemática",
    message: `Fiquei impressionado com a praticidade e segurança que a ${siteDetails.siteName} oferece. Mesmo não sendo da área de tecnologia, consegui monitorar minhas receitas e despesas de forma simples e eficaz.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Ana Santos",
    role: "Recepcionista",
    message: `Sempre me enroscava no final do mês para fechar as contas. Agora, com a ${siteDetails.siteName}, registro tudo em tempo real e tenho uma visão clara dos meus gastos, sem complicação ou estresse.`,
    avatar: "/images/testimonial-3.webp",
  },
];