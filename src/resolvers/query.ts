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
        },cursos(): any {
            return databases.cursos;
        }
    }
}

export default query;