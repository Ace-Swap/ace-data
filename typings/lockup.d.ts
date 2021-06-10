type User = {
    id: string,
    address: string,
    amount: number,
    rewardDebt: bigint,
    pool: {
        id: string,
        balance: number,
        accAcePerShare: bigint
    },
    aceAtLockup: number,
    aceHarvestedSinceLockup: number,
    aceLocked: number,
}

export function user({ block, timestamp, user_address }: {
    block?: number;
    timestamp?: number;
    user_address: string;
}): Promise<User[]>;