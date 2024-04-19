self.__uv$config = {
    prefix: 'https://history.about.dansted.org/a/',
    bare: 'https://history.about.dansted.org/o/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: 'https://history.about.dansted.org/m/bundle.js?v=5',
    config: '/uv/uv.config.js',
    sw: 'https://history.about.dansted.org/m/sw.js?v=4',
};
