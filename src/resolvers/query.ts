import { IResolvers } from 'graphql-tools';
import { databases } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return databases.estudiantes;
        },
        estudiante(__: void, { id }): any {
            const resultado = databases.estudiantes.filter(estudiante => estudiante.id === id) [0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el registro con el ID ${id}`,
                    email: '',
                    courses: []
                }
            }
            return resultado;
        },
        cursos(): any {
            return databases.cursos;
        },
        curso(__: void, { curso }): any {
            const resultado = databases.cursos.filter(curso_ => curso_.id === curso) [0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    title: `No se ha encontrado el registro con el ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            }
            return resultado;
        },
    }
}

export default query;