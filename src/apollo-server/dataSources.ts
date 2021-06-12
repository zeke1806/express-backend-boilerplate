import { HelloService } from '../hello/hello.service';

export const dataSources = () => {
    return {
        helloService: new HelloService(),
    };
};
export type DataSources = ReturnType<typeof dataSources>;
