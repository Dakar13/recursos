import { IResolvers } from 'graphql-tools';
import { databases } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return databases.estudiantes;
        }
    }
}

export default query;