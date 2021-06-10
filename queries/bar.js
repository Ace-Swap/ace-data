const ws = require('isomorphic-ws');
const { SubscriptionClient } = require('subscriptions-transport-ws'); 

const { request, gql } = require('graphql-request');

const { graphAPIEndpoints, graphWSEndpoints, barAddress } = require('./../constants')
const { timestampToBlock } = require('./../utils');

module.exports = {
    async info({block = undefined, timestamp = undefined} = {}) {
        block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
        block = block ? `block: { number: ${block} }` : "";

        const result = await request(graphAPIEndpoints.bar,
            gql`{
                    bar(id: "${barAddress}", ${block}) {
                        ${info.properties.toString()}
                    }
                }`
        );

        return info.callback(result.bar);
    },

    observeInfo() {
        const query = gql`
            subscription {
                bar(id: "${barAddress}") {
                    ${info.properties.toString()}
                }
        }`;

        const client = new SubscriptionClient(graphWSEndpoints.bar, { reconnect: true, }, ws,);
        const observable = client.request({ query });

        return {
            subscribe({next, error, complete}) {
                return observable.subscribe({
                    next(results) {
                        next(info.callback(results.data.bar));
                    },
                    error,
                    complete
                });
            }
        };
    },

    async user({block = undefined, timestamp = undefined, user_address = undefined} = {}) {
        if(!user_address) { throw new Error("ace-data: User address undefined"); }

        block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
        block = block ? `block: { number: ${block} }` : "";

        const result = await request(graphAPIEndpoints.bar,
            gql`{
                    user(id: "${user_address.toLowerCase()}", ${block}) {
                        ${user.properties.toString()}
                    }
                }`
        );

        return user.callback(result.user);
    },
}

const info = {
    properties: [
        'decimals',
        'name',
        'ace',
        'symbol',
        'totalSupply',
        'ratio',
        'xAceMinted',
        'xAceBurned',
        'aceStaked',
        'aceStakedUSD',
        'aceHarvested',
        'aceHarvestedUSD',
        'xAceAge',
        'xAceAgeDestroyed',
        'updatedAt'
    ],

    callback(results) {
        return ({
            decimals: Number(results.decimals),
            name: results.name,
            ace: results.ace,
            symbol: results.symbol,
            totalSupply: Number(results.totalSupply),
            ratio: Number(results.ratio),
            xAceMinted: Number(results.xAceMinted),
            xAceBurned: Number(results.xAceBurned),
            aceStaked: Number(results.totalSupply) * Number(results.ratio),
            aceStakedUSD: Number(results.aceStakedUSD),
            aceHarvested: Number(results.aceHarvested),
            aceHarvestedUSD: Number(results.aceHarvestedUSD),
            xAceAge: Number(results.xAceAge),
            xAceAgeDestroyed: Number(results.xAceAgeDestroyed),
            updatedAt: Number(results.updatedAt)
        })
    }
};

const user = {
    properties: [
        'xAce',
        'xAceIn',
        'xAceOut',
        'xAceMinted',
        'xAceBurned',
        'xAceOffset',
        'xAceAge',
        'xAceAgeDestroyed',
        'aceStaked',
        'aceStakedUSD',
        'aceHarvested',
        'aceHarvestedUSD',
        'aceIn',
        'aceOut',
        'usdOut',
        'usdIn',
        'updatedAt',
        'aceOffset',
        'usdOffset'
    ],

    callback(results) {
        return ({
            xAce: Number(results.xAce),
            xAceIn: Number(results.xAceIn),
            xAceOut: Number(results.xAceOut),
            xAceMinted: Number(results.xAceMinted),
            xAceBurned: Number(results.xAceBurned),
            xAceOffset: Number(results.xAceOffset),
            xAceAge: Number(results.xAceAge),
            xAceAgeDestroyed: Number(results.xAceAgeDestroyed),
            aceStaked: Number(results.aceStaked),
            aceStakedUSD: Number(results.aceStakedUSD),
            aceHarvested: Number(results.aceHarvested),
            aceHarvestedUSD: Number(results.aceHarvestedUSD),
            aceIn: Number(results.aceIn),
            aceOut: Number(results.aceOut),
            usdOut: Number(results.usdOut),
            usdIn: Number(results.usdIn),
            updatedAt: Number(results.updatedAt),
            aceOffset: Number(results.aceOffset),
            usdOffset: Number(results.usdOffset)
        })
    }
};