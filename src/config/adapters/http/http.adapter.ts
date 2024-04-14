


export abstract class HttpAdapter {

    abstract get<T>( url: string,  opttions?: Record<string, unknown>  ): Promise<T>;
}