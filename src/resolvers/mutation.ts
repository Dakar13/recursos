import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { databases } from '../data/data.store';

const mutation : IResolvers = {
    Mutation: {
        cursoNew(__:void, { curso }): any {
            const itemCurso = {
                id: String(databases.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }

            databases.cursos.push(itemCurso);
            return itemCurso;
        }
    }
}

export default mutation;