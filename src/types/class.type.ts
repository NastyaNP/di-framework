

export interface Class<T extends object> {
    new (...args: any[]): T;
}
