import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Free',
        price: 0,
        features: [
            '20 Transações no mês',
            '4 Categorias novas',
            '5 Leitura de imagens',
            '5 Audios',
            '5 Relatórios',
            '2 Lembretes ativos',
        ],
    },
    {
        name: 'Pro',
        price: 19,
        features: [
            'Transações ilimitadas',
            'Categorias ilimitadas',
            'Leitura de imagens ilimitadas',
            'Audios ilimitadas',
            '50 Relatórios no mês',
            '20 Lembretes ativos',
        ],
    },
    {
        name: 'Business',
        price: 49,
        features: [
            'Full cloud integration',
            'Unlimited team members',
            'Unlimited storage',
            '24/7 dedicated support',
            'Custom solutions',
            'On-site training',
        ],
    },
]