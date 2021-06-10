type Info = {
    decimals: number;
    name: string;
    ace: string;
    symbol: string;
    totalSupply: number;
    ratio: number;
    xAceMinted: number;
    xAceBurned: number;
    aceStaked: number;
    aceStakedUSD: number;
    aceHarvested: number;
    aceHarvestedUSD: number;
    xAceAge: number;
    xAceAgeDestroyed: number;
    updatedAt: number;
}

export function info({ block, timestamp }?: {
    block?: number;
    timestamp?: number;
}): Promise<Info>;

export function observeInfo(): {
    subscribe({ next, error, complete }: {
        next?(data: Info): any;
        error?(error: any): any;
        complete?: Function;
    }): any;
};



type User = {
    xAce: number;
    xAceIn: number;
    xAceOut: number;
    xAceMinted: number;
    xAceBurned: number;
    xAceOffset: number;
    xAceAge: number;
    xAceAgeDestroyed: number;
    aceStaked: number;
    aceStakedUSD: number;
    aceHarvested: number;
    aceHarvestedUSD: number;
    aceIn: number;
    aceOut: number;
    usdOut: number;
    usdIn: number;
    updatedAt: number;
    aceOffset: number;
    usdOffset: number;
}

export function user({ block, timestamp, user_address }: {
    block?: number;
    timestamp?: number;
    user_address: string;
}): Promise<User>;
