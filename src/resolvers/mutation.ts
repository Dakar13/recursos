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
                if (databases.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0){
                    databases.cursos.push(itemCurso);
                    return itemCurso;

                }
                return {
                    id: '-1',
                    title: `El registro con este titulo ya existe`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    level: 'TODOS',
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
            };
        }
    }
}

export default mutation;