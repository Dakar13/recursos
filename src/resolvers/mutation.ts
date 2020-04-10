import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { databases } from '../data/data.store';
import { cursorTo } from 'readline';

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
        },

        modifCurso(__:void, { curso }): any {
            const elementoExiste = _.findIndex(databases.cursos, function (o) {
                return o.id === curso.id  
            });
                if (elementoExiste > -1 ){
                    const valoraciones = databases.cursos[elementoExiste].reviews;
                    curso.reviews = valoraciones;
                    databases.cursos[elementoExiste] = curso;

                    return curso;
                }

                return {
                    id: '-1',
                    title: `El registro con este titulo no existe`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    level: 'TODOS',
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
                };
        },

        delCurso(__:void, { id }): any {
            const borraCurso = _.remove(databases.cursos, function(curso) {
                return curso.id === id;
            });

            if (borraCurso[0] === undefined) {
                return {
                    id: '-1',
                    title: `El registro con ese ID, no existe`,
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
            return borraCurso[0];
        }
    }
}

export default mutation;