const appConfig = {
    spaceX: {
        domain: process.env.SPACE_X_DATA_DOMAIN,
        services: {
            launches: process.env.SPACE_X_LAUNCHES,
            version: process.env.SPACE_X_V4
        }
    }
};

export default appConfig;